'use client';

import React from 'react';
import { makeCn } from '@/src/utils';
import './Collapse.scss';
import { AnimatePresence, motion } from 'framer-motion';
import PlusIcon from '@/src/resources/icons/plus.svg';

const cn = makeCn('collapse');

interface CollapseProps {
  children: React.ReactNode | React.ReactNode[];
  header: React.ReactNode | React.ReactNode[];
  className?: string;
  open?: boolean;
  handleClick?: () => void;
}

export const Collapse: React.FC<CollapseProps> = ({ open, children, header, className, handleClick }) => {


  return (<div className={cn('', [className])} onClick={handleClick}>
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
          transition={{ duration: 0.3 }}
        >
          <div className={cn('body', { open })}>
            {children}
          </div>

        </motion.section>
      )}
    </AnimatePresence>

  </div>);

};
