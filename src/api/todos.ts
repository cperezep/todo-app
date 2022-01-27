import { Todo } from '../types/Todo';
import request from './request';

async function getTodos(): Promise<Array<Todo>> {
  const { data } = await request<Array<Todo>>('GET', 'get');
  if (!data) {
    throw new Error('Something went wrong!');
  }
  return data;
}

async function updateTodo(todoId: string, updates: Partial<Todo>): Promise<void> {
  const { status } = await request<Todo>('PATCH', `patch/${todoId}`, updates);
  if (status !== 200) {
    throw new Error('Something went wrong!');
  }
}

export const API = { getTodos, updateTodo };
