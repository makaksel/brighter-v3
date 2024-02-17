import React from 'react';
import { makeCn } from '@/src/utils';
import './Team.scss';
import Image from 'next/image';
import TeamImg from '@/src/resources/images/about.jpg';


const cn = makeCn('team');

export const Team: React.FC = () => <section className={cn()}>

  <div className={cn('body')}>
    <p className={cn('title')}>команда из профильных специалистов с опытом работы в ведущих IT компаниях России</p>
    <p className={'hide-md'}>[брендинг и сайт]</p>
  </div>

  <div className={cn('media')}>
    <Image className={cn('img')} src={TeamImg} alt={'команда'} />
  </div>

</section>;
