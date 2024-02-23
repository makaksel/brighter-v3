import React from 'react';
import { makeCn } from '@/src/utils';
import './Team.scss';
import Image from 'next/image';
import TeamImg from '@/src/resources/images/about.jpg';
import TeamMobileImg from '@/src/resources/images/team-vertical.png';


const cn = makeCn('team');

export const Team: React.FC = () => <section className={cn()}>

  <div className={cn('body')}>
    <p className={cn('title')}>команда из профильных специалистов с опытом работы в ведущих IT компаниях России</p>
    <p className={'hide-md'}>[брендинг и сайт]</p>
  </div>

  <div className={cn('media')}>
    <Image className={cn('img', ['hide-md'])} src={TeamImg} alt={'команда'} />
    <Image className={cn('img', { mobileImg: true })} src={TeamMobileImg} alt={'команда'} />
  </div>

</section>;
