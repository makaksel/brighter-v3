import React from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Footer.scss';
import ArrowRight from '@/src/resources/icons/ArrowRight_big.svg';
import ArrowRightMobile from '@/src/resources/icons/ArrowRightMobile.svg';
import { routerLinks } from '@/src/data/navigation';
import { Contacts } from '@/src/components/Contacts';


const cn = makeCn('footer');

interface FooterProps {
  noContacts?: boolean;
  noBrifLink?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  noContacts,
  noBrifLink,
}) => <footer
  className={cn()}>

  {!noBrifLink && <div className={cn('row')}>
    <div className={cn('col')}></div>
    <div className={cn('col')}>
      <Link href={routerLinks.brif} className={cn('brif-link')}>
        <span>обсудить проект</span>
        <ArrowRight className={cn('brif-link-icon', ['hide-md'])} />
        <ArrowRightMobile className={cn('brif-link-icon', ['mobile'])} />
      </Link>
    </div>
  </div>}

  {!noContacts && <Contacts />}


  <div className={cn('bottom')}>
    <div>
      <span>©2024 поярче. Все авторские права защищены.</span>
    </div>
    <div className={cn('privacy')}>
      <a href="/police.doc" className={cn('privacy-link')} download="Политика конфиденциальности">Политика
        конфиденциальности</a>
      <a href="/sends.docx" className={cn('privacy-link')} download="Согласие на рассылку">Согласие на рассылку</a>
      <a href="/operations.docx" className={cn('privacy-link')} download="Согласие на обработку ПД">Согласие на
        обработку ПД</a>
      <a href="/offert.docx" className={cn('privacy-link')} download="Оферта">Оферта</a>
    </div>
  </div>

</footer>;
