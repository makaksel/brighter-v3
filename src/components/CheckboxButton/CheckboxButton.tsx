'use client';

import React, { useCallback } from 'react';
import { makeCn } from '@/src/utils';
import './CheckboxButton.scss';

const cn = makeCn('checkbox-button');

interface CheckboxButtonProps {
  name: string;
  className?: string;
  checked?: boolean;
  value?: string | boolean | boolean[];
  onChange?: (value: boolean, name: string) => void;
  variant?: 'default' | 'outline';
  children?: React.ReactNode | React.ReactNode[];
}

export const CheckboxButton: React.FC<CheckboxButtonProps> = ({
  name,
  className,
  checked ,
  value,
  onChange,
  variant = 'default',
  children,
  ...rest
}) => {
  const handleChange = useCallback((x: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(!checked, name);
  }, [checked, name, onChange]);

  return (
    <div className={cn('', {
      variant,
    }, [className])}
    >
      <label className="checkbox-button__label" htmlFor={name}>
        <input className="checkbox-button__input" type="checkbox" onChange={handleChange} checked={!!checked} name={name}
               id={name} />
        <span className="checkbox-button__content">
          <span>{children}</span>
        </span>
      </label>
    </div>
  );
};
