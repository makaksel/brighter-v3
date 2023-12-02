import React from 'react';
import {makeCn} from '@/src/utils';
import Link from 'next/link';
import './Footer.scss';
import {EMAIL, PHONE, TELEGRAM_BOT_LINK} from '@/src/data/const';


const cn = makeCn('footer');


interface FooterProps {
    className?: string;
    theme?: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({theme = 'dark', className}) => <footer
    className={cn({theme}, [className])}>
    <div className={cn('body')}>
        <p className={cn('title')}>Лучший дизайн рождается в Поярче</p>
        <div className={cn('contact')}>
            <Link className={cn('contact-link')} href={TELEGRAM_BOT_LINK}>@xpoyarche</Link>
            <Link className={cn('contact-link')} href={`mailto:${EMAIL}`}>{EMAIL}</Link>
        </div>
    </div>
    <div className={cn('bottom')}>
      <div className={cn('docs')}>
        <a href='/police.doc' className={cn('bottom-link')} download="Политика конфиденциальности">Политика конфиденциальности</a>
        <a href='/sends.docx' className={cn('bottom-link')} download="Согласие на рассылку">Согласие на рассылку</a>
        <a href='/operations.docx' className={cn('bottom-link')} download="Согласие на обработку ПД">Согласие на обработку ПД</a>
        <a href='/offert.docx' className={cn('bottom-link')} download="Оферта">Оферта</a>
      </div>
      <div className={cn('social')}>
        {/*<Link className={cn('social-link')} href={`#`}>in</Link>*/}
        <Link className={cn('social-link')} href={TELEGRAM_BOT_LINK}>tg</Link>
        {/*<Link className={cn('social-link')} href={`#`}>vk</Link>*/}
      </div>
      <p className={cn('bottom-text')}>поярче© 2023</p>
    </div>
</footer>;
