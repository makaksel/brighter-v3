import { makeCn } from '@/src/utils';
import './Contacts.scss';
import { Section } from '@/src/components/Section';
import {
  anchors,
  BEHANCE,
  DRIBBBLE,
  EMAIL,
  TELEGRAM_CHANEL_MAIN_LINK,
  TELEGRAM_CHANNEL_FOOTER_LABEL,
  TELEGRAM_CHANNEL_FOOTER_LINK,
  VC
} from '@/src/data';
import Link from 'next/link';
import Image from "next/image";
import telegramm from "@/src/resources/images/telegramm.png";
import behance from "@/src/resources/images/behance.png";
import dribbble from "@/src/resources/images/dribbble.png";
import vc from "@/src/resources/images/vc.png";

const cn = makeCn('contacts');

const list = [
  {
    id: 1,
    link: TELEGRAM_CHANNEL_FOOTER_LINK,
    label: TELEGRAM_CHANNEL_FOOTER_LABEL,
  },
  {
    id: 2,
    link: EMAIL,
    label: EMAIL,
  },
];

export const Contacts = () => {
  return (

    <Section title="Наши контакты" id={anchors.contacts} noMargin>
      <div className={cn('')}>
        <div className={cn('img-wrp')}>
          <Link className={'stretched-link'} href={TELEGRAM_CHANEL_MAIN_LINK} />
          <Image className={cn('img')} src={telegramm} alt={'telegramm'} quality={100}/>
        </div>
        <div className={cn('img-wrp')}>
          <Link className={'stretched-link'} href={BEHANCE} />
          <Image className={cn('img')} src={behance} alt={'behance'} quality={100}/>
        </div>
        <div className={cn('img-wrp')}>
          <Link className={'stretched-link'} href={DRIBBBLE} />
          <Image className={cn('img')} src={dribbble} alt={'dribbble'} quality={100}/>
        </div>
        <div className={cn('img-wrp')}>
          <Link className={'stretched-link'} href={VC} />
          <Image className={cn('img')} src={vc} alt={'vc'} quality={100}/>
        </div>
      </div>
      <div className={cn('')}>
        {list.map((item) => (
          <Link key={item.id} href={item.link} className={cn('link')}>
            {item.label}
          </Link>
        ))}
      </div>
    </Section>
  );
};
