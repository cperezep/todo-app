import React from 'react';
import { API } from '../api/todos';
import { todoReducer } from './todo-reducer';
import type { TodoAction, TodoState } from './todo-reducer';
import type { Todo } from '../types/Todo';

type TodoContextType = [TodoState, React.Dispatch<TodoAction>];
const TodoContext = React.createContext<TodoContextType>(undefined);
TodoContext.displayName = 'TodoContext';

function TodoProvider({
  initialState = {
    status: 'IDLE',
    data: null,
    error: null,
  },
  ...props
}: {
  initialState?: TodoState;
  children: React.ReactNode;
}) {
  const [todos, dispatch] = React.useReducer(todoReducer, initialState);

  return <TodoContext.Provider value={[todos, dispatch]} {...props} />;
}

function useTodo() {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoContextProvider');
  }

  return context;
}

async function getTodos(dispatch: React.Dispatch<TodoAction>) {
  dispatch({ type: 'PENDING' });
  try {
    const todos = await API.getTodos();
    dispatch({ type: 'GET_TODOS', data: todos });
  } catch (error) {
    dispatch({ type: 'REJECTED', error });
  }
}

async function updateTodo(dispatch: React.Dispatch<TodoAction>, todo: Todo, updates: Partial<Todo>) {
  dispatch({ type: 'PENDING' });
  try {
    await API.updateTodo(todo.id, updates);
    dispatch({ type: 'UPDATE_TODO', data: { ...todo, ...updates } });
  } catch (error) {
    dispatch({ type: 'REJECTED', error });
  }
}

export { TodoProvider, useTodo, getTodos, updateTodo };
