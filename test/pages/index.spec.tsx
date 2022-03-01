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
			const aboutLink = await screen.findByRole('link', {name: 'About'});
			const contactLink = await screen.findByRole('link', {name: 'Contact'});

			expect(homeLink).toBeVisible();
			expect(homeLink).toHaveAttribute('href', '/');
			expect(aboutLink).toBeVisible();
			expect(aboutLink).toHaveAttribute('href', '/about');
			expect(contactLink).toBeVisible();
			expect(contactLink).toHaveAttribute('href', '/#contact');

			expect(await screen.findByText('Brody Dingel')).toBeVisible();
			expect(
				await screen.findByText('Full-stack software engineer at Hy-Vee')
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

			user.click(
				await screen.findByRole('button', {name: 'Show More Projects'})
			);

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

			user.click(
				await screen.findByRole('button', {name: 'Show Less Projects'})
			);

			expect(screen.queryByText(projects[3].name)).toBeNull();
		});
	});

	describe('reading list', () => {
		test('should show reading list', async () => {
			const {domain, description, title} = readingListMockData.list[0];
			render();

			expect(await screen.findByText(domain)).toBeVisible();
			expect(await screen.findByText(description)).toBeVisible();
			expect(await screen.findByText(title)).toBeVisible();
		});

		test('should show reading list error', async () => {
			server.use(readingListErrorHandler);

			render();

			expect(await screen.findByText('An error occurred.')).toBeVisible();
		});

		test('should show reading list loading state', async () => {
			server.use(readingListLoadingHandler);

			render();

			expect(await screen.findByText('Loading...')).toBeVisible();
		});
	});

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

			for (let eventsIndex = 0; eventsIndex < events.length; eventsIndex += 1) {
				const {heading} = events[eventsIndex];

				expect(await screen.findByText(heading)).toBeVisible();
				// TODO: subtext uses markdown, so can't find the text easily...
				// expect(await screen.findByText(subtext)).toBeVisible();
			}
		}
	});

	test('should show more timeline events', async () => {
		render();

		const {year: nextYear, events: nextYearEvents} = timelineEvents[4];

		expect(screen.queryByText(nextYear)).toBeNull();

		user.click(await screen.findByRole('button', {name: 'Show more'}));

		expect(await screen.findByText(nextYear)).toBeVisible();
		expect(await screen.findByText(nextYearEvents[0].heading)).toBeVisible();

		expect(screen.queryByRole('button', {name: 'Show more'})).toBeNull();
	});

	test('should allow user to fill out contact form and alert on success', async () => {
		render();

		expect(await screen.findByRole('heading', {name: 'Contact'})).toBeVisible();
		expect(
			await screen.findByRole('heading', {
				name: 'Drop a message, ask a question, or just say hi!'
			})
		).toBeVisible();

		const nameField = await screen.findByLabelText('name');
		const emailField = await screen.findByLabelText('email');
		const messageField = await screen.findByLabelText('message');
		const sendButton = await screen.findByRole('button', {name: 'Send'});

		expect(nameField).toHaveTextContent('');
		expect(nameField).toHaveAttribute('placeholder', 'First and last name');
		expect(emailField).toHaveTextContent('');
		expect(emailField).toHaveAttribute('placeholder', 'you@some-domain.com');
		expect(messageField).toHaveTextContent('');
		expect(messageField).toHaveAttribute('placeholder', "How's it going?");

		user.type(nameField, 'Brody');
		user.type(emailField, 'brodydingel@gmail.com');
		user.type(messageField, 'This is only a test!');
		user.click(sendButton);

		expect(await screen.findByText('Success!')).toBeVisible();
		expect(
			await screen.findByText('I’ll get back to you as soon as I can.')
		).toBeVisible();
	});

	test('should alert user on failure of filling out contact form', async () => {
		server.use(contactHandlerOnFailure);

		render();

		const nameField = await screen.findByLabelText('name');
		const emailField = await screen.findByLabelText('email');
		const messageField = await screen.findByLabelText('message');
		const sendButton = await screen.findByRole('button', {name: 'Send'});

		user.type(nameField, 'Brody');
		user.type(emailField, 'brodydingel@gmail.com');
		user.type(messageField, 'This is only a test!');
		user.click(sendButton);

		expect(await screen.findByText('Oops!')).toBeVisible();
		expect(await screen.findByText('Something went wrong.')).toBeVisible();
	});

	test('should show footer', async () => {
		render();

		const currentYear = new Date().getFullYear();

		expect(
			await screen.findByText(`© 2020 – ${currentYear} Brody Dingel`)
		).toBeVisible();
	});
});
