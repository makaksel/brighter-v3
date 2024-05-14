'use client';

import React from 'react';
import { makeCn } from '@/src/utils';
import './Header.scss';
import Link from 'next/link';
import Logo from '@/src/resources/icons/logo.svg';
import { routerLinks } from '@/src/data/navigation';
import { HeaderNav } from '@/src/components/HeaderNav';
import { DiscussLink } from '@/src/components/DiscussLink';
import { Burger } from '@/src/components/Header/Burger';
import { usePathname } from 'next/navigation';

export const cn = makeCn('header');

interface HeaderProps {
  className?: string;
  theme?: 'black' | 'white';
}

export const Header: React.FC<HeaderProps> = ({ className, theme = 'black' }) => {
  const pathname = usePathname();

  const isWhiteTheme = pathname.toLowerCase().includes('brif') || pathname.toLowerCase().includes('services') ||
    pathname.toLowerCase().includes('about') || pathname.toLowerCase().includes('express');

  const isHide = pathname.toLowerCase().includes('/portfolio/');
  const noSticky = pathname.toLowerCase().includes('/express');


  return (
    <div className={cn('', { isWhite: isWhiteTheme, isHide, noSticky }, [className])}>

      <div className={cn('row')}>
        <Link className={cn('logo-link')} href={routerLinks.root}>
          <Logo className={cn('logo')} alt={'Поярче'} />
        </Link>
      </div>

      <div className={cn('row')}>
        <div className={cn('express-link-wrp')}>
          <Link
            className={cn('express-link')}
            href={routerLinks.express}
          >
          <span
            className={cn('express-underline')}
          >
            экспресс
          </span>
          </Link>
        </div>


        <HeaderNav className={cn('nav')} />

        <DiscussLink className={cn('discus')} />

        <Burger />
      </div>
    </div>
  );
};
