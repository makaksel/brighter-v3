import React from 'react';
import { makeCn } from '@/src/utils';
import './CasesCompressed.scss';
/* @ts-ignore */
import Ankil from '@/src/resources/icons/ankil.svg?url';
/* @ts-ignore */
import Millenium from '@/src/resources/icons/millenium.svg?url';
/* @ts-ignore */
import BrightMight from '@/src/resources/icons/brightMight.svg?url';
/* @ts-ignore */
import ESince from '@/src/resources/icons/eSince.svg?url';
import Image from 'next/image';

const cn = makeCn('cases-compressed');

export const CasesCompressed: React.FC = () => <div className={cn()}>
  <div className={cn('list')}>
    <div className={cn('case')}><Image src={Millenium} alt={'Иконка'} className={cn('case-icon')} /></div>
    <div className={cn('case')}><Image src={ESince} alt={'Иконка'} className={cn('case-icon')} /></div>
    <div className={cn('case')}><Image src={Ankil} alt={'Иконка'} className={cn('case-icon')} /></div>
    <div className={cn('case')}><Image src={BrightMight} alt={'Иконка'} className={cn('case-icon')} /></div>
  </div>
  <p className={cn('count')}>
    +10
  </p>
</div>;
