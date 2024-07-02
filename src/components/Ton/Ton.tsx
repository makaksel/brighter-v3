import { makeCn } from '@/src/utils';
import TonImg from '@/src/resources/images/ton.png';
import Image from 'next/image';
import './Ton.scss';

const cn = makeCn('ton');

export const Ton = () => {
  return (
    <div className={cn('')}>
      <Image className={cn('img')} src={TonImg} alt={'Ton'} />
      <p className={cn('text')}>Принимаем платежи в TON</p>
    </div>
  );
};
