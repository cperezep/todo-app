import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
  test('Should render the ErrorBoundary', () => {
    const testErrorMessage = 'An error occurrred';
    const ThrowError = () => {
      throw new Error(testErrorMessage);
    };
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(screen.getByRole('alert')).toHaveTextContent(testErrorMessage);
  });
});
