import { Footer } from '@/src/components/Footer';
import { makeCn } from '@/src/utils';
import { Metadata } from 'next';
import './page.scss';
import { OrderForm } from '@/src/components/OrderForm';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('from-page');

export default async function page() {
  return (
    <main className={cn()}>
      <OrderForm />
      <Footer />
    </main>
  );
}
