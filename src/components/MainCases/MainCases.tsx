import React from 'react';
import './MainCases.scss';
import { makeCn } from '@/src/utils';
import { Card } from '@/src/components/Card';
import CaseImg1 from '@/src/resources/images/case1.png';
import CaseImg2 from '@/src/resources/images/case2.jpg';
import CaseImg3 from '@/src/resources/images/case3.jpg';
import CaseImg4 from '@/src/resources/images/case4.jpg';
import CaseImg5 from '@/src/resources/images/case5.jpg';
import CaseImg6 from '@/src/resources/images/case6.jpg';

const cn = makeCn('main-cases');


export const MainCases: React.FC = () => (
  <div className={cn()}>
    <div className={cn('row')}>
      <Card
        id={1}
        title={'ник чернобаев'}
        about={`разработка логотипа и брендбука, продуктовый дизайн`}
        img={CaseImg1}

      />
      <Card
        id={1}
        title={'месье круассан'}
        about={`разработка логотипа и брендбука, продуктовый дизайн`}
        img={CaseImg2}
      />
    </div>
    <div className={cn('row')}>
      <Card
        id={1}
        title={'Огуречная Империя'}
        about={`разработка логотипа и брендбука, продуктовый дизайн`}
        rating={4.5}
        img={CaseImg4}
      />
      <Card
        id={1}
        title={'Нейротиполог Букатов'}
        about={`разработка логотипа и брендбука, продуктовый дизайн`}
        img={CaseImg3}
      />
    </div>
    <div className={cn('row')}>
      <Card
        id={1}
        title={'Dionis Jewelry'}
        about={`разработка логотипа и брендбука, продуктовый дизайн`}
        img={CaseImg5}
      />
      <Card
        id={1}
        title={'Бизнес-центр Миллениум'}
        about={`разработка логотипа и брендбука, продуктовый дизайн`}
        rating={4.5}
        img={CaseImg6}
      />
    </div>
  </div>
);