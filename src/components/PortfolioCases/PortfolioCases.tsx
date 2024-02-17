import React from 'react';
import './PortfolioCases.scss';
import { makeCn } from '@/src/utils';
import { CaseCard } from '@/src/components/CaseCard';
import CaseImg1 from '@/src/resources/images/case1.png';
import CaseImg1t1 from '@/src/resources/images/case1_2.png';
import CaseImg1t2 from '@/src/resources/images/case1_3.png';
import CaseImg2 from '@/src/resources/images/case4.jpg';
import CaseImg3 from '@/src/resources/images/case5.jpg';
import CaseImg2t1 from '@/src/resources/images/case3_2.png';
import CaseImg3t1 from '@/src/resources/images/case5_2.png';
import CaseImg3t2 from '@/src/resources/images/case5_3.png';
import CaseImg2t2 from '@/src/resources/images/case3_3.png';

const cn = makeCn('portfolio-cases');


export const PortfolioCases: React.FC = () => (
  <div className={cn()}>
    <CaseCard
      id={1}
      theme={'брендинг и сайт'}
      title={'ник чернобаев'}
      desc={`Разработка логотипа и брендбука, продуктовый дизайн`}
      imgs={[CaseImg1, CaseImg1t1, CaseImg1t2]}
    />
    <CaseCard
      id={2}
      theme={'брендинг и сайт'}
      title={'огуречная империя'}
      desc={`Разработка логотипа и брендбука, продуктовый дизайн`}
      imgs={[CaseImg2t1, CaseImg2, CaseImg2t2]}
    />
    <CaseCard
      id={3}
      theme={'брендинг и сайт'}
      title={'магазин украшений dionis jewelry'}
      desc={`Разработка логотипа и брендбука, продуктовый дизайн`}
      imgs={[CaseImg3t1, CaseImg3, CaseImg3t2]}
    />

  </div>
);