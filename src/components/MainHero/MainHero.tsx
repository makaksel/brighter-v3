import React from 'react';
import { makeCn } from '@/src/utils';
import './MainHero.scss';
import { DiscussLink } from "@/src/components/DiscussLink";
import Image from "next/image";


const cn = makeCn('hero');

export const MainHero: React.FC = () => <section className={cn()}>
  <div className={cn("preloader")}>
    {/*<Image src={Hero} alt={'Поярче видео'} />*/}
  </div>
  <div className={cn("mutted")}>

  </div>
  <div className={cn('content')}>
    <h1 className={cn('title')}>если дизайн, то поярче</h1>

    <DiscussLink/>
  </div>

</section>;
