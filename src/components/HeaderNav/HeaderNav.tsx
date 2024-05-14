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

export const HeaderNav: React.FC<HeaderNavProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav className={cn('', [className])}>
      {Object.entries(navigation).map(([_, elem]) =>
        <Link
          key={elem.path}
          className={cn('link', { active: pathname === elem.path })}
          href={elem.path}
        >
          <span
            className={cn('underline', { active: pathname === elem.path })}
          >
            {elem.label}
          </span>
        </Link>
      )}
    </nav>
  );
};
