'use client';

import React, { useEffect, useRef, useState } from 'react';

import { makeCn } from '@/src/utils';
import './TextInput.scss';
import { Onest } from 'next/font/google';

const onest = Onest({ subsets: ['latin'] });

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
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    className,
    inputClassName,
    type = 'text',
    name,
    value,
    onChange,
    size = 'medium',
    disabled,
    placeholder = 'Введите значение...',
    label,
    error,
  } = props;
  const [visible, setVisible] = useState(false);
  const [focus, setFocus] = useState(false);
  const [valueLoc, setValueLoc] = useState<string | undefined>(undefined);
  

  const hiddenRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getHiddenRefWidth = () => hiddenRef.current && hiddenRef.current.offsetWidth - 40;

  useEffect(() => {
    if (inputRef.current && getHiddenRefWidth()) {
      inputRef.current.style.minWidth = `${getHiddenRefWidth()}px`;
      setVisible(true)
    }
  }, []);

  useEffect(() => {
    if (inputRef.current && getHiddenRefWidth()) {
      inputRef.current.style.width = `${getHiddenRefWidth()}px`;
    }
  }, [valueLoc]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueLoc(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={cn('input', { error: !!error, focus, visible }, [className])}>
      <input
        ref={inputRef}
        name={name}
        className={cn(
          'input-native',
          {
            error: !!error,
          },
          [inputClassName, onest.className],
        )}
        type={type}
        disabled={disabled}
        onChange={handleChange}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => !valueLoc && setFocus(false)}
        placeholder={!label ? error || placeholder : ''}
        id={`input-${name}`}
      />
      {label && (
        <label className={cn('label')} htmlFor={`input-${name}`}>
          {label}
        </label>
      )}

      <div ref={hiddenRef} className={cn('hidden')}>
        {valueLoc || label || placeholder}
      </div>
    </div>
  );
};
