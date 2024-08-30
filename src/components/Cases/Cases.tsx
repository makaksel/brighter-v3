'use client';

import CaseImg11 from '@/src/resources/images/case1_1.png';
import CaseImg12 from '@/src/resources/images/case1_2.png';
import CaseImg13 from '@/src/resources/images/case1_3.png';
import CaseImg14 from '@/src/resources/images/case1_4.png';
import CaseImg21 from '@/src/resources/images/case2_1.png';
import CaseImg22 from '@/src/resources/images/case2_2.png';
import CaseImg31 from '@/src/resources/images/case3_1.png';
import CaseImg32 from '@/src/resources/images/case3_2.png';
import CaseImg33 from '@/src/resources/images/case3_3.png';
import CaseImg41 from '@/src/resources/images/case4_1.png';
import CaseImg42 from '@/src/resources/images/case4_2.png';
import CaseImg43 from '@/src/resources/images/case4_3.png';
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

export const Cases = () => {
  const list: CaseCard[] = [
    {
      id: 3,
      logo: Client2,
      headerText: 'Продумали логику и путь юзера в личном<br/> кабинете криптообменника',
      media: (
        <div className={cnCase('media-custom', ['third'])}>
          <div className={cnCase('media-custom-row')}>
            <Image src={CaseImg31} className={cnCase('media-img')} alt={`Криптообменник`} quality={100}/>
            <Image src={CaseImg32} className={cnCase('media-img')} alt={`Криптообменник`} quality={100}/>
          </div>

          <Image src={CaseImg33} className={cnCase('media-img')} alt={`Криптообменник`} quality={100}/>
        </div>
      ),
    },
    {
      id: 1,
      logo: Client4,
      headerText: 'Разрабатываем и развиваем дизайн<br/> составляющую SegmentFinance',
      media: (
        <div className={cnCase('media-custom', ['first'])}>
          <div className={cnCase('media-custom-row')}>
            <Image src={CaseImg11} className={cnCase('media-img')} alt={`SegmentFinance`} quality={100}/>
            <Image src={CaseImg12} className={cnCase('media-img')} alt={`SegmentFinance`} quality={100}/>
          </div>
          <div className={cnCase('media-custom-row')}>
            <Image src={CaseImg13} className={cnCase('media-img')} alt={`SegmentFinance`} quality={100}/>
            <Image src={CaseImg14} className={cnCase('media-img')} alt={`SegmentFinance`} quality={100}/>
          </div>
        </div>
      ),
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
      media: (
        <div className={cnCase('media-custom', ['second'])}>
          <div className={cnCase('media-custom-row')}>
            <Image src={CaseImg21} className={cnCase('media-img')} alt={`Safe Wallet`} quality={100}
    
      />
            <Image src={CaseImg22} className={cnCase('media-img')} alt={`Safe Wallet`} quality={100}/>
          </div>
          <div className={cnCase('media-custom-row')}>
            <video
              src={'./assets/video/case2.mp4'}
              className={cnCase('media-video')}
              autoPlay
              loop
              playsInline
              preload="auto"
            
              muted
            />
          </div>
        </div>
      ),
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
      media: (
        <div className={cnCase('media-custom', ['fourth'])}>
          <div className={cnCase('media-custom-row')}>
            <Image src={CaseImg41} className={cnCase('media-img')} alt={`ИТ-решения от компании IN.TOP`} quality={100}/>
          </div>
          <div className={cnCase('media-custom-row')}>
            <Image src={CaseImg42} className={cnCase('media-img')} alt={`ИТ-решения от компании IN.TOP`} quality={100}/>
            <Image src={CaseImg43} className={cnCase('media-img')} alt={`ИТ-решения от компании IN.TOP`} quality={100}/>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className={cn('')} id={anchors.projects}>
      {list.map((item) => (
        <Case key={item.id} {...item} />
      ))}
    </section>
  );
};
