'use client';

import React, { useState } from 'react';
import { makeCn } from '@/src/utils';
import './Collapse.scss';
import { AnimatePresence, motion } from 'framer-motion';

const cn = makeCn('collapse');

interface CollapseProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  theme?: 'dark' | 'light';
}

export const Collapse: React.FC<CollapseProps> = ({ children, title, theme = 'dark' }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (<div className={cn({theme})} onClick={() => setOpen(!open)}>
    <div className={cn('header')}>
      <p className={cn('title')}>
        {title}
      </p>
      <svg xmlns='http://www.w3.org/2000/svg' className={cn('icon', { open })} width='29' height='13'
           viewBox='0 0 29 13'
           fill='none'>
        <path d='M1 11.2919L15.4 1.29297L28 11.293' stroke={theme === 'dark' ? 'white' : 'black'} stroke-width='2' stroke-linecap='round' />
      </svg>
    </div>
    <AnimatePresence initial={false}>
      {open && (
        <motion.section
          key='content'
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0, overflow: 'hidden' },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <div className={cn('body')}>
            {children}
          </div>

        </motion.section>
      )}
    </AnimatePresence>

  </div>);

};
