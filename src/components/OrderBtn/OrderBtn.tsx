'use client';

import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './OrderBtn.scss';
import { routerLinks } from '@/src/data';
import { usePathname } from 'next/navigation';

const cn = makeCn('order-btn');

interface OrderBtnProps {
  className?: string;
  isMobile?: boolean;
  onClick?: () => void;
}

export const OrderBtn: React.FC<OrderBtnProps> = ({className, isMobile, onClick}) => {
  const pathname = usePathname();

  if(pathname !== '/' && !isMobile) return null;

  return (
    <Link className={cn('', {isMobile}, [className])} href={routerLinks.form} onClick={onClick}>Заказать</Link>
  );
};
