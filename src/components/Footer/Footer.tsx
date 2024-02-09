import React from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Footer.scss';
import { EMAIL, PHONE, TELEGRAM_BOT_LINK } from '@/src/data/const';
import ArrowRight from "@/src/resources/icons/ArrowRight_big.svg";
import { routerLinks } from "@/src/data/navigation";


const cn = makeCn('footer');

interface FooterProps {
  className?: string;
  theme?: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme = 'dark', className }) => <footer
  className={cn({ theme }, [className])}>

  <div className={cn('row')}>
    <div className={cn('col')}></div>
    <div className={cn('col')}>
      <Link href={routerLinks.brif} className={cn('brif-link')}>
        <span>обсудить проект</span>
        <ArrowRight className={cn('brif-link-icon')}/>
      </Link>
    </div>
  </div>

  <div className={cn('contacts')}>
    <div className={cn('row')}>
      <div className={cn('col')}>
        <span className={cn('contact-label')}>telegramm</span>
        <span className={cn('contact-line')}/>
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
        <span className={cn('contact-line')}/>
        <span className={cn('contact-label')}>email</span>
      </div>
    </div>
  </div>


  <div className={cn('bottom')}>
    <div>
      <span>©2024 поярче. Все авторские права защищены.</span>
    </div>
    <div className={cn('privacy')}>
      <a href='/police.doc' className={cn('privacy-link')} download='Политика конфиденциальности'>Политика
        конфиденциальности</a>
      <a href='/sends.docx' className={cn('privacy-link')} download='Согласие на рассылку'>Согласие на рассылку</a>
      <a href='/operations.docx' className={cn('privacy-link')} download='Согласие на обработку ПД'>Согласие на
        обработку ПД</a>
      <a href='/offert.docx' className={cn('privacy-link')} download='Оферта'>Оферта</a>
    </div>
  </div>

</footer>;
