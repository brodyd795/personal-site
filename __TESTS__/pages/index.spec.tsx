import React from 'react';
import {render as rtlRender, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Index from '../../pages';

describe('Index', () => {
    const render = () => rtlRender(<Index />);

    test('should do stuff', async () => {
        render();

        expect(await screen.findByText("Hi, I'm Brody.")).toBeVisible();
    });
});
