'use client';

import Logo from '@/src/resources/icons/logo.svg';
import { makeCn, useMediaQuery } from '@/src/utils';
import './Header.scss';

export const cn = makeCn('header');

export const HeaderLogo = () => {
  
  const matches = useMediaQuery('(max-width:1024px)')
  console.log(matches);

  return (
    <>
    <Logo className={cn('logo-icon')} width="500px" height="120px" alt={'Поярче'} />

    </>
  );
};
