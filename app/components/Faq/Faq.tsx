import React from 'react';
import { makeCn } from "@/src/utils";
import Link from "next/link";
import "./Faq.scss";
import { Collapse } from "@/app/components/Collapse";


const cn = makeCn('faq');

export const Faq: React.FC = () => <section className={cn('')}>
  <div className={cn("header")}>
    <p className={cn("text")}>Мы подготовили список часто-задаваемых вопросов, которые помогут вам с выбором.</p>
    <p className={cn("title")}>Вопросы</p>
    <p className={cn("text")}>Частые вопросы</p>
  </div>
  <div className={cn("accordion")}>
    <Collapse title="Сколько времени занимает брендинг?">
      ничего нет, упс...
    </Collapse>
    <Collapse title="Что, если мне не понравится конечный результат?">
      ничего нет, упс...
    </Collapse>
    <Collapse title="Как выглядит процесс брендинга?">
      ничего нет, упс...
    </Collapse>
    <Collapse title="Какой у вас опыт?">
      В зависимости от упаковки, работа по дизайну бренда может занять от 8 недель и больше. Если есть существующий
      дизайн логотипа, основателям стартапов обычно нужно больше времени принять решение. Мы называем это естественным
      сопротивлением изменениям, которое делает временные рамки в любом месте в течение двух месяцев, даже для самой
      маленькой упаковки. Мы тебя знаем вероятно, это было нужно вчера, но хороший дизайн требует времени.
    </Collapse>
  </div>
</section>;
