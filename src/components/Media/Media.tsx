import React from 'react';
import './Media.scss';
import { makeCn } from '@/src/utils';
import { CardMedia } from '@/src/components/CardMedia';
import Media1 from '@/src/resources/images/media1.jpg';
import Media2 from '@/src/resources/images/media2.jpg';

const cn = makeCn('media');


export const Media: React.FC = () => (
  <div className={cn()}>
    <div className={cn('header')}>
      <p className={cn('title')}>медиа</p>
    </div>
    <div className={cn('body')}>
      <CardMedia
        title={'Как получить ХУДШИЙ дизайн в вашей жизни'}
        link={'https://youtu.be/DLC8VQar4BU?si=B6aS0YPNWBgtuV9g'}
        date={'15 августа 2023'}
        desc={'Youtube, 38 минут'}
        img={Media1}
      />
      <CardMedia
        title={'что такое брендинг и айдентика и что из этого увеличит доход вашего бизнеса быстрее?'}
        link={' https://vc.ru/design/1016410-chto-takoe-brending-i-aydentika-i-chto-iz-etogo-uvelichit-dohod-vashego-biznesa-bystree'}
        date={'13 сентября 2023'}
        desc={'vc.ru, 10 минут чтения'}
        img={Media2}
      />
    </div>
  </div>
);