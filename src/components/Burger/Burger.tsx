'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import './Burger.scss';
import { makeCn } from '@/src/utils';
import CloseIcon from '@/src/resources/icons/crest.svg';
import { Navigation } from '../Navigation';
import { OrderBtn } from '../OrderBtn';
import { HeaderLogoText } from '../Header/HeaderLogoText';

export const cn = makeCn('burger');

export const Burger = () => {
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
    handleChangeOverflowBody('');
    setOpen(false);
  }, [handleChangeOverflowBody]);

  const handleToggleOpen = useCallback(() => {
    if (open) {
      handleModalClose();
    } else {
      handleModalOpen();
    }
  }, [open, handleModalClose, handleModalOpen]);

  const handleRouteClick = () => {
    handleModalClose();
  };

  return (
    <div className={cn('')}>
      <button ref={anchorEl} type="button" className={cn('button', { open, closing })} onClick={handleToggleOpen}>
        <span className={cn('button-text')}>Меню</span>
        <CloseIcon className={cn('button-icon')} alt={'Закрыть меню'} />
      </button>

      <div className={cn('dropdown', { open, closing })}>
        <HeaderLogoText className={'mobile'} />
        <Navigation onRouteClick={handleRouteClick} />
        <OrderBtn isMobile onClick={handleRouteClick} />
      </div>
    </div>
  );
};
