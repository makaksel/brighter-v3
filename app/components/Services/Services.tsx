import React from 'react';
import { makeCn } from '@/src/utils';
import './Services.scss';
import Image from 'next/image';
import Cart from '@/src/resources/images/cart.png';

const cn = makeCn('services');

const cards = ['Дизайн-подписка', 'Экспресс-дизайн', 'Прожарка сайта', 'Личное консультирование'];

const ServiceCard: React.FC<{ title: string }> = ({ title }) => (<div className={cn('card')}>
  <div className={cn('card-body')}>
    <span className={cn('card-title')}>
        {title}
      </span>
    <svg className={cn('card-icon')} xmlns='http://www.w3.org/2000/svg' width='27' height='24' viewBox='0 0 27 24'
         fill='none'>
      <path d='M0 12H26' stroke='white' />
      <path d='M14.9258 0.929688L25.9999 12.0038L14.9258 23.0778' stroke='white' />
    </svg>
  </div>
</div>);


export const Services: React.FC = () => (<div className={cn('wrp')}>

  <div className={cn('cloudImg', [cn('duga')])}>
    <svg className={cn('cloudImg-img')} xmlns='http://www.w3.org/2000/svg' width='150' height='329'
         viewBox='0 0 150 329'
         fill='none'>
      <path d='M-167 56.2864C-148.252 49.3895 368.931 -56.5862 -47.0808 293.01' stroke='#3E51FF' strokeWidth='70'
            strokeLinecap='round' />
    </svg>

  </div>
  <div className={cn('cloudImg', [cn('star')])}>

    <svg className={cn('cloudImg-img')} xmlns='http://www.w3.org/2000/svg' width='80' height='99' viewBox='0 0 80 99'
         fill='none'>
      <path
        d='M39.7909 72.9582C44.677 89.4362 50.6834 100.258 57.2259 98.7575C63.7684 97.2568 65.101 84.7519 63.2448 67.5793C79.6734 71.2074 91.9069 71.1033 94.0176 64.5613C96.1284 58.0192 86.2625 50.7845 70.8109 44.1267C82.3539 31.2771 88.5811 20.3514 84.1495 15.31C79.7179 10.2687 68.5196 15.5389 54.9247 26.0534C50.0388 9.57609 44.0323 -1.24524 37.49 0.255377C30.9476 1.756 29.6149 14.261 31.4711 31.4337C15.0421 27.8053 2.80835 27.9095 0.697541 34.4517C-1.41322 40.9936 8.4524 48.228 23.9035 54.8859C12.3608 67.7354 6.13357 78.6609 10.5652 83.7025C14.9969 88.7439 26.1956 83.4732 39.7909 72.9582Z'
        fill='#3E51FF' />
    </svg>
  </div>

  <div className={cn('cloudImg', [cn('cart')])}>
    <Image src={Cart} alt={'Корзина'} className={cn('cloudImg-img')} />
  </div>

  <section className={cn()}>
    <div className={cn('header')}>
      <h2 className={cn('header-title')}>Услуги</h2>
      <p className={cn('header-text')}>Вы сможете получить услуги дизайна из любой сферы</p>
    </div>
    <div className={cn('body')}>
      {cards.map((cardText) => <ServiceCard key={cardText} title={cardText} />)}
    </div>
  </section>
</div>);
