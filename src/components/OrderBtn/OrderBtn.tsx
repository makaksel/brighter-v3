import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './OrderBtn.scss';
import { routerLinks } from '@/src/data';

const cn = makeCn('order-btn');

export const OrderBtn = () => {
  return (
    <Link className={cn('')} href={routerLinks.form}>Заказать</Link>
  );
};
