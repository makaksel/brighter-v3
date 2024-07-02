import { navigation } from '@/src/data';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Navigation.scss';

const cn = makeCn('navigation');

export const Navigation = () => {
  return (
    <div className={cn()}>
      <nav className={cn('nav')}>
        {Object.values(navigation).map((navItem) => (
          <Link key={navItem.label} href={navItem.path} className={cn('link')}>
            {navItem.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
