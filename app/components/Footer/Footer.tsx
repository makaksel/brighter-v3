import React from 'react';
import { makeCn } from "@/src/utils";
import Link from "next/link";
import "./Footer.scss";
import { EMAIL, PHONE, TELEGRAM_BOT_LINK } from "@/src/const";


const cn = makeCn('footer');

export const Footer: React.FC = () => <footer className={cn('')}>
  <div className={cn("body")}>
    <p className={cn('title')}>Лучший дизайн рождается в Поярче</p>
    <div className={cn('contact')}>
      <Link className={cn('contact-link')} href={TELEGRAM_BOT_LINK}>@xpoyarche</Link>
      <Link className={cn('contact-link')} href={`tel:${PHONE}`}>{PHONE}</Link>
      <Link className={cn('contact-link')} href={`mailto:${EMAIL}`}>{EMAIL}</Link>
    </div>
  </div>
  <div className={cn("bottom")}>
    <div className={cn("bottom-col")}>
      <p className={cn("bottom-text")}>Privacy Policy</p>
      <p className={cn("bottom-text")}>Terms of Use</p>
    </div>
    <div className={cn("bottom-col")}>
      <div className={cn('social')}>
        <Link className={cn('social-link')} href={`#`}>in</Link>
        <Link className={cn('social-link')} href={`#`}>tg</Link>
        <Link className={cn('social-link')} href={`#`}>vk</Link>
      </div>
      <p className={cn("bottom-text")}>поярче© 2023</p>
    </div>
  </div>
</footer>;
