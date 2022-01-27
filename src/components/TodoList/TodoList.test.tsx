import React from 'react';
import { screen } from '@testing-library/react';
import { TodoList } from './TodoList';
import { providerWithData } from '../../mocks/test-utils';
import { todos } from '../../mocks/mock';

describe('TodoList', () => {
  test('Should render the list of todos', () => {
    const handleClick = jest.fn();
    providerWithData(<TodoList onClick={handleClick} />);
    const todosInScreen = screen.getAllByTestId('checkbox-container');

    expect(todosInScreen.length).toEqual(todos.length);
  });

  test('Should sort the list of todos', () => {
    const handleClick = jest.fn();
    providerWithData(<TodoList onClick={handleClick} />);
    const [firstTodo] = screen.getAllByTestId('checkbox-container');

    expect(firstTodo.lastChild).toHaveTextContent(/6\/24\/2020/i);
  });
});
