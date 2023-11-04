'use client';

import React, {useCallback, useState} from 'react';
import {makeCn} from "@/src/utils";
import Link from "next/link";
import "./BurgerMenu.scss";
/* @ts-ignore */
import Logo from '@/src/resources/icons/logo.svg?url';
import Image from "next/image";
import {AnimatePresence, motion} from 'framer-motion';
import { TELEGRAM_BOT_LINK } from "@/src/const";

const cn = makeCn('burger');


export const BurgerMenu: React.FC = () => {
    const [open, setOpen] = useState(false)

  const toggleShow = useCallback(() => {

    document.body.style.overflow = open ? '' : 'hidden';

    setOpen(!open)
  }, [open])

    return (<>
        <div className={cn("button", {open: open})} onClick={toggleShow}>
        </div>
        <AnimatePresence>
            {open && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn('modal')}
                >
                  <div className={cn('nav')}>
                    <Link href="#" className={cn('nav-item')}>Курс Яркий Брендинг</Link>
                    <Link href="#" className={cn('nav-item')}>Прожарка сайта</Link>
                    <Link href="#" className={cn('nav-item')}>Дизайн-подписка</Link>
                  </div>
                  <div className={cn('social')}>
                    {/*<Link href="#" className={cn('social-item')}>in</Link>*/}
                    <Link href={TELEGRAM_BOT_LINK} className={cn('social-item')}>tg</Link>
                    {/*<Link href="#" className={cn('social-item')}>fb</Link>*/}
                  </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>)
};
