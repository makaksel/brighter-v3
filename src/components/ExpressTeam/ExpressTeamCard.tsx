import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from './cn';


interface ExpressTeamCard {
  src: string | StaticImageData;
  title: string;
}

export const ExpressTeamCard: React.FC<ExpressTeamCard> = ({ src, title }) => <div className={cn('card')}>

  <div className={cn('card-media')}>
    <Image className={cn('card-img')} src={src} width={455} height={455} alt={title} />
  </div>
  <div className={cn('card-body')}><p className={cn('card-title')}>{title}</p></div>

</div>;
