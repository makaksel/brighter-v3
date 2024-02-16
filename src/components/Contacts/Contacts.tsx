import React from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Contacts.scss';
import { EMAIL, TELEGRAM_BOT_LINK } from '@/src/data/const';


const cn = makeCn('contacts');

export const Contacts = () => (
  <div className={cn()}>
    <div className={cn('row')}>
      <div className={cn('col')}>
        <span className={cn('contact-label')}>telegramm</span>
        <span className={cn('contact-line')} />
      </div>
      <div className={cn('col')}>
        <Link className={cn('contact-link')} href={TELEGRAM_BOT_LINK}>
          @xpoyarche
        </Link>
      </div>
    </div>

    <div className={cn('row')}>
      <div className={cn('col')}>
      </div>
      <div className={cn('col')}>
        <Link className={cn('contact-link')} href={`mailto:${EMAIL}`}>hello@poyarche.ru</Link>
        <span className={cn('contact-line')} />
        <span className={cn('contact-label')}>email</span>
      </div>
    </div>
  </div>
);
