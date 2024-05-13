import React from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Contacts.scss';
import { EMAIL, TELEGRAM_BOT_LABEL, TELEGRAM_BOT_LINK } from '@/src/data/const';


const cn = makeCn('contacts');

interface ContactsProps {
  className?: string;
}

export const Contacts: React.FC<ContactsProps> = ({
  className
}) => (
  <>
    <div className={cn('', [className])}>
      <div className={cn('row')}>
        <div className={cn('col')}>
          <span className={cn('contact-label')}>telegram</span>
          <span className={cn('contact-line')} />
        </div>
        <div className={cn('col')}>
          <Link className={cn('contact-link')} href={TELEGRAM_BOT_LINK}>
            {TELEGRAM_BOT_LABEL}
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

      <div className={cn('mobile-contacts')}>
        <div className={cn('mobile-contacts-row')}>
          <span className={cn('mobile-contacts-title')}>telegram</span>
          <span className={cn('mobile-contacts-line')}></span>
          <Link className={cn('mobile-contacts-link')} href={TELEGRAM_BOT_LINK}>{TELEGRAM_BOT_LABEL}</Link>
        </div>
        <div className={cn('mobile-contacts-row')}>
          <span className={cn('mobile-contacts-title')}>email</span>
          <span className={cn('mobile-contacts-line')}></span>
          <Link className={cn('mobile-contacts-link')} href={`mailto:${EMAIL}`}>hello@poyarche.ru</Link>
        </div>
      </div>
    </div>


  </>


);
