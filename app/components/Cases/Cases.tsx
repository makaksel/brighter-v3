import React from 'react';
import {makeCn} from "@/src/utils";
import Link from "next/link";
import "./Cases.scss";
import Image from "next/image";
import {CasesCompressed} from "@/app/components/CasesCompressed";
import {CaseCard} from "@/app/components/CaseCard";
import {Ankil} from "@/app/components/posters";
import {Marta} from "@/app/components/posters/Marta";
import {Bright} from "@/app/components/posters/Bright/Bright";
import {BigData} from "@/app/components/posters/BigData";
import { TELEGRAM_BOT_LINK } from "@/src/const";

const cn = makeCn('cases');

export const Cases: React.FC = () => <section className={cn()}>
    <div className={cn('header')}>
        <p className={cn("header-left-title")}>10+ Проектов<br/><span
            className={cn("header-left-title", {primary: true})}>Дизайн-подписки</span></p>
        <p className={cn("header-right-title")}>Кейсы</p>
        <p className={cn("header-left-text")}>Мы сотрудничаем с бизнесами любого размера, уверены в важности дизайна
            для
            всех. Наша миссия - поддерживать актуальность вашего бренда, предлагая свежие дизайнерские решения.</p>

        <CasesCompressed/>

    </div>
    <div className={cn('body')}>
        <CaseCard
            title="Издательский дом “Анкил”"
            text="Издательский дом Анкил благодаря нашей подписке на дизайн поддерживает актуальность своего бренда, регулярно обновляя визуальный контент своей продукции"
            stats={[25, 40, 15]}
            media={
                <Ankil/>
            }
        />
        <CaseCard
            title="Курсы английского языка “Марта”"
            text="С курсами английского языка Марта мы открыли доступ к постоянным обновлениям визуального контента, усиливая привлекательность их обучающих материалов"
            stats={[35, 50, 20]}
            media={
              <Marta/>
            }
        />
        <CaseCard
            title="Big Data стартап “Economic data”"
            text="Сервис Big Data, благодаря нашей подписке, улучшает визуализацию своих данных, делая свой сервис более доступным для клиентов и укрепляя свой бренд"
            stats={[40, 55, 25]}
            media={
              <BigData/>
            }

        />
        <CaseCard
            title="Детский сад ”Bright Minds”"
            text="Предоставив дизайн-подписку детскому саду, мы помогли им создать привлекательную и безопасную среду, поддерживая актуальность их образовательных материалов"
            stats={[30, 45, 20]}
            media={
              <Bright/>
            }
        />
    </div>
    <Link href={TELEGRAM_BOT_LINK} className={cn('button')}>Обсудить проект</Link>
</section>;
