import MeshImg1 from '@/src/resources/images/mesh1.png';
import MeshImg2 from '@/src/resources/images/mesh2.png';
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
    media: <Image src={MeshImg1} className={cnCase('media-img')} alt={`Максим Поярче. CEO компании Поярче`} />,
    ceo: {
      img: MeshCeo1,
      title: 'Максим Поярче',
      subtitle: 'CEO компании Поярче',
    },
  },
  {
    id: 2,
    link: KATE_TELEGRAM_LINK,
    media: <Image src={MeshImg2} className={cnCase('media-img')} alt={`Екатерина Баратова. Арт-лид компании Поярче`} />,
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
