import React from 'react';
import { makeCn } from '@/src/utils';
import './PortfolioHero.scss';
import { DiscussLink } from '@/src/components/DiscussLink';


const cn = makeCn('portfolio-hero');

export const PortfolioHero: React.FC = () => <section className={cn()}>
  <div className={cn('content')}>
    <h1 className={cn('title')}>поярче это когда дизайн говорит за вас</h1>

    <DiscussLink/>
  </div>

</section>;
