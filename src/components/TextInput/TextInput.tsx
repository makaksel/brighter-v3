'use client';

import React from 'react';

import { makeCn } from '@/src/utils';

import './TextInput.scss';

const cn = makeCn('TextInput');


export interface TextInputProps {
  className?: string;
  innerRef?: React.Ref<HTMLDivElement>;
  inputRef?: React.Ref<HTMLDivElement>;
  style?: React.CSSProperties;

  size?: 'small' | 'medium' | 'large';

  error?: string;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
}


export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    inputClassName,
    className,
    type = 'text',
    name,
    value,
    onChange,
    size = 'medium',
    disabled,
    placeholder = 'Введите значение...',
    error,
  } = props;


  return (
    <div style={{ width: '100%' }}>
      <div
        className={cn({ error: !!error }, [className])}
      >
        <input
          name={name}
          className={cn('Input', {
            size,
            error: !!error,
          }, [inputClassName])}
          type={type}
          disabled={disabled}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
      {error && <span className={cn('Message')}>{error}</span>}
    </div>
  );
};
