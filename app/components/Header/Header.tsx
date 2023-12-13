'use client';

import React, { useRef } from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Header.scss';
/* @ts-ignore */
import Logo from '@/src/resources/icons/logo.svg?url';
/* @ts-ignore */
import LogoMobile from '@/src/resources/icons/logo-mobile.svg?url';
/* @ts-ignore */
import Title from '@/src/resources/icons/title.svg?url';
import Image from 'next/image';
import { BurgerMenu } from '@/app/components/BurgerMenu';
import { usePathname } from 'next/navigation';
import { routerLinks } from '@/src/data/navigation';
import { useInView } from 'framer-motion';

const cn = makeCn('header');

const HeaderTop: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div className={cn('top')} ref={ref}>
      <Image src={Logo} alt={'Поярче'} className={cn('logo')} />

      <div
        className={cn('line-wrp')}
      >
        <span className={cn('line')}
              style={{
                width: isInView ? '100%' : '0',

                opacity: isInView ? 1 : 0,
              }} />
      </div>

      <Image src={Title} alt={'Максим Поярче'} className={cn('title')}
             style={{
               opacity: isInView ? 1 : 0,
               transform: isInView ? 'translate(0,0)' : 'translate(20px,0)',
             }} />
    </div>
  );
};

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className={cn('')}>

      <HeaderTop />

      <Image src={LogoMobile} alt={'Поярче'} className={cn('logo-mobile')} />

      <div className={cn('nav')}>
        {Object.values(routerLinks).map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={cn('nav-item', { active: pathname === link.path })}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <BurgerMenu />

    </div>
  );
};
