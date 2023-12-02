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
        <div className={cn('bottom-col')}>
            <a href='/police.doc' className={cn('bottom-text')} download="Privacy Policy">Privacy Policy</a>
            <a href='/offert.docx' className={cn('bottom-text')} download="Terms of Use">Terms of Use</a>
        </div>
        <div className={cn('bottom-col')}>
            <div className={cn('social')}>
                {/*<Link className={cn('social-link')} href={`#`}>in</Link>*/}
                <Link className={cn('social-link')} href={TELEGRAM_BOT_LINK}>tg</Link>
                {/*<Link className={cn('social-link')} href={`#`}>vk</Link>*/}
            </div>
            <p className={cn('bottom-text')}>поярче© 2023</p>
        </div>
    </div>
</footer>;
