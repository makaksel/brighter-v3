'use client';

import { routerLinks } from '@/src/data/navigation';
import LogoSvg from '@/src/resources/icons/logo.svg';
import LogoSvgMob from '@/src/resources/icons/logo_mob.svg';
import { makeCn, useMediaQuery } from '@/src/utils';
import Link from 'next/link';
import './Header.scss';
import React from 'react';
import { Burger } from '@/src/components/Burger';
import { Navigation } from '@/src/components/Navigation';

export const cn = makeCn('header');

export const Header = () => {
  const isMobile = useMediaQuery('1024');

  return (
    <header className={cn()}>
      <Link className={cn('logo')} href={routerLinks.root}>
        {isMobile ? (
          <LogoSvgMob className={cn('logo-icon')} alt={'Поярче'} />
        ) : (
          <LogoSvg className={cn('logo-icon')} alt={'Поярче'} />
        )}
      </Link>

      <Navigation className={'hide-md'} />

      <Burger />
    </header>);
};
