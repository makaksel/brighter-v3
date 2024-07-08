'use client';

import { Burger } from '@/src/components/Burger';
import { routerLinks } from '@/src/data/navigation';
import LogoSvg from '@/src/resources/icons/logo.svg';
import LogoSvgMob from '@/src/resources/icons/logo_mob.svg';
import { makeCn, useMediaQuery } from '@/src/utils';
import Link from 'next/link';
import './Header.scss';
import { HeaderLogoText } from './HeaderLogoText';
import { OrderBtn } from '../OrderBtn';

export const cn = makeCn('header');

export const Header = () => {
  const isMobile = useMediaQuery('1024');

  return (
    <>
      <header className={cn()}>
        <div className={cn('main')}>
          <div className={cn('logo')}>
            <Link className={cn('logo-link')} href={routerLinks.root}>
              {isMobile ? (
                <LogoSvgMob className={cn('logo-icon')} alt={'Поярче'} />
              ) : (
                <LogoSvg className={cn('logo-icon')} alt={'Поярче'} />
              )}
            </Link>

            {!isMobile && <HeaderLogoText />}
          </div>

          <Burger />
          {!isMobile && <OrderBtn className="hide-md" />}
        </div>
      </header>

      {isMobile && <HeaderLogoText className={'mobile'} />}
    </>
  );
};
