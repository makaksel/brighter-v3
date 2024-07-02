import CaseImg1 from '@/src/resources/images/case1.png';
import CaseImg2 from '@/src/resources/images/case2.png';
import CaseImg3 from '@/src/resources/images/case3.png';
import CaseImg4 from '@/src/resources/images/case4.png';
import Ceo1 from '@/src/resources/images/ceo1.png';
import Ceo2 from '@/src/resources/images/ceo2.png';
import Client1 from '@/src/resources/images/client1.jpg';
import Client2 from '@/src/resources/images/client2.jpg';
import Client3 from '@/src/resources/images/client3.jpg';
import Client4 from '@/src/resources/images/client4.jpg';
import { makeCn } from '@/src/utils';
import './Cases.scss';

import { anchors } from '@/src/data';
import { CaseCard } from '@/src/models';
import Image from 'next/image';
import { Case, cnCase } from '../Case/Case';

const cn = makeCn('cases');

const list: CaseCard[] = [
  {
    id: 1,
    logo: Client4,
    headerText: 'Разрабатываем и развиваем дизайн<br/> составляющую SegmentFinance',
    media: <Image src={CaseImg1} className={cnCase('media-img')} alt={`SegmentFinance`} />,
  },
  {
    id: 2,
    logo: Client1,
    headerText: 'Полностью переосмыслили и спроектировали<br/> интерфейс и медиа Safe Wallet',
    ceo: {
      img: Ceo1,
      title: 'Bayker',
      subtitle: 'CEO компании Safe Crypto',
      text: '"Постоянное сотрудничество со студией нам дало хороший профит во всех направлениях компании. Всегда качественно, быстро и практично "',
    },
    media: <Image src={CaseImg2} className={cnCase('media-img')} alt={`Safe Wallet`} />,
  },
  {
    id: 3,
    logo: Client2,
    headerText: 'Продумали логику и путь юзера в личном<br/> кабинете криптообменника',
    media: <Image src={CaseImg3} className={cnCase('media-img')} alt={`Криптообменник`} />,
  },
  {
    id: 4,
    logo: Client3,
    headerText: 'Сделали тотал айтишный дизайн и олицетворили<br/> ИТ-решения от компании IN.TOP',
    ceo: {
      img: Ceo2,
      title: 'Михаил Плешанов',
      subtitle: 'CEO компании IN.TOP',
      text: '"Я был впечатлен скоростью и качеством работы. Мы давно задумывались о редизайне нашего сайта, но то, что сделали ребята поразило в хорошем смысле"',
    },
    media: <Image src={CaseImg4} className={cnCase('media-img')} alt={`ИТ-решения от компании IN.TOP`} />,
  },
];

export const Cases = () => {
  return (
    <section className={cn('')} id={anchors.projects}>
      {list.map((item) => (
        <Case key={item.id} {...item} />
      ))}
    </section>
  );
};
