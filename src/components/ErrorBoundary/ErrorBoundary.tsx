import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import type { FallbackProps, ErrorBoundaryProps } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      Something went wrong: <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function ErrorBoundary(props: Pick<ErrorBoundaryProps, 'onReset' | 'resetKeys'> & { children: React.ReactNode }) {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback} {...props}></ReactErrorBoundary>;
}
export { ErrorBoundary };
