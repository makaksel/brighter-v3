import { makeCn } from '@/src/utils';
import './Team.scss';
import TeamImg from '@/src/resources/images/team1.png';
import TeamImg2 from '@/src/resources/images/team2.png';
import TeamImg3 from '@/src/resources/images/team3.png';
import TeamImg4 from '@/src/resources/images/team4.png';
import TeamImg5 from '@/src/resources/images/team5.png';
import TeamImg6 from '@/src/resources/images/team6.png';
import Image from 'next/image';

const cn = makeCn('team');

export const Team = () => {
  return (
    <div className={cn('')}>
      <div className={cn('list')}>
        <div className={cn('item')}>
          <Image className={cn('img')} src={TeamImg} alt={'Команда'} />
        </div>
        <div className={cn('item')}>
          <Image className={cn('img')} src={TeamImg2} alt={'Команда'} />
        </div>
        <div className={cn('item')}>
          <Image className={cn('img')} src={TeamImg3} alt={'Команда'} />
        </div>
        <div className={cn('item')}>
          <Image className={cn('img')} src={TeamImg4} alt={'Команда'} />
        </div>
        <div className={cn('item')}>
          <Image className={cn('img')} src={TeamImg5} alt={'Команда'} />
        </div>
        <div className={cn('item')}>
          <Image className={cn('img')} src={TeamImg6} alt={'Команда'} />
        </div>
      </div>

      <p className={cn('text')}>+6</p>
    </div>
  );
};
