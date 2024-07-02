import Telegramm from '@/src/resources/icons/telegramm.svg';
import { makeCn } from '@/src/utils';
import './TelegrammBanner.scss';
import Link from 'next/link';
import { TELEGRAM_CHANEL_MAIN_LINK } from '@/src/data';

export const cn = makeCn('telegrammBanner');

export const TelegrammBanner = () => {
  return (
    <Link href={TELEGRAM_CHANEL_MAIN_LINK} className={cn('')}>
      <Telegramm className={cn('icon')} />
      <span>ТЫК на телегу!!</span>
    </Link>
  );
};
