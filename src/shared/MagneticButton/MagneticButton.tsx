'use client';

import React, { useCallback, useRef, useState } from 'react';
import { makeCn } from '@/src/utils';
import './MagneticButton.scss';
import { motion } from 'framer-motion';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';

const cn = makeCn('magnetic-button');

interface MagneticButtonProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className }) => {
  const ref = useRef();

  const [position, setPosition] = useState({ x: 0, y: 0, x1: 0, y1: 0 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // @ts-ignore
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY, x1: middleX, y1: middleY });
  }, []);

  const reset = useCallback(() => {
    setPosition({ x: 0, y: 0, x1: 0, y1: 0 });
  }, []);

  const { x, y, x1, y1 } = position;
  return (
    <motion.a
      className={cn('button', [className])}
      style={{ position: 'relative' }}
      // @ts-ignore
      ref={ref}
      href={TELEGRAM_BOT_LINK}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 25, damping: 250 }}
    >
      <motion.span
        className={cn('text')}
        style={{ position: 'relative' }}
        animate={{ x: x1, y: y1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 55 }}
      >
        {children}
      </motion.span>
    </motion.a>
  );

};
