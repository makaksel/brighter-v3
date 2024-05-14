import React from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './ExpressAnchorNav.scss';


const cn = makeCn('express-anchor-nav');

interface ExpressAnchorNavProps {
  className?: string;
}

export enum Anchors {
  PROCESS = 'process',
  PACK = 'pack',
  REVIEWS = 'reviews',
  TEAM = 'team',
}

export const ExpressAnchorNav: React.FC<ExpressAnchorNavProps> = ({
  className
}) => (
  <nav className={cn()}>
    <Link className={cn('link')} href={`#${Anchors.PROCESS}`}>процесс</Link>
    <Link className={cn('link')} href={`#${Anchors.PACK}`}>пак</Link>
    <Link className={cn('link')} href={`#${Anchors.REVIEWS}`}>отзывы</Link>
    <Link className={cn('link')} href={`#${Anchors.TEAM}`}>команда</Link>
  </nav>

);
