/* eslint-disable no-await-in-loop */
import React from 'react';
import {render as rtlRender, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';

import {projects} from '../../data/projects';
import Index from '../../pages';
import { timelineEvents } from '../../data/timeline-events';

describe('Index', () => {
    const render = () => rtlRender(<Index />);

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

        expect(await screen.findByText("Hi, I'm Brody.")).toBeVisible();
        expect(await screen.findByText("I'm a full-stack software engineer. I currently work as a Software Engineer at Hy-Vee on the Browse/Shop team. Nice to meet you!")).toBeVisible();
    });

    test('should show projects', async () => {
        render();

        expect(await screen.findByRole('heading', {name: 'Projects'})).toBeVisible();

        for (let index = 0; index < projects.length; index += 1) {
            const {name: projectName, link, technologies: projectTechnologies} = projects[index];

            const name = await screen.findByText(projectName);
            const image = await screen.findByAltText(projectName);
            const card = await screen.findByTestId(`project-card-${projectName}`);
            const technologies = await screen.findByText(projectTechnologies.join(', '));

            expect(name).toBeVisible();
            expect(technologies).toBeVisible();
            expect(image).toBeVisible();
            expect(card).toHaveAttribute('href', link);
        }
    });

    test('should show initial timeline events', async () => {
        render();

        expect(await screen.findByRole('heading', {name: 'Timeline'})).toBeVisible();

        const initialEvents = timelineEvents.slice(0, 3);

        for (let initialEventsIndex = 0; initialEventsIndex < initialEvents.length; initialEventsIndex += 1) {
            const {year, events} = initialEvents[initialEventsIndex];

            expect(await screen.findByText(year)).toBeVisible();

            for (let eventsIndex = 0; eventsIndex < events.length; eventsIndex += 1) {
                const {heading} = events[eventsIndex];

                expect(await screen.findByText(heading)).toBeVisible();
                // TODO: subtext uses markdown, so can't find the text easily...
                // expect(await screen.findByText(subtext)).toBeVisible();
            };
        };
    });
    
    test('should show more timeline events', async () => {
        render();

        const {year: nextYear, events: nextYearEvents} = timelineEvents.at(4)!;

        expect(screen.queryByText(nextYear)).toBeNull();

        user.click(await screen.findByRole('button', {name: 'See All'}));

        expect(await screen.findByText(nextYear)).toBeVisible();
        expect(await screen.findByText(nextYearEvents[0].heading)).toBeVisible();

        expect(screen.queryByRole('button', {name: 'See All'})).toBeNull();
    });
});
