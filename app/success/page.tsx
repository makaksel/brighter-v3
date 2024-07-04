import { Hero } from '@/src/components/Hero';
import { makeCn } from '@/src/utils';
import { Metadata } from 'next';
import './page.scss';
import { Footer } from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('success-page');

export default async function page() {
  return (
    <main className={cn()}>
      <Hero
        title="Заявка уже у нас!<br />Мы свяжемся с вами ))"
        largeGap
        className={cn('hero')}
      />
      <Footer />
    </main>
  );
}
