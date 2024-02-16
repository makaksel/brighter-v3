import React from 'react';
import { makeCn } from '@/src/utils';
import './ServicesHero.scss';
import { DiscussLink } from "@/src/components/DiscussLink";
import Image from "next/image";


const cn = makeCn('services-hero');

export const ServicesHero: React.FC = () => <section className={cn()}>

  <div className={cn('content')}>
    <h1 className={cn('title')}>поярче это лучший дизайн прямо здесь прямо сейчас</h1>
  </div>

</section>;
