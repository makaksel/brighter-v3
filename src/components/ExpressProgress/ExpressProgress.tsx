import React from 'react';
import './ExpressProgress.scss';
import Image from 'next/image';
import ExpressProgress1 from '@/src/resources/images/ExpressProgress1.png';
import ExpressProgress2 from '@/src/resources/images/ExpressProgress2.png';
import ExpressProgress3 from '@/src/resources/images/ExpressProgress3.png';
import ExpressProgress4 from '@/src/resources/images/ExpressProgress4.png';
import ExpressProgress5 from '@/src/resources/images/ExpressProgress5.png';
import ExpressProgress6 from '@/src/resources/images/ExpressProgress6.png';

import { makeCn } from '@/src/utils';


export const cn = makeCn('express-progress');


export const ExpressProgress: React.FC = () => <div className={cn()}>
  <div className={cn('body')}>
      <div className={cn('body-col', [cn('body-left')])}>
        <p className={cn('date')}>[01.01]</p>
        <p className={cn('title')}>[отрисовка]</p>
      </div>
    <div className={cn('body-col', [cn('body-right')])}>
      <p className={cn('text')}>мы обрабатываем вашу заявку и создаем концепцию будущего дизайна с учетом трендов, вашей ниши и продукта</p>
      <p className={cn('text')}>отрисовываем логотип, подбираем фирменную палитру и шрифты, создаем паттерн</p>
    </div>
  </div>

  <div className={cn('media')}>
    <div className={cn('media-item')}>
    <Image className={cn('media-img')} src={ExpressProgress1} alt="экслюзив" width={611} height={611} />
    </div>
    <div className={cn('media-item')}>
      <Image className={cn('media-img')} src={ExpressProgress2} alt="экслюзив" width={611} height={611} />
    </div>
    <div className={cn('media-item')}>
      <Image className={cn('media-img')} src={ExpressProgress3} alt="экслюзив" width={611} height={611} />
    </div>
    <div className={cn('media-item')}>
      <Image className={cn('media-img')} src={ExpressProgress4} alt="экслюзив" width={611} height={611} />
    </div>
    <div className={cn('media-item')}>
      <Image className={cn('media-img')} src={ExpressProgress5} alt="экслюзив" width={611} height={611} />
    </div>
    <div className={cn('media-item')}>
      <Image className={cn('media-img')} src={ExpressProgress6} alt="экслюзив" width={611} height={611} />
    </div>
  </div>
</div>;
