import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { Todo } from './Todo';
import { providerWithoutData } from '../../mocks/test-utils';
import { server } from '../../mocks/server';
import { todos } from '../../mocks/mock';

// Mock the server
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const baseURL = process.env.REACT_APP_BASE_URL;

describe('Todo', () => {
  test('Should show the Spinner', () => {
    providerWithoutData(<Todo />);

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });

  test('Should get all the todos from mock server', async () => {
    providerWithoutData(<Todo />);

    await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

    const todosInScreen = screen.getAllByTestId('checkbox-container');

    expect(todosInScreen.length).toEqual(todos.length);
  });

  test('Should update the todo state', async () => {
    const { debug } = providerWithoutData(<Todo />);

    await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

    let checkbox = screen.getByRole('checkbox', {
      name: /feed the cat/i,
    }).firstChild as HTMLInputElement;

    expect(checkbox.checked).toEqual(false);

    userEvent.click(checkbox);

    await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

    checkbox = screen.getByRole('checkbox', {
      name: /feed the cat/i,
    }).firstChild as HTMLInputElement;

    debug(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  test('Should display the error message from the server', async () => {
    const testErrorMessage = 'Request failed with status code 500';
    server.use(
      rest.get(`${baseURL}/get`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: testErrorMessage }));
      }),
    );
    providerWithoutData(<Todo />);

    await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

    expect(screen.getByRole('alert')).toHaveTextContent(testErrorMessage);
  });
});
