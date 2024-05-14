'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { makeCn } from '@/src/utils';
import './ExpressStickyOffer.scss';
import Link from 'next/link';

const cn = makeCn('express-sticky-offer');

export const ExpressStickyOffer: React.FC = () => {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [isHideBtn, setIsHideBtn] = useState(false);

  const onScroll = useCallback(() => {
    if (!formRef?.current || !btnRef?.current) return;
    const formTop = window.pageYOffset + formRef?.current.getBoundingClientRect().top;
    const btnTop = window.pageYOffset + btnRef.current.getBoundingClientRect().top + 150;

    setIsHideBtn(btnTop > formTop);
  }, [formRef, btnRef]);

  useEffect(() => {
    // @ts-ignore-next-line
    formRef.current = document.getElementById('form');
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <Link href={'#form'} className={cn('btn', { isHideBtn })} ref={btnRef}>
        <svg className={cn('dot')} width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M43.5556 18H31.1111V24H37.3333V30H24.8889V24H18.6667V30H6.22222V24H12.4444V18H0V12H12.4444V6H6.22222V0H18.6667V6H24.8889V0H37.3333V6H31.1111V12H43.5556V18Z"
            fill="black" />
        </svg>

        <span>Хочу за 50.000₽</span>

        <svg className={cn('arrow')} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="35" height="35" rx="17.5" fill="black" />
          <path
            d="M19.3775 11.9915C19.1737 11.767 19.0627 11.4701 19.068 11.1633C19.0733 10.8565 19.1944 10.5638 19.4058 10.3468C19.6172 10.1299 19.9024 10.0056 20.2014 10.0002C20.5003 9.99477 20.7896 10.1086 21.0084 10.3178L27.1625 16.6336C27.3786 16.8557 27.5 17.1566 27.5 17.4705C27.5 17.7843 27.3786 18.0853 27.1625 18.3073L21.0084 24.6231C20.9027 24.7394 20.7753 24.8328 20.6338 24.8975C20.4923 24.9622 20.3395 24.997 20.1845 24.9998C20.0296 25.0026 19.8757 24.9734 19.732 24.9138C19.5883 24.8543 19.4578 24.7656 19.3482 24.6532C19.2387 24.5407 19.1523 24.4068 19.0942 24.2593C19.0362 24.1118 19.0077 23.9539 19.0104 23.7949C19.0132 23.6359 19.0471 23.4791 19.1102 23.3338C19.1732 23.1886 19.2642 23.0578 19.3775 22.9494L23.5624 18.6547H8.6539C8.34787 18.6547 8.05437 18.5299 7.83797 18.3078C7.62157 18.0857 7.5 17.7845 7.5 17.4705C7.5 17.1564 7.62157 16.8552 7.83797 16.6331C8.05437 16.411 8.34787 16.2863 8.6539 16.2863H23.5624L19.3775 11.9915Z"
            fill="white" />
        </svg>
      </Link>


      <p className={cn('text')}>
        Получите логотип, базовый фирменный стиль - палитру и шрифты бренда, паттерн - и дизайн
        визитки быстро и без лишних трудностей
      </p>


    </>
  );
};
