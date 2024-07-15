import { navigation, routerLinks, TELEGRAM_CHANEL_MAIN_LINK } from '@/src/data';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Navigation.scss';
import { OrderBtn } from '@/src/components/OrderBtn';
import React from 'react';
import Telegramm from '@/src/resources/icons/telegramm.svg';

const cn = makeCn('navigation');

interface NavigationProps {
  className?: string;
  onRouteClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ className, onRouteClick }) => {
  return (
    <>
      <div className={cn('', [className])}>
        <nav className={cn('nav')}>
          {Object.values(navigation).map((navItem) => (
            <Link key={navItem.label} href={`${routerLinks.root}${navItem.path}`} onClick={onRouteClick}
                  className={cn('link')}>
              {navItem.label}
            </Link>
          ))}
          <Link href={TELEGRAM_CHANEL_MAIN_LINK} className={cn('link', { telegramm: true })}>
            <Telegramm className={cn('link-icon')} />
            <span>Канал</span>
          </Link>
        </nav>
      </div>

      <OrderBtn className={className}/>
    </>
  );
};
