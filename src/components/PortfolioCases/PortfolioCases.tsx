import React from 'react';
import './PortfolioCases.scss';
import { makeCn } from '@/src/utils';
import { CaseCard } from '@/src/components/CaseCard';
import CaseImg1 from '@/src/resources/images/case1.png';

const cn = makeCn('portfolio-cases');


export const PortfolioCases: React.FC = () => (
  <div className={cn()}>
    <CaseCard
      id={1}
      theme={'брендинг и сайт'}
      title={'ник чернобаев'}
      desc={`Разработка логотипа и брендбука, <br />продуктовый дизайн`}
      img={CaseImg1}
    />
    <CaseCard
      id={2}
      theme={'брендинг и сайт'}
      title={'ник чернобаев'}
      desc={`Разработка логотипа и брендбука, <br />продуктовый дизайн`}
      img={CaseImg1}
    />
    <CaseCard
      id={3}
      theme={'брендинг и сайт'}
      title={'ник чернобаев'}
      desc={`Разработка логотипа и брендбука, <br />продуктовый дизайн`}
      img={CaseImg1}
    />

  </div>
);