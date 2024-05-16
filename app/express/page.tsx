import { Metadata } from 'next';
import React from 'react';
import './page.scss';
import { makeCn } from '@/src/utils';
import { Anchors, ExpressAnchorNav } from '@/src/components/ExpressAnchorNav/ExpressAnchorNav';
import { ExpressHero } from '@/src/components/ExpressHero';
import { ExpressSection } from '@/src/components/ExpressSection';
import { ExpressTeam } from '@/src/components/ExpressTeam';
import { ExpressReviews } from '@/src/components/ExpressReviews';
import { ExpressProgress } from '@/src/components/ExpressProgress';
import { ExpressForm } from '@/src/components/ExpressForm';
import { Footer } from '@/src/components/Footer';
import { ExpressPack } from '@/src/components/ExpressPack';
import { ExpressStickyOffer } from '@/src/components/ExpressStickyOffer';


export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('express-page');

export default function page() {
  return (
    <main className={cn()}>
      <ExpressAnchorNav />

      <ExpressHero />

      <ExpressStickyOffer />

      <ExpressSection number={1} anchor={Anchors.PROCESS} title={'процесс'} className={cn('process-section')}>
        <ExpressProgress />
      </ExpressSection>

      <ExpressSection number={2} anchor={Anchors.PACK} title={'Пак'}>
        <ExpressPack />
      </ExpressSection>

      <ExpressSection number={3} anchor={Anchors.REVIEWS} title={'ОТзывы'}>
        <ExpressReviews />
      </ExpressSection>

      <ExpressSection number={4} anchor={Anchors.TEAM} title={'Команда'}>
        <ExpressTeam />
      </ExpressSection>

      <ExpressSection anchor={Anchors.FORM} title={'Оставьте заявку'} titleClassName={cn('form-title')}>
        <ExpressForm />
      </ExpressSection>
     

      <Footer noBrifLink />
    </main>
  );
}
