/* eslint-disable no-await-in-loop */
import React from 'react';
import {render as rtlRender, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {projects} from '../../data/projects';
import Index from '../../pages';

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
});
