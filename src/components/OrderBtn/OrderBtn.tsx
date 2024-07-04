import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './OrderBtn.scss';
import { routerLinks } from '@/src/data';

const cn = makeCn('order-btn');

interface OrderBtnProps {
  className?: string;
}

export const OrderBtn: React.FC<OrderBtnProps> = ({className}) => {
  return (
    <Link className={cn('', [className])} href={routerLinks.form}>Заказать</Link>
  );
};
