import React from 'react';
import {render as rtlRender, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
});
