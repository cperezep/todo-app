import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

const mockData = {
  overdue: { checked: false, dueDate: '2020-06-24T15:45:00.000Z', label: 'Run LA marathon', onClick: jest.fn() },
  checked: { checked: true, dueDate: null, label: 'Run LA marathon', onClick: jest.fn() },
};

describe('Checkbox', () => {
  test('Should check the checkbox is uncheck', async () => {
    render(<Checkbox {...mockData.overdue} />);
    const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;

    expect(checkbox.checked).toEqual(false);
  });

  test('Should check the checkbox has overdue date', async () => {
    render(<Checkbox {...mockData.overdue} />);
    const todo = screen.getByTestId('checkbox-container');

    expect(todo).toHaveClass('overdue');
  });

  test('Should format the overdueDate', async () => {
    render(<Checkbox {...mockData.overdue} />);
    const label = screen.getByTestId('checkbox-date');

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(/6\/24\/2020/i);
  });

  test('Should check the checkbox is checked', async () => {
    render(<Checkbox {...mockData.checked} />);
    const todo = screen.getByTestId('checkbox-container');
    const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;
    const label = screen.getByText(mockData.checked.label);

    expect(checkbox.checked).toEqual(true);
    // background: green
    expect(todo).toHaveClass('checked');
    // line-through
    expect(label).toHaveClass('checkbox__checked');
  });

  test('Should check the checkbox call the onChange', async () => {
    const handleChange = jest.fn();
    render(<Checkbox {...mockData.checked} onClick={handleChange} />);
    const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;
    userEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
