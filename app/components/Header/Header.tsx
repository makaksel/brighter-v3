import React from 'react';
import { makeCn } from "@/src/utils";
import Link from "next/link";
import "./Header.scss";
/* @ts-ignore */
import Logo from '@/src/resources/icons/logo.svg?url';
import Image from "next/image";
import {AnimatePresence, motion } from 'framer-motion';
import {BurgerMenu} from "@/app/components/BurgerMenu";

const cn = makeCn('header');


export const Header: React.FC = () => <div className={cn('')}>
  <Image src={Logo} alt={'Поярче'} className={cn('logo')}/>
  <div className={cn('nav')}>
    <Link href={"#"} className={cn('nav-item')}>Курс Яркий Бренд</Link>
    <Link href={"#"} className={cn('nav-item')}>Прожарка сайта</Link>
    <Link href={"#"} className={cn('nav-item', { primary: true })}>Дизайн-подписка</Link>
  </div>
  <BurgerMenu/>
</div>;
