'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderNav } from '@/src/components/HeaderNav';
import { cn } from './Header';
import Link from 'next/link';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import { routerLinks } from '@/src/data/navigation';
import { Contacts } from '@/src/components/Contacts';
import ArrowRightMobile from '@/src/resources/icons/ArrowRightMobile.svg';

export const Burger = () => {
  const pathname = usePathname();
  const anchorEl = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleChangeOverflowBody = useCallback((value: string) => {
    document.body.style.overflow = value;
  }, []);

  useEffect(() => {
    if (open) setOpen(false);

    return () => {
      handleChangeOverflowBody('');
    };
  }, [handleChangeOverflowBody, pathname]);


  const handleToggleOpen = useCallback(() => {
    setOpen((prev) => !prev);

    if (open) {
      setTimeout(() => {
        handleChangeOverflowBody('');
      }, 300);
    } else {
      handleChangeOverflowBody('hidden');
    }
  }, [open, handleChangeOverflowBody]);

  return (
    <>
      <button ref={anchorEl} type="button" className={cn('burger', [open ? 'open' : ''])} onClick={handleToggleOpen}>
        <span className={cn('burger-line')} />
        <span className={cn('burger-line')} />
      </button>
      <div
        className={cn('burger-dropdown', [open ? 'show' : ''])}
      >
        <Link className={'header-nav__link'} href="/">главная</Link>

        <HeaderNav className={cn('burger-nav')} />

        <div className={cn('burger-footer')}>

          <Link className={'brif-link'} href={routerLinks.brif}>
            <span>обсудить проект</span>
            <ArrowRight className={'brif-link-icon hide-md'} />
            <ArrowRightMobile className={'brif-link-icon mobile'} />
          </Link>

          <Contacts className={cn('burger-contacts')}/>
        </div>
      </div>
    </>
  );
};