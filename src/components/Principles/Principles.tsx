import React from 'react';
import { makeCn } from '@/src/utils';
import './Principles.scss';
import { DiscussLink } from '@/src/components/DiscussLink';
import Image from 'next/image';
import PrinciplesImg from '@/src/resources/images/principles.jpg';
import { PrinciplesAccordion } from '@/src/components/PrinciplesAccordion';


const cn = makeCn('principles');

export const Principles: React.FC = () => <section className={cn()}>
    <div className={cn('header')}>
      <p className={cn('title')}>поярче это принципы</p>
    </div>

    <div className={cn('body')}>
      <div className={cn('media')}>
        <Image className={cn('img')} src={PrinciplesImg} alt={'Принципы'} />
      </div>
      <div className={cn('content')}>
        <PrinciplesAccordion />
      </div>
    </div>

  </section>
;
