import { Metadata } from 'next';
import React from 'react';
import './page.scss';
import { Footer } from '@/src/components/Footer';
import { Contacts } from '@/src/components/Contacts';
import { makeCn } from '@/src/utils';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('contacts-page')
export default function page() {
  return (
    <main>
      <h1 className={cn('title')}>контакты</h1>

      <div className={cn('wrp')}>
        <Contacts />
      </div>

      <Footer noContacts/>
    </main>
  );
}
