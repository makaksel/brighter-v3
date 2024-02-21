'use client';

import React, { useState } from 'react';
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

export const PrinciplesAccordion: React.FC = () => {
  const [collapseOpen, setCollapseOpen] = useState<number | null>(null);

  const handleClickCollapse = (id: number) => {
    if (collapseOpen === id) {
      setCollapseOpen(null);
      return;
    }

    setCollapseOpen(id);
  };

  return <div className={cn()}>
    <Collapse
      open={collapseOpen === 1}
      header={<Header title={'изучаем проект'} number="1" />}
      handleClick={() => handleClickCollapse(1)}
    >
      проводим интервью, изучаем бриф, чтобы поставить точные цели и выявить способы их
      достижения
    </Collapse>
    <Collapse
      open={collapseOpen === 2}
      header={<Header title={'знакомим с дизайнерами'} number="2" />}
      handleClick={() => handleClickCollapse(2)}
    >
      мы работаем прозрачно, вы можете лично пообщаться с каждым членом команды и
      убедиться в его компетентности
    </Collapse>
    <Collapse
      open={collapseOpen === 3}
      header={<Header title={'проводим иследования'} number="3" />}
      handleClick={() => handleClickCollapse(3)}
    >
      изучаем рынок, анализируем конкурентов и целевую аудиторию, а после предлагаем
      лучшее решение
    </Collapse>
    <Collapse
      open={collapseOpen === 4}
      header={<Header title={'не работаем сверх бюджета'} number="4" />}
      handleClick={() => handleClickCollapse(4)}
    >
      рассчитываем риски и находим оптимальные способы выполнения задачи, чтобы
      уложиться в цифры
    </Collapse>
  </div>;
};
