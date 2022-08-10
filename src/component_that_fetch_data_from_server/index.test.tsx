import ComponentThatFetchDataFromServer from './index'
import { act } from "react-dom/test-utils";
import { render, RenderResult } from '@testing-library/react';
import * as fetchFunctions from './fetchFunction';

let tree: RenderResult;

const mockFetchData = jest.spyOn(fetchFunctions, 'fetchData');

test('ComponentThatFetchDataFromServer renders well', async () => {
        await act(async () => {
            mockFetchData.mockReturnValue(Promise.resolve("This is a mock response"));
            tree = await render(<ComponentThatFetchDataFromServer/>);
        });
        expect(tree.queryByText("This is a mock response")).toBeVisible();
    });
