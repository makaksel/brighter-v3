import { Metadata } from 'next';
import React from 'react';
import { Header } from '@/src/components/Header';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import ArrowRight from '@/src/resources/icons/ArrowRight_big.svg';
import ArrowRightMobile from '@/src/resources/icons/ArrowRightMobile.svg';
import { routerLinks } from '@/src/data/navigation';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('not-found');

export default function page() {
  return (
    <main className={cn('')}>
      <Header />
      <div className={cn('hero')}>
        <p className={cn('title')}>ошибка 404</p>
        <div className={cn('grid-wrp')}>
          <span className={cn('text')}>похоже, вы дошли до конца интернета. Страница, которую вы запрашиваете, не существует</span>
          <span className={cn('text')}>Что делать? Вернитесь на главную или посмотрите наши работы</span>
        </div>

      </div>

      <div className={cn('grid-wrp')}>
        <Link href={routerLinks.root} className={cn('btn')}>
          <span className={cn('btn-text')}>на главную</span>
          <ArrowRight className={cn('btn-icon', ['hide-md'])} />
          <ArrowRightMobile className={cn('btn-icon', ['mobile'])} />
        </Link>
      </div>


      {/*<Footer />*/}
    </main>
  );
}
