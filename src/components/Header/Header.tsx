import React from 'react';
import { makeCn } from '@/src/utils';
import './Header.scss';
import Link from "next/link";
import Logo from '@/src/resources/icons/logo.svg';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import { routerLinks } from "@/src/data/navigation";
import { HeaderNav } from "@/src/components/HeaderNav";

const cn = makeCn('header');

export const Header: React.FC = () => (
  <div className={cn('')}>
    <Link className={cn('logo-link')} href={routerLinks.root.path}>
      <Logo className={cn('logo')} alt={'Поярче'}/>
    </Link>

    <HeaderNav/>

    <Link className={cn('contact-link')} href="#">
      <span>обсудить проект</span>
      <ArrowRight className={cn('contact-link-icon')}/>
    </Link>
  </div>
);
