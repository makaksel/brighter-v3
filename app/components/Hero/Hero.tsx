import React from 'react';
import {makeCn} from "@/src/utils";
import "./Hero.scss";
import Image from "next/image";
import Maxim from '@/src/resources/images/maxim.png';
import { TELEGRAM_BOT_LINK } from "@/src/const";
import Link from 'next/link';

const cn = makeCn('hero');

export const Hero: React.FC = () => <section className={cn()}>
    <div className={cn('maxim')}>
        <Image src={Maxim}  className={cn('maxim-img')} alt="Максим Поярче"/>
        <span className={cn('maxim-text')}>Максим Поярче</span>
    </div>
    <h1 className={cn('title')}>Суперсила для вашего<br/>бизнеса — <span className={cn('title', {primary: true})}>дизайн подписка</span>
    </h1>
    <p className={cn('subtitle')}>Представьте себе Кинопоиск для веб-дизайна. Забудьте о сотрудниках, фрилансерах и
        агентствах. Вы можете получить
        лучший дизайн прямо здесь, прямо сейчас.</p>
    <Link href={TELEGRAM_BOT_LINK} className={cn('button')}>Бесплатная консультация</Link>
</section>;
