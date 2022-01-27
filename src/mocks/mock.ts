import { Todo } from '../types/Todo';

export const todos: Array<Todo> = [
  {
    id: '1',
    description: 'File 2020 Taxes',
    isComplete: true,
    dueDate: '2020-03-10T17:50:44.673Z',
  },
  {
    id: '2',
    description: 'Fold laundry',
    isComplete: true,
    dueDate: null,
  },
  {
    id: '3',
    description: 'Call Mom',
    isComplete: false,
    dueDate: '2020-06-26T19:00:00.000Z',
  },
  {
    id: '4',
    description: 'Walk the dog',
    isComplete: false,
    dueDate: null,
  },
  {
    id: '5',
    description: 'Feed the cat',
    isComplete: false,
    dueDate: '2020-06-24T15:45:00.000Z',
  },
  {
    id: '6',
    description: 'Run LA marathon',
    isComplete: false,
    dueDate: '2021-03-21T13:30:00.000Z',
  },
];
