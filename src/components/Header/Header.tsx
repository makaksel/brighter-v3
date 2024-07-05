import { Burger } from '@/src/components/Burger';
import { routerLinks } from '@/src/data/navigation';
import LogoImg from '@/src/resources/images/logo.png';
import { makeCn } from '@/src/utils';
import Image from 'next/image';
import Link from 'next/link';
import './Header.scss';
import { HeaderLogoText } from './HeaderLogoText';

export const cn = makeCn('header');

export const Header = () => {
  return (
    <>
      <header className={cn()}>
        <div className={cn('main')}>
          <div className={cn('logo')}>
            <Link className={cn('logo-link')} href={routerLinks.root}>
              <Image src={LogoImg} className={cn('logo-icon')} alt={'Поярче'} />
            </Link>
            <HeaderLogoText />
          </div>

          <Burger />
        </div>
     
      </header>
      <HeaderLogoText className={'mobile'} />
    </>
  );
};
