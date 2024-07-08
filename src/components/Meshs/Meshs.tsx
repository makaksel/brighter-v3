import MeshCeo1 from '@/src/resources/images/mesh1_ceo.png';
import MeshCeo2 from '@/src/resources/images/mesh2_ceo.png';
import { makeCn } from '@/src/utils';
import './Meshs.scss';

import { KATE_TELEGRAM_LINK, MAX_TELEGRAM_LINK } from '@/src/data';
import { MeshCard } from '@/src/models';
import Image from 'next/image';
import { cnCase } from '../Case/Case';
import Link from 'next/link';
import { Section } from '../Section';

const cn = makeCn('meshs');

const list: MeshCard[] = [
  {
    id: 1,
    link: MAX_TELEGRAM_LINK,
    media: (
      <video
        src={'./assets/video/mesh1.mp4'}
        className={cn('card-video')}
        autoPlay
        loop
        playsInline
        preload="auto"
        muted
      />
    ),
    ceo: {
      img: MeshCeo1,
      title: 'Максим Поярче',
      subtitle: 'CEO компании Поярче',
    },
  },
  {
    id: 2,
    link: KATE_TELEGRAM_LINK,
    media: (
      <video
        src={'./assets/video/mesh2.mp4'}
        className={cn('card-video', { right: true })}
        autoPlay
        loop
        playsInline
        preload="auto"
        muted
      />
    ),
    ceo: {
      img: MeshCeo2,
      title: 'Екатерина Баратова',
      subtitle: 'Арт-лид компании Поярче',
    },
  },
];

const Card = ({ link, media, ceo }: MeshCard) => (
  <article className={cn('card')}>
    <Link href={link} className={cn('card-link', ['stretched-link'])} />
    <button className={cn('card-btn')}>
      <svg className={cn('card-btn-icon')} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H15M15 1V15M15 1L1 15" />
      </svg>
    </button>

    <div className={cn('card-media')}>{media}</div>
    <div className={cn('card-body')}>
      <div className={cnCase('ceo')}>
        <Image className={cnCase('ceo-img')} src={ceo.img} alt={`${ceo.title}. ${ceo.subtitle}`} />
        <div>
          <p className={cnCase('ceo-title')}>{ceo.title}</p>
          <p className={cnCase('ceo-subtitle')}>{ceo.subtitle}</p>
        </div>
      </div>
    </div>
  </article>
);

export const Meshs = () => {
  return (
    <Section title="Наши сеточки">
      <div className={cn('')}>
        {list.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
};
