'use client';

import React from 'react';
import Link from 'next/link';
import { navigation } from '@/src/data/navigation';
import { makeCn } from '@/src/utils';
import './HeaderNav.scss';
import { usePathname } from 'next/navigation';

const cn = makeCn('header-nav');

interface HeaderNavProps {
  className?: string;
}

export const HeaderNavLink: React.FC<HeaderNavProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav className={cn('', [className])}>
      {Object.entries(navigation).map(([_, elem]) =>
        <Link key={elem.path} className={cn('link', { active: pathname === elem.path })}
              href={elem.path}>{elem.label}</Link>,
      )}
    </nav>
  );
};

export const HeaderNav: React.FC<HeaderNavProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav className={cn('', [className])}>
      {Object.entries(navigation).map(([_, elem]) =>
        <Link key={elem.path} className={cn('link', { active: pathname === elem.path })}
              href={elem.path}>{elem.label}</Link>,
      )}
    </nav>
  );
};