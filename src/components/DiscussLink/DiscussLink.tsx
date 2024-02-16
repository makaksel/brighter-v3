import Link from 'next/link';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import React from 'react';
import { makeCn } from '@/src/utils';
import { routerLinks } from '@/src/data/navigation';
import './DiscussLink.scss';

const cn = makeCn('discuss-link');

interface DiscussLinkProps {
  className?: string;
}

export const DiscussLink: React.FC<DiscussLinkProps> = ({ className }) => (
  <Link className={cn('', [className])} href={routerLinks.brif}>
    <span>обсудить проект</span>
    <ArrowRight className={cn('icon')} />
  </Link>
);