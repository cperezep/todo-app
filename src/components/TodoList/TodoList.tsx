import React from 'react';
import { useTodo } from '../../context/todo-context';
import { Todo } from '../../types/Todo';
import { splitByCondition } from '../../utils/split-by-condition';
import { Checkbox } from '../Checkbox';
import './TodoList.scss';

type TodoListProps = {
  onClick: (todo: Todo) => void;
};

export const TodoList = ({ onClick }: TodoListProps) => {
  const [{ data }] = useTodo();
  const [completedTodos, notCompletedTodos] = splitByCondition<Todo>(data, (todo: Todo) => todo.isComplete);
  const [todosWithDate, todosWithoutDate] = splitByCondition<Todo>(notCompletedTodos, (todo) => todo.dueDate !== null);
  const sortedTodos = [...sortTodos(todosWithDate), ...todosWithoutDate, ...completedTodos];

  function sortTodos(todos: Array<Todo>) {
    return todos.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  }

  return (
    <div className="todo-list">
      <div className="todo-list__content">
        {sortedTodos.map((todoItem) => (
          <Checkbox
            key={todoItem.id}
            checked={todoItem.isComplete}
            dueDate={todoItem.dueDate}
            label={todoItem.description}
            onClick={() => onClick(todoItem)}
          />
        ))}
      </div>
    </div>
  );
};
