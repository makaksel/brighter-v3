'use client';

import React, { useRef, useState } from 'react';
import { makeCn } from '@/src/utils';
import './MagneticButton.scss';
import { motion } from 'framer-motion';

const cn = makeCn('magnetic-button');

interface MagneticButtonProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  activeStiffness?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
                                                                children,
                                                                className,
                                                                activeStiffness = 10,
                                                              }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const { x, y } = position;


  const handleMouse = (e: React.MouseEvent) => {
    if (!isHover) setIsHover(true);

    const { clientX, clientY } = e;
    // @ts-ignore
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    if (isHover) setIsHover(false);

    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className={cn('wrp')}
         onMouseMove={handleMouse}
         onMouseLeave={reset}
    >
      <motion.div
        className={cn('', [className])}
        ref={ref}
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: isHover ? activeStiffness : 120, damping: 25 }}
      >
        {children}
      </motion.div>
    </div>
  );

};
