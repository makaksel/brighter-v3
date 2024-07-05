'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import './Burger.scss';
import { makeCn } from '@/src/utils';
import CloseIcon from '@/src/resources/icons/crest.svg';
import { Navigation } from '../Navigation';
import { OrderBtn } from '../OrderBtn';
import { HeaderLogoText } from '../Header/HeaderLogoText';

export const cn = makeCn('burger');

export const Burger = () => {
  const pathname = usePathname();
  const params = useParams();

  const pastPath = useRef<string>(pathname);
  const pastHash = useRef<string>('');

  const anchorEl = useRef<HTMLButtonElement | null>(null);

  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleChangeOverflowBody = useCallback((value: string) => {
    const app = document.getElementById('app');
    if (!app) return;
    app.style.overflow = value;
  }, []);

  useEffect(
    () => () => {
      handleChangeOverflowBody('');
    },
    [handleChangeOverflowBody],
  );

  const handleModalOpen = useCallback(() => {
    setOpen(true);

    handleChangeOverflowBody('hidden');
  }, [handleChangeOverflowBody]);

  const handleModalClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      handleChangeOverflowBody('');
      setClosing(false);
      setOpen(false);
    }, 400);
  }, [handleChangeOverflowBody]);

  const handleToggleOpen = useCallback(() => {
    if (open) {
      handleModalClose();
    } else {
      handleModalOpen();
    }
  }, [open, handleModalClose, handleModalOpen]);

  useEffect(() => {
    if (open && pastPath && pastPath.current !== pathname) {
      pastPath.current = pathname;
      handleModalClose();
    }
  }, [handleModalClose, open, pathname]);

  useEffect(() => {
    if (open) {
      if(pastHash.current !== window.location.hash) {
        pastHash.current = window.location.hash;
        handleModalClose();
      }
    } else {
      pastHash.current = window.location.hash;
    }
  }, [handleModalClose, open, params]);

  return (
    <div className={cn('')}>
      <button ref={anchorEl} type="button" className={cn('button', { open, closing })} onClick={handleToggleOpen}>
        <span className={cn('button-text')}>Меню</span>
        <CloseIcon className={cn('button-icon')} alt={'Закрыть меню'} />
      </button>

      <div className={cn('dropdown', { open, closing })}>
        <HeaderLogoText className={'mobile'} />
        <Navigation />
        <OrderBtn />
      </div>
    </div>
  );
};
