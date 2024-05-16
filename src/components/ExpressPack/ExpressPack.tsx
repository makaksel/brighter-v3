import React from 'react';
import './ExpressPack.scss';
import { cn } from './cn';
import PackCard1 from '@/src/resources/images/PackCard1.png';
import PackCard2 from '@/src/resources/images/PackCard2.png';
import PackCard3 from '@/src/resources/images/PackCard3.png';
import PackCard4 from '@/src/resources/images/PackCard4.png';
import PackCard5 from '@/src/resources/images/PackCard5.png';
import { ExpressPackCard } from '@/src/components/ExpressPack/ExpressPackCard';

export const ExpressPack: React.FC = () => <div className={cn()}>

  <div className={cn('row', { queue: 'first' })}>
    <p className={cn('row-text')}>[фирменная составляющая]</p>

    <div className={cn('row-unifier')}>
      <ExpressPackCard
        img={PackCard1}
        bodyGapSize="big"
        title="Логотип"
        textWidth={"390px"}
        text="уникальный логотип, который привлекателен&nbsp;для&nbsp;вашей аудитории и&nbsp;транслирует ценности компании"
      />
      <ExpressPackCard
        img={PackCard2}
        bodyGapSize="small"
        title="шрифты и цвета"
        textWidth={"347px"}
        text="базовый стиль, который сочетается с&nbsp;логотипом и упрощает брендирование онлайн- и офлайн-материалов"
      />
    </div>

  </div>

  <div className={cn('row', { queue: 'second' })}>
    <div className={cn('row-unifier')}>
      <ExpressPackCard
        img={PackCard3}
        bodyGapSize="big"
        title="визитка"
        textWidth={"345px"}
        text="дизайн визитки в фирменном стиле и&nbsp;с&nbsp;размерами для упрощения печати"
      />
      <ExpressPackCard
        img={PackCard4}
        bodyGapSize="small"
        title="паттерн"
        textWidth={"345px"}
        text="узор из упрощенной версии логотипа и&nbsp;примеры его использования в брендинге"
      />
    </div>

    <p className={cn('row-text', { alignRight: true })}>[фирменные элементы]</p>
  </div>

  <div className={cn('row', { queue: 'third' })}>

    <div className={cn('row-thirdBlock')}>
      <p className={cn('row-text')}>[главная ценность]</p>
      <p className={cn('row-text', { isWhite: true }, ['hide-md'])}>[визуализация]</p>
    </div>

    <div className={cn('row-unifier')}>
      <p className={cn('text-card', ['hide-md'])}>создаем примеры на носителях, дизайн визитки с размерами для печати, передаем вам
        результаты в удобном для вас формате</p>

      <ExpressPackCard
        img={PackCard5}
        showBodyOnlyOnMD
        title="визуализация бренда"
        textWidth={"345px"}
        text="воплощение имиджа, образа и идей вашего бренда в реальность с помощью айдентики"
      />

    </div>
  </div>

</div>;
