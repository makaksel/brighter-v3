import React from 'react';
import './MainCases.scss';
import { makeCn } from '@/src/utils';
import { Card } from '@/src/components/Card';
import getCases from '@/src/contentfulApi/getCases';

const cn = makeCn('main-cases');

export const MainCases: React.FC = async () => {
  const cases = await getCases(true);

  return (
    <div className={cn()}>
      {cases.map((item, index) => (
        <Card
          key={item.sys.id}
          id={item.sys.id}
          title={item.fields.title}
          about={item.fields.about}
          img={item.fields.cardImg}
        />
      ))}
    </div>
  );
};