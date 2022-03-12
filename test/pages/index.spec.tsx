/* eslint-disable no-await-in-loop */
import React from 'react';
import {screen, cleanup, render as rtlRender} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
import {SWRConfig} from 'swr';

import * as nextRouter from 'next/router';
import {projects} from '../../data/projects';
import {timelineEvents} from '../../components/timeline-events';
import {
	server,
	contactHandlerOnFailure,
	readingListErrorHandler,
	readingListLoadingHandler,
	readingListMockData
} from '../infrastructure';
import Index from '../../pages/index';
import {createRouter} from '../mocks/nextRouterMock';
import {readingListDefaultData} from '../../data/reading';

describe('Index', () => {
	const {useRouter} = nextRouter as jest.Mocked<typeof nextRouter>;

	let expectedRouter: nextRouter.NextRouter;

	const render = () => {
		const Wrapper = ({children}: {children: React.ReactNode}) => (
			<SWRConfig value={{provider: () => new Map()}}>{children}</SWRConfig>
		);

		return rtlRender(<Index />, {
			wrapper: Wrapper
		});
	};

	beforeAll(() => {
		server.listen({
			onUnhandledRequest: 'error'
		});
	});

	beforeEach(() => {
		const location = {
			...window.location,
			origin: 'http://localhost:3000'
		};
		Object.defineProperty(window, 'location', {
			writable: true,
			value: location
		});

		expectedRouter = createRouter();
		useRouter.mockReturnValue(expectedRouter);

		server.resetHandlers();
	});

	afterEach(() => {
		cleanup();
	});

	afterAll(() => {
		server.close();
	});

	describe('header', () => {
		test('should show header', async () => {
			render();

			const homeLink = await screen.findByRole('link', {name: 'Home'});
			const resumeLink = await screen.findByRole('link', {name: 'Resume'});
			const contactLink = await screen.findByRole('link', {name: 'Contact'});

			expect(homeLink).toBeVisible();
			expect(homeLink).toHaveAttribute('href', '/');
			expect(resumeLink).toBeVisible();
			expect(resumeLink).toHaveAttribute('href', '/resume.pdf');
			expect(contactLink).toBeVisible();
			expect(contactLink).toHaveAttribute('href', '/#contact');

			expect(await screen.findByText('Brody Dingel')).toBeVisible();
			expect(
				await screen.findByText('Full-stack software engineer at Hy-Vee')
			).toBeVisible();
		});
	});

	describe('about', () => {
		test('should show about section', async () => {
			render();

			expect(
				await screen.findByText(
					'Full-stack software engineer in ecommerce at Hy-Vee'
				)
			).toBeVisible();
			expect(screen.queryByText('You want to know more? Alright!')).toBeNull();
		});

		test('should show more', async () => {
			render();

			user.click(await screen.findByRole('button', {name: 'More about me'}));
			expect(
				await screen.findByText('You want to know more? Alright!')
			).toBeVisible();
		});
	});

	describe('projects', () => {
		test('should show first three projects', async () => {
			render();

			expect(
				await screen.findByRole('heading', {name: 'Projects'})
			).toBeVisible();

			for (let index = 0; index < 3; index += 1) {
				const {
					name: projectName,
					link,
					technologies: projectTechnologies
				} = projects[index];

				const name = await screen.findByText(projectName);
				const card = await screen.findByTestId(`project-card-${projectName}`);
				const technologies = await screen.findByText(
					projectTechnologies.join(', ')
				);

				expect(name).toBeVisible();
				expect(technologies).toBeVisible();
				expect(card).toHaveAttribute('href', link);
			}

			for (let index = 3; index < projects.length; index += 1) {
				const name = screen.queryByText(projects[index].name);

				expect(name).toBeNull();
			}
		});

		test('Show More button should work for projects', async () => {
			render();

			expect(
				await screen.findByRole('heading', {name: 'Projects'})
			).toBeVisible();

			user.click(await screen.findByRole('button', {name: 'More projects'}));

			for (let index = 0; index < projects.length; index += 1) {
				const {
					name: projectName,
					link,
					technologies: projectTechnologies
				} = projects[index];

				const name = await screen.findByText(projectName);
				const card = await screen.findByTestId(`project-card-${projectName}`);
				const technologies = await screen.findByText(
					projectTechnologies.join(', ')
				);

				expect(name).toBeVisible();
				expect(technologies).toBeVisible();
				expect(card).toHaveAttribute('href', link);
			}

			user.click(await screen.findByRole('button', {name: 'Less projects'}));

			expect(screen.queryByText(projects[3].name)).toBeNull();
		});
	});

	describe('reading list', () => {
		test('should show reading list', async () => {
			const {domain, description, title} = readingListMockData.list[0];
			render();

			expect(await screen.findByText(domain!)).toBeVisible();
			expect(await screen.findByText(description!)).toBeVisible();
			expect(await screen.findByText(title)).toBeVisible();
		});

		test('should show reading list error', async () => {
			server.use(readingListErrorHandler);

			render();

			for (let i = 0; i < readingListDefaultData.list.length; i += 1) {
				const {domain, description, title} = readingListDefaultData.list[i];

				expect(await screen.findByText(domain!)).toBeVisible();
				expect(await screen.findByText(description!)).toBeVisible();
				expect(await screen.findByText(title)).toBeVisible();
			}
		});

		test('should show reading list loading state', async () => {
			server.use(readingListLoadingHandler);

			render();

			expect(await screen.findByText('Loading...')).toBeVisible();
		});
	});

	describe('timeline', () => {
		test('should show initial timeline events', async () => {
			render();

			expect(
				await screen.findByRole('heading', {name: 'Timeline'})
			).toBeVisible();

			const initialEvents = timelineEvents.slice(0, 3);

			for (
				let initialEventsIndex = 0;
				initialEventsIndex < initialEvents.length;
				initialEventsIndex += 1
			) {
				const {year, events} = initialEvents[initialEventsIndex];

				expect(await screen.findByText(year)).toBeVisible();

				for (
					let eventsIndex = 0;
					eventsIndex < events.length;
					eventsIndex += 1
				) {
					const {heading} = events[eventsIndex];

					expect(await screen.findByText(heading)).toBeVisible();
				}
			}

			// `event.subtext` is JSX, so I can't use `findByText` on it
			// this is good enough for now!
			expect(
				await screen.findByText(
					'Honored by the ISU Alumni Center for early professional accomplishments.'
				)
			).toBeVisible();
		});

		test('should show more timeline events', async () => {
			render();

			const {year: nextYear, events: nextYearEvents} = timelineEvents[4];

			expect(screen.queryByText(nextYear)).toBeNull();

			user.click(await screen.findByRole('button', {name: 'More events'}));

			expect(await screen.findByText(nextYear)).toBeVisible();
			expect(await screen.findByText(nextYearEvents[0].heading)).toBeVisible();

			expect(screen.queryByRole('button', {name: 'More events'})).toBeNull();
			expect(
				await screen.findByRole('button', {name: 'Less events'})
			).toBeVisible();
		});
	});

	describe('contact', () => {
		test('should allow user to fill out contact form and alert on success', async () => {
			render();

			expect(
				await screen.findByRole('heading', {name: 'Contact'})
			).toBeVisible();
			expect(
				await screen.findByRole('heading', {
					name: 'Drop a message, ask a question, or just say hi!'
				})
			).toBeVisible();

			const nameField = await screen.findByLabelText('name');
			const emailField = await screen.findByLabelText('email');
			const messageField = await screen.findByLabelText('message');
			const sendButton = await screen.findByRole('button', {
				name: 'Send message'
			});

			expect(nameField).toHaveTextContent('');
			expect(nameField).toHaveAttribute('placeholder', 'Your name');
			expect(emailField).toHaveTextContent('');
			expect(emailField).toHaveAttribute('placeholder', 'you@some-domain.com');
			expect(messageField).toHaveTextContent('');
			expect(messageField).toHaveAttribute('placeholder', "How's it going?");

			user.type(nameField, 'Brody');
			user.type(emailField, 'brodydingel@gmail.com');
			user.type(messageField, 'This is only a test!');
			user.click(sendButton);

			expect(
				await screen.findByTestId('contact-success-icon-true')
			).toBeDefined();
			expect(
				await screen.findByText('Thanks for reaching out!!')
			).toBeVisible();
			expect(await screen.findByText("I'll be in touch.")).toBeVisible();
			expect(sendButton).toBeDisabled();
		});

		test('should alert user on failure of filling out contact form', async () => {
			server.use(contactHandlerOnFailure);

			render();

			const nameField = await screen.findByLabelText('name');
			const emailField = await screen.findByLabelText('email');
			const messageField = await screen.findByLabelText('message');
			const sendButton = await screen.findByRole('button', {
				name: 'Send message'
			});

			user.type(nameField, 'Brody');
			user.type(emailField, 'brodydingel@gmail.com');
			user.type(messageField, 'This is only a test!');
			user.click(sendButton);

			expect(
				await screen.findByTestId('contact-success-icon-false')
			).toBeDefined();
			expect(
				await screen.findByText('Oops, something went wrong.')
			).toBeVisible();
			expect(await screen.findByText("I'll look into that.")).toBeVisible();
			expect(sendButton).not.toBeDisabled();
		});
	});

	describe('footer', () => {
		test('should show footer', async () => {
			render();

			const currentYear = new Date().getFullYear();

			expect(
				await screen.findByText(`© 2020 – ${currentYear} Brody Dingel`)
			).toBeVisible();
		});
	});
});
