'use client';

import React, { useState } from 'react';
import { makeCn } from '@/src/utils';
import './Collapse.scss';
import { AnimatePresence, motion } from 'framer-motion';
import PlusIcon from '@/src/resources/icons/plus.svg';

const cn = makeCn('collapse');

interface CollapseProps {
  children: React.ReactNode | React.ReactNode[];
  header: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Collapse: React.FC<CollapseProps> = ({ children, header, className }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (<div className={cn('',[className])} onClick={() => setOpen(!open)}>
    <div className={cn('header')}>
      <div className={cn('header-wrp')}>
        {header}
      </div>

      <PlusIcon className={cn('icon', { open })} />
    </div>
    <AnimatePresence initial={false}>
      {open && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
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
