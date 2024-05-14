import React from 'react';
import './ExpressTeam.scss';
import ExpressTeamCard1 from '@/src/resources/images/ExpressTeamCard1.png';
import ExpressTeamCard2 from '@/src/resources/images/ExpressTeamCard2.png';
import ExpressTeamCard3 from '@/src/resources/images/ExpressTeamCard3.png';
import ExpressTeamCard4 from '@/src/resources/images/ExpressTeamCard4.png';
import { ExpressTeamCard } from '@/src/components/ExpressTeam/ExpressTeamCard';
import { cn } from './cn';

export const ExpressTeam: React.FC = () => <div className={cn()}>
  <ExpressTeamCard src={ExpressTeamCard1} title={'основатель студии'} />
  <ExpressTeamCard src={ExpressTeamCard2} title={'арт-директор'} />
  <ExpressTeamCard src={ExpressTeamCard3} title={'ux writer'} />
  <ExpressTeamCard src={ExpressTeamCard4} title={'дизайнер'} />
</div>;
