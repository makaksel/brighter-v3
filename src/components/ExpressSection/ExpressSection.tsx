import React from 'react';
import { makeCn } from '@/src/utils';
import './ExpressSection.scss';
import localFont from 'next/font/local';

const cn = makeCn('express-section');

const NeutralFaceFont = localFont({ src: '../../../public/fonts/NeutralFace.otf'})

interface ExpressSection {
  number: number;
  title: string;
  anchor: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const ExpressSection: React.FC<ExpressSection> = ({ number, title, anchor, className, children }) => (
  <section
    id={anchor}
    className={cn('', [className])}>

    <div className={cn('header')}>
      <p className={cn('number', [NeutralFaceFont.className])}>{number.toString().padStart(2, '0')}</p>
      <h2 className={cn('title', [NeutralFaceFont.className])}>{title}</h2>
    </div>

    <div className={cn('body')}>{children}</div>

  </section>
);
