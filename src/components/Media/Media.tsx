import React from 'react';
import './Media.scss';
import { makeCn } from '@/src/utils';
import { CardMedia } from '@/src/components/CardMedia';
import CaseImg1 from '@/src/resources/images/case1.png';

const cn = makeCn('media');


export const Media: React.FC = () => (
  <div className={cn()}>
    <div className={cn('header')}>
      <p className={cn('title')}>медиа</p>
    </div>
    <div className={cn('body')}>
      <CardMedia
        title={'здесь должен быть какой-то заголовок для видео'}
        date={'15 августа 2023'}
        desc={'Youtube, 38 минут'}
        img={CaseImg1}
      />
      <CardMedia
        title={'что такое брендинг и айдентика и что из этого увеличит доход вашего бизнеса быстрее?'}
        date={'13 сентября 2023'}
        desc={'vc.ru, 10 минут чтения'}
        img={CaseImg1}
      />
    </div>
  </div>
);