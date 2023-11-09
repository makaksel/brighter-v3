import React from 'react';
import { makeCn } from '@/src/utils';
import './Reviews.scss';
import { ReviewsSlider } from '@/app/doneness/components/ReviewsSlider';

const cn = makeCn('reviews');

export const Reviews: React.FC = () => (<section className={cn()}>
  <div className={cn('header')}>
    <p className={cn('title')}>Отзывы</p>
    <p className={cn('text')}>Эти люди вместе со мной<br /> улучшили конверсию своих сайтов</p>
  </div>
  <div className={cn('body')}>
    <ReviewsSlider />
  </div>
</section>);