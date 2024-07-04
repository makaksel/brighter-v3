import { navigation, routerLinks } from '@/src/data';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './Navigation.scss';

const cn = makeCn('navigation');

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({className}) => {
  return (
    <div className={cn('', [className])}>
      <nav className={cn('nav')}>
        {Object.values(navigation).map((navItem) => (
          <Link key={navItem.label} href={`${routerLinks.root}${navItem.path}`} className={cn('link')}>
            {navItem.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
