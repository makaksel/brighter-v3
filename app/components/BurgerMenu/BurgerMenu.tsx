'use client';

import React, { useCallback, useState } from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './BurgerMenu.scss';
/* @ts-ignore */
import { AnimatePresence, motion } from 'framer-motion';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import { usePathname } from 'next/navigation';

const cn = makeCn('burger');


export const BurgerMenu: React.FC = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const toggleShow = useCallback(() => {

    document.body.style.overflow = open ? '' : 'hidden';

    setOpen(!open);
  }, [open]);

  return (<>
    <div className={cn('button', { open: open })} onClick={toggleShow}>
    </div>
    <AnimatePresence>
      {open && (
        <motion.div
          key='modal'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn('modal')}
        >
          <div className={cn('nav')}>

          </div>
          <div className={cn('social')}>
            <Link href={TELEGRAM_BOT_LINK} className={cn('social-item')}>tg</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>);
};
