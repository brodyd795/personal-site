import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Index from '../../pages';

describe('Index', () => {
    test('should do stuff', async () => {
        render(<Index />);

        expect(await screen.findByText("Hi, I'm Brody.")).toBeVisible();
    });
});
