import { Metadata } from 'next';
import React from 'react';
import { CaseSidebar } from '@/src/components/CaseSidebar';
import './page.scss';
import { makeCn } from '@/src/utils';
import Image from 'next/image';
import CaseImg1 from '@/src/resources/images/case1.png';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('case-page')

export default function page() {
  return  (
    <main className={cn()}>
      <CaseSidebar
        title={'ник чернобаев'}
        subtitle={'сайт-курс'}
        caseLink={'https://nickchernobaev.com/'}
        behanceLink={'https://www.behance.net/'}
      />
      <div className={cn('media')}>
        <Image src={CaseImg1} alt={"ник чернобаев"} className={cn('media-img')}/>
        <Image src={CaseImg1} alt={"ник чернобаев"} className={cn('media-img')}/>
        <Image src={CaseImg1} alt={"ник чернобаев"} className={cn('media-img')}/>
        <Image src={CaseImg1} alt={"ник чернобаев"} className={cn('media-img')}/>

      </div>
    </main>
  );
}
