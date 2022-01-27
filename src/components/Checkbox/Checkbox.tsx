import React from 'react';
import classNames from 'classnames';
import './Checkbox.scss';

type CheckboxProps = {
  onClick: () => void;
  checked: boolean;
  label: string;
  dueDate: string | null;
};

export const Checkbox = ({ checked, dueDate, label, onClick }: CheckboxProps) => {
  const classes = classNames('checkbox', {
    overdue: dueDate && isOverdueDate(dueDate) && !checked,
    checked: checked,
  });

  function isOverdueDate(date: string): boolean {
    return new Date(date) < new Date();
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleString().split(',')[0];
  }

  return (
    <div className={classes} data-testid="checkbox-container">
      <div tabIndex={0} role="checkbox" aria-checked className="checkbox__content">
        <input data-testid="checkbox" tabIndex={-1} type="checkbox" checked={checked} onChange={onClick} />
        <span className={checked ? 'checkbox__checked' : ''}>{label}</span>
      </div>
      {dueDate && (
        <label className="checkbox__date" data-testid="checkbox-date">
          {formatDate(dueDate)}
        </label>
      )}
    </div>
  );
};
