import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  test('Should render the component', () => {
    const { container } = render(<Spinner />);
    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div class=\\"lds-dual-ring\\" aria-label=\\"loading...\\"></div>"`,
    );
  });
});
