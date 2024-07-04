import { makeCn } from '@/src/utils';
import './Footer.scss';
import { AnimateWrp } from '../AnimateWrp';

const cn = makeCn('footer');

export const Footer = () => (
  <footer className={cn()}>
    <AnimateWrp>
    <div className={cn('docs')}>
      <a href="/police.pdf" className={cn('link')} download="Политика обработки данных">
        Политика обработки данных
      </a>
      <a href="/operations.pdf" className={cn('link', { disable: true })} download="Пользовательское соглашение">
        Пользовательское соглашение
      </a>
    </div>
    <p className={cn('about')}>
      ИП Мещеров Максим Владимирович, ИНН 631625080247, ОГРН 322631200130634, Юридический адрес: г.Самара,
      ул.Ульяновская/ул.Чапаевская, д11/205, кв 106
    </p>
    </AnimateWrp>
  </footer>
);
