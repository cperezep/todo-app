import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  test('Should render the component', () => {
    const { container } = render(<Navbar />);
    expect(container.innerHTML).toMatchInlineSnapshot(`"<nav class=\\"navbar\\">Todo App</nav>"`);
  });
});
