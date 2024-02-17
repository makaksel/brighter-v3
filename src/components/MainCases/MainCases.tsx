import React from 'react';
import './MainCases.scss';
import { makeCn } from '@/src/utils';
import { Card } from '@/src/components/Card';

const cn = makeCn('main-cases');


export const MainCases: React.FC = () => (
  <div className={cn()}>
    <div className={cn('row')}>
      <Card />
      <Card />
    </div>
    <div className={cn('row')}>
      <Card />
      <Card />
    </div>
    <div className={cn('row')}>
      <Card />
      <Card />
    </div>
  </div>
);