import React from 'react';
import { makeCn } from '@/src/utils';
import './PrinciplesAccordion.scss';
import { Collapse } from '@/src/shared/Collapse';


const cn = makeCn('principles-accordion');

interface CollapseHeaderProps {
  number: string;
  title: string;
}

const Header: React.FC<CollapseHeaderProps> = ({ number, title }) => (
  <div className={cn('header')}>
    <span className={cn('header-number')}>[{number.padStart(2, '0')}]</span>
    <p className={cn('header-title')}>{title}</p>
  </div>
);

export const PrinciplesAccordion: React.FC = () => <div className={cn()}>
  <Collapse header={<Header title={'изучаем проект'} number="1" />}>
    проводим интервью, изучаем бриф, чтобы поставить точные цели и выявить способы их
    достижения
  </Collapse>
  <Collapse header={<Header title={'знакомим с дизайнерами'} number="2" />}>
    мы работаем прозрачно, вы можете лично пообщаться с каждым членом команды и
    убедиться в его компетентности
  </Collapse>
  <Collapse header={<Header title={'проводим иследования'} number="3" />}>
    изучаем рынок, анализируем конкурентов и целевую аудиторию, а после предлагаем
    лучшее решение
  </Collapse>

  <Collapse header={<Header title={'не работаем сверх бюджета'} number="4" />}>
    рассчитываем риски и находим оптимальные способы выполнения задачи, чтобы
    уложиться в цифры
  </Collapse>


</div>;
