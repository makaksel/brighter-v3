import { makeCn } from '@/src/utils';
import './Header.scss';

export const cn = makeCn('header');

interface HeaderLogoText {
  className?: string;
}

export const HeaderLogoText: React.FC<HeaderLogoText> = ({className}) => {

  return (
    <p className={cn('logo-text', [className])}>№1 для crypto-tech<br/> Экспертиза в кошельках, токенах, биржах</p>
  );
};
