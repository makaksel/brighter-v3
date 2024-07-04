import React from 'react';
import { makeCn } from '@/src/utils';
import Image from 'next/image';
import './Case.scss';
import { CaseCard } from '@/src/models';
import { AnimateWrp } from '../AnimateWrp';

export const cnCase = makeCn('case');

type CaseProps = CaseCard;

export const Case: React.FC<CaseProps> = ({ logo, headerText, media, ceo }) => {
  return (
    <AnimateWrp>
      <article className={cnCase()}>
        <div className={cnCase('header')}>
          <Image className={cnCase('logo')} src={logo} alt={headerText.replaceAll('<br/>', '')} />
          {headerText && <p dangerouslySetInnerHTML={{ __html: headerText }}></p>}
        </div>
        {media && <div className={cnCase('media')}>{media}</div>}
        {ceo && (
          <div className={cnCase('body')}>
            <div className={cnCase('ceo')}>
              <Image className={cnCase('ceo-img')} src={ceo.img} alt={`${ceo.title}. ${ceo.subtitle}`} />
              <div>
                <p className={cnCase('ceo-title')}>{ceo.title}</p>
                <p className={cnCase('ceo-subtitle')}>{ceo.subtitle}</p>
              </div>
            </div>
            <p className={cnCase('ceo-text')}>{ceo.text}</p>
          </div>
        )}
      </article>
    </AnimateWrp>
  );
};
