import { Todo } from '../types/Todo';

type Status = 'IDLE' | 'PENDING' | 'RESOLVED' | 'REJECTED';

export type TodoState = {
  status: Status;
  data?: Array<Todo>;
  error?: Error;
};

export type TodoAction =
  | { type: 'PENDING' }
  | { type: 'GET_TODOS'; data: Array<Todo> }
  | { type: 'UPDATE_TODO'; data: Todo }
  | { type: 'REJECTED'; error: Error };

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'PENDING': {
      return { ...state, status: 'PENDING' };
    }
    case 'GET_TODOS': {
      return { status: 'RESOLVED', data: action.data, error: null };
    }
    case 'UPDATE_TODO': {
      return {
        ...state,
        status: 'RESOLVED',
        data: state.data.map((todo) => (todo.id === action.data.id ? action.data : todo)),
      };
    }
    case 'REJECTED': {
      return { status: 'REJECTED', data: null, error: action.error };
    }
  }
}

export { todoReducer };
