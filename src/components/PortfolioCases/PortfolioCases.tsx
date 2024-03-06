import React from 'react';
import './PortfolioCases.scss';
import { makeCn } from '@/src/utils';
import { CaseCard } from '@/src/components/CaseCard';
import getCases from '@/src/contentfulApi/getCases';

const cn = makeCn('portfolio-cases');

export const PortfolioCases: React.FC = async () => {
  const cases = await getCases();

  return (
    <div className={cn()}>
      {cases.map((item) => (
        <CaseCard
          key={item.sys.id}
          id={item.sys.id}
          theme={'брендинг и сайт'}
          title={item.fields.title}
          desc={item.fields.about}
          imgs={item.fields.caseCardImgs}
        />
      ))}
    </div>
  );
};