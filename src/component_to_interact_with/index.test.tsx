/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ComponentToInteractWith from './index'

let tree: RenderResult;

describe('ComponentToInteractWith', () => {
    beforeEach(async () => {
        await act(async () => {
            tree = await render(<ComponentToInteractWith/>);
        });
    });
    test('Click the button', async () => {
        const button = tree.queryByText("Click me!");
        expect(button).toBeVisible();
        expect(tree.queryByText("This button was clicked 0 times")).toBeVisible();
        act(() => {
            fireEvent.click(button!)
        });
        expect(tree.queryByText("This button was clicked 1 times")).toBeVisible();
    });
    test('Select radio button', async () => {

    })
})