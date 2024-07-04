'use client';

import { makeCn } from '@/src/utils';
import './AnimateWrp.scss';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cn = makeCn('animate');
interface AnimateWrpProps {
  children: React.ReactNode | React.ReactNode[];
}

export const AnimateWrp: React.FC<AnimateWrpProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className={cn('')}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.05s',
      }}
    >
      {children}
    </div>
  );
};
