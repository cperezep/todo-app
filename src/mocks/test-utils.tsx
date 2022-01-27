import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { TodoProvider } from '../context/todo-context';
import { todos } from './mock';

export function providerWithData(ui: React.ReactElement, options?: RenderOptions) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <TodoProvider initialState={{ status: 'RESOLVED', data: todos, error: null }}>{children}</TodoProvider>;
  }

  return render(ui, { wrapper: Wrapper, ...options });
}

export function providerWithoutData(ui: React.ReactElement, options?: RenderOptions) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <TodoProvider>{children}</TodoProvider>;
  }

  return render(ui, { wrapper: Wrapper, ...options });
}
