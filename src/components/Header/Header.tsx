import React from 'react';
import { makeCn } from '@/src/utils';
import './Header.scss';
import Link from "next/link";
import Logo from '@/src/resources/icons/logo.svg';
import { routerLinks } from "@/src/data/navigation";
import { HeaderNav } from "@/src/components/HeaderNav";
import { DiscussLink } from "@/src/components/DiscussLink";

const cn = makeCn('header');

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({className}) => (
  <div className={cn('', [className])}>

    <Link className={cn('logo-link')} href={routerLinks.root}>
      <Logo className={cn('logo')} alt={'Поярче'}/>
    </Link>

    <HeaderNav/>

    <DiscussLink/>
  </div>
);
