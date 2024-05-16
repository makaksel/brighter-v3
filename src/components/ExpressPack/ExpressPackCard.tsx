import React from 'react';
import { cn } from './cn';
import Image, { StaticImageData } from 'next/image';


interface ExpressPackCard {
  img: string | StaticImageData;
  bodyGapSize?: 'small' | 'big';
  text?: string;
  title?: string;
  showBodyOnlyOnMD?: boolean;
}

export const ExpressPackCard: React.FC<ExpressPackCard> = ({
  img,
  text,
  title,
  bodyGapSize,
  showBodyOnlyOnMD,
}) =>
  <div className={cn('card', { bodyGapSize })}>

    <div className={cn('card-media')}>
      <Image className={cn('card-img')} src={img} alt={title || ''} width={455} height={210} />
    </div>

    <div className={cn('card-body', { showBodyOnlyOnMD })}>
      <p className={cn('card-title')}>{title}</p>
      {text && <p className={cn('card-text')} dangerouslySetInnerHTML={{ __html: text }}></p>}
    </div>

  </div>;
