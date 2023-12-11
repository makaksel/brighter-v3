import React from 'react';
import { makeCn } from '@/src/utils';
import './CaseCard.scss';

const cn = makeCn('case-card');

interface CaseCardProps {
  stats: number[];
  media?: React.ReactNode | React.ReactNode[];
  title: string;
  text: string;
}

const statTitle = ['Увеличение продаж', 'Сокращение расходов', 'Рост клиентской оценки'];

export const CaseCard: React.FC<CaseCardProps> = ({
                                                    stats, media, title, text,
                                                  }) => <div className={cn('')}>
  <div className={cn('media')}>
    {media}
  </div>
  <div className={cn('body')}>
    <p className={cn('title')}>{title}</p>
    <p className={cn('text')}>{text}</p>
    <div className={cn('stats')}>
      {stats.map((stat, index) => <div key={index} className={cn('stat')}>
          <span className={cn('stat-title')}>{stat}%</span>
          <span className={cn('stat-text')}>{statTitle[index]}</span>
        </div>,
      )}
    </div>
  </div>

</div>;
