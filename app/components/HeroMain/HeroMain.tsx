import React from 'react';
import { makeCn } from '@/src/utils';
import './HeroMain.scss';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import Link from 'next/link';
import Image from 'next/image';
import Diamond from '@/src/resources/images/diamond2.png';
import Laptop from '@/src/resources/images/laptop.png';
import { MagneticButton } from '@/src/shared/MagneticButton';

const cn = makeCn('hero-main');

export const HeroMain: React.FC = () => <>
    <div className={cn('cloudImg', [cn('diamond')])}>
      <MagneticButton>
        <Image src={Diamond} alt={'Бриллиант'} className={cn('cloudImg-img')} />
      </MagneticButton>
    </div>

    <div className={cn('cloudImg', [cn('vector1')])}>
      <MagneticButton activeStiffness={50}>
        <svg xmlns='http://www.w3.org/2000/svg' width='88' height='89' viewBox='0 0 88 89'
             className={cn('cloudImg-img')}
             fill='none'>
          <path
            d='M6.84071 60.5589C0.0434183 61.2756 -2.47205 51.8878 3.77295 49.1099L26.9847 38.7847C29.3611 37.7277 30.7858 35.26 30.513 32.6735L27.849 7.40894C27.1322 0.611644 36.5201 -1.90383 39.298 4.34116L49.6232 27.5529C50.6803 29.9293 53.148 31.354 55.7345 31.0813L80.9989 28.4172C87.7962 27.7005 90.3117 37.0883 84.0667 39.8662L60.855 50.1914C58.4787 51.2485 57.054 53.7162 57.3267 56.3027L59.9907 81.5672C60.7074 88.3645 51.3196 90.8799 48.5416 84.6349L38.2165 61.4233C37.1595 59.0469 34.6918 57.6222 32.1053 57.8949L6.84071 60.5589Z'
            fill='#3E51FF' />
        </svg>
      </MagneticButton>
    </div>
    <div className={cn('cloudImg', [cn('vector2')])}>
      <MagneticButton>
        <svg className={cn('cloudImg-img')} xmlns='http://www.w3.org/2000/svg' width='373' height='234'
             viewBox='0 0 373 234'
             fill='none'>
          <path
            d='M153.285 148.703C121.61 167.476 58.8372 203.537 61.1434 197.596C63.4495 191.655 120.598 150.576 148.885 130.779C102.973 136.904 10.7634 147.392 9.21381 140.344C7.66424 133.295 106.728 122.29 156.454 117.668C125.903 109.353 65.8155 91.21 69.8703 85.16C73.9252 79.1101 128.658 93.2285 155.517 101.044C142.823 74.3694 120.394 19.7909 132.223 14.8732C144.053 9.95542 173.813 78.2759 187.214 113.051C198.91 77.3827 224.608 6.67745 233.826 9.2024C244.235 12.0536 217.725 118.563 207.679 135.817C227.995 126.833 352.398 98.9914 363.347 108.455C375.529 118.985 220.707 159.659 212.187 161.033C203.668 162.408 285.656 194.36 280.575 206.81C276.51 216.77 216.848 185.401 187.525 168.471C180.588 189.407 164.398 229.939 155.127 224.586C143.538 217.896 150.56 153.423 153.285 148.703Z'
            fill='#3E51FF' stroke='#3E51FF' strokeWidth='17' />
        </svg>
      </MagneticButton>
    </div>

    <div className={cn('cloudImg', [cn('laptop')])}>
      <MagneticButton activeStiffness={5}>
        <Image src={Laptop} alt={'Ноутбук'} className={cn('cloudImg-img')} />
      </MagneticButton>
    </div>

    <section className={cn()}>
      <div className={cn('wrp')}>
        <h1 className={cn('title')}>
          Если дизайн, то <span className={cn('title', ['primary-text'])}>Поярче</span>
        </h1>
        <p className={cn('subtitle')}>
          Здесь создаются яркие и запоминающиеся дизайн-концепции, которые подчеркнут вашу индивидуальность и уникальность
        </p>
      </div>
      <Link href={TELEGRAM_BOT_LINK} className={cn('button')}>Оставить заявку</Link>
    </section>
  </>
;
