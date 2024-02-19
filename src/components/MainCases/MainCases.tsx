import React from 'react';
import './MainCases.scss';
import { makeCn } from '@/src/utils';
import { Card } from '@/src/components/Card';
import getCases from '@/src/utils/getCases';
import { chunk } from 'lodash';

const cn = makeCn('main-cases');

export const MainCases: React.FC = async () => {
  const cases = await getCases();
  const copy = chunk(cases, 2)


  return (
    <div className={cn()}>
      {copy.map((pair) => (
        <div key={null} className={cn('row')}>
          {pair.map((item) => (
            <Card
              key={item.sys.id}
              id={item.sys.id}
              title={item.fields.title}
              about={item.fields.about}
              img={item.fields.cardImg}
            />
          ))}
        </div>
      ))}

    </div>
  );
};