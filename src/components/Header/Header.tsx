import { Burger } from '@/src/components/Burger';
import { routerLinks } from '@/src/data/navigation';
import Logo from '@/src/resources/icons/logo.svg';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Header.scss';

export const cn = makeCn('header');

export const Header = () => {
  return (
    <header className={cn()}>
      <div className={cn('main')}>
        <div className={cn('logo')}>
          <Link className={cn('logo-link')} href={routerLinks.root}>
            <Logo className={cn('logo-icon')} alt={'Поярче'} />
          </Link>
          <p className={cn('logo-text')}>№1 для crypto-tech</p>
          <p className={cn('logo-text')}>Экспертиза в кошельках, токенах, биржах</p>
        </div>

        <Burger />
      </div>
    </header>
  );
};
