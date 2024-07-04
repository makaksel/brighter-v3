import { Cases } from '@/src/components/Cases';
import { Clients } from '@/src/components/Clients';
import { Contacts } from '@/src/components/Contacts';
import { Hero } from '@/src/components/Hero';
import { Meshs } from '@/src/components/Meshs';
import { OrderBtn } from '@/src/components/OrderBtn';
import { WeDo } from '@/src/components/WeDo';
import { anchors } from '@/src/data';
import { makeCn } from '@/src/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('main-page');

export default async function page() {
  return (
    <>
      <main className={cn()}>
        <Hero title="Создание цифровых продуктов для сrypto-tech" id={anchors.about} />
        <Clients />
        <WeDo />
        <Cases />
        <Meshs />
        <Contacts />
      </main>

      <OrderBtn className="hide-md" />
    </>
  );
}
