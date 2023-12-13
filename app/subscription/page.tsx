import { Metadata } from 'next';
import { About } from 'app/subscription/components/About';
import { Footer } from '@/app/components/Footer';
import { Hero } from '@/app/subscription/components/Hero';
import { Cases } from '@/app/subscription/components/Cases';
import { HowWeWork } from '@/app/subscription/components/HowWeWork';
import { ContactCard } from 'src/shared/ContactCard';
import { Facilities } from '@/app/subscription/components/Facilities';
import { Partners } from '@/app/subscription/components/Partners';
import { CanOrder } from 'app/subscription/components/CanOrder';
import { Subscribe } from '@/app/subscription/components/Subscribe';
import { Faq } from '@/app/subscription/components/Faq';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Cases />
      <HowWeWork />
      <About />
      <ContactCard />
      <Facilities />
      <Partners />
      <CanOrder />
      <Subscribe />
      <ContactCard />
      <Faq />
      <Footer />
    </>
  );
}
