import React from 'react';
import './ExpressReviews.scss';
import { cn } from './cn';
import Image from 'next/image';
import ExpressReviews1 from '@/src/resources/images/ExpressReviews1.png';
import ExpressReviews2 from '@/src/resources/images/ExpressReviews2.png';
import ExpressReviews3 from '@/src/resources/images/ExpressReviews3.png';
import { ExpressReview } from '@/src/components/ExpressReviews/ExpressReview';

export const ExpressReviews: React.FC = () => <div className={cn()}>
  <div className={cn('body')}>
    <ExpressReview
      text={`Благодарю команду Поярче за проделанную работу по дизайну сайта для моего авторского курса "КОНТЕНТ" и школы CREATOR ACADEMY. Отдельно хочу сказать спасибо Максиму, как лидеру вашей команды за тактичность, внимательность, ответственность`}
      author="Николай Чернобаев"
    />
    <ExpressReview
      text={`Рекомендую студию "Поярче" как надежного и профессионального партнера для создания уникальных дизайн-проектов. Спасибо за ваше творчество и отличную работу!`}
      author={'“Месье Круассан”'}
    />
    <ExpressReview
      text={`Ребята профессионально подошли к созданию айдентик для магазинов кроссовок. Они были всегда на связи, готовы помочь и предложить свои идеи для улучшения проекта.`}
      author={`Артем Бриус`}
    />

  </div>

  <div className={cn('media-wrp')}>
    <div className={cn('media-left')}>
      <div className={cn('media-item')}>
        <Image className={cn('media-img')} src={ExpressReviews1} alt="экслюзив" width={693} height={693} />
      </div>
      <div className={cn('media-item')}>
        <Image className={cn('media-img')} src={ExpressReviews3} alt="красная стойка" width={693} height={693} />
      </div>
    </div>
    <div className={cn('media-right')}>
      <div className={cn('media-item')}>
        <Image className={cn('media-img')} src={ExpressReviews2} alt="неиротипология" width={1167} height={1408} />
      </div>
    </div>

  </div>
</div>;
