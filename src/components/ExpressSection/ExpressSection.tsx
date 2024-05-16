import React from 'react';
import { makeCn } from '@/src/utils';
import './ExpressSection.scss';
import localFont from 'next/font/local';

const cn = makeCn('express-section');

const NeutralFaceFont = localFont({ src: '../../../public/fonts/NeutralFace.otf' });

interface ExpressSection {
  title: string;
  titleClassName?: string;
  number?: number;
  anchor?: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const ExpressSection: React.FC<ExpressSection> = ({
  number,
  title,
  titleClassName,
  anchor,
  className,
  children,
}) => (
  <section
    id={anchor}
    className={cn('', [className])}>

    <div className={cn('header')}>
      {number && <p className={cn('number', [NeutralFaceFont.className])}>{number.toString().padStart(2, '0')}</p>}
      <h2 className={cn('title', [NeutralFaceFont.className, titleClassName])}>{title}</h2>
    </div>

    <div className={cn('body')}>{children}</div>

  </section>
);
