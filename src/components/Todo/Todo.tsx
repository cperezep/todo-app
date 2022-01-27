import React, { useEffect } from 'react';
import { getTodos, updateTodo, useTodo } from '../../context/todo-context';
import { Todo as TodoType } from '../../types/Todo';
import { Spinner } from '../Spinner';
import { TodoList } from '../TodoList';
import './Todo.scss';

export const Todo = () => {
  const [{ status, error }, dispatch] = useTodo();

  useEffect(() => {
    getTodos(dispatch);
  }, [dispatch]);

  const toggleCheck = (todo: TodoType) => {
    updateTodo(dispatch, todo, { ...todo, isComplete: !todo.isComplete });
  };

  return (
    <div className="todo">
      {(status === 'PENDING' || status === 'IDLE') && <Spinner />}
      {status === 'RESOLVED' && <TodoList onClick={toggleCheck} />}
      {status === 'REJECTED' && (
        <div role="alert">
          Something went wrong: <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
        </div>
      )}
    </div>
  );
};
