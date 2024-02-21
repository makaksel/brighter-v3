import React from 'react';
import { makeCn } from '@/src/utils';
import './ContactCollapse.scss';
import { Collapse } from '@/src/shared/Collapse';


const cn = makeCn('contact-collapse');

interface ContactCollapseProps {
  title: string;
  desc: string;
  days?: string;
  price?: string;

  open?: boolean;
  handleClick?: () => void;
}

export const ContactCollapse: React.FC<ContactCollapseProps> = ({
  title,
  desc,
  days,
  price,
  ...rest
}) => (
  <Collapse
    className={cn('')}
    header={
      <div className={cn('header', { longText: (!days || !price) })}>
        <p className={cn('title')}>{title}</p>
        {days && <p className={cn('days')}>{days}</p>}
        {price && <p className={cn('price')}>{price}</p>}
      </div>
    }
    {...rest}
  >
    {desc}
  </Collapse>
);
