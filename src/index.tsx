import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Todo } from './components/Todo';
import { TodoProvider } from './context/todo-context';
import './index.scss';

function App() {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <TodoProvider>
          <Todo />
        </TodoProvider>
      </ErrorBoundary>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
