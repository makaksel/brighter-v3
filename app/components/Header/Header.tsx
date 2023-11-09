'use client';

import React from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Header.scss';
/* @ts-ignore */
import Logo from '@/src/resources/icons/logo.svg?url';
import Image from 'next/image';
import { BurgerMenu } from '@/app/components/BurgerMenu';
import { usePathname } from 'next/navigation';
import { routerLinks } from '@/src/data/navigation';

const cn = makeCn('header');


export const Header: React.FC = () => {

  const pathname = usePathname();

  return (<div className={cn('')}>
    <Image src={Logo} alt={'Поярче'} className={cn('logo')} />
    <div className={cn('nav')}>
      <Link href={'#'} className={cn('nav-item', { active: pathname === '#' })}>Курс Яркий Бренд</Link>
      <Link href={routerLinks.roast} className={cn('nav-item', { active: pathname === routerLinks.roast })}>Прожарка
        сайта</Link>
      <Link href={routerLinks.root}
            className={cn('nav-item', { active: pathname === routerLinks.root })}>Дизайн-подписка</Link>
    </div>
    <BurgerMenu />
  </div>);
};
