import React from 'react';
import { makeCn } from '@/src/utils';
import './ContactCollapse.scss';
import { Collapse } from '@/src/shared/Collapse';
import { ServiceFaq } from '@/src/contentfulApi/getServices';


const cn = makeCn('contact-collapse');

interface ContactCollapseProps extends ServiceFaq{
  open?: boolean;
  handleClick?: () => void;
}

export const ContactCollapse: React.FC<ContactCollapseProps> = ({
  title,
  about,
  days,
  ...rest
}) => (
  <Collapse
    className={cn('')}
    header={
      <div className={cn('header', { longText: !days })}>
        <p className={cn('title')}>{title}</p>
        {days && <p className={cn('days')}>{days}</p>}
      </div>
    }
    {...rest}
  >
    {about}
  </Collapse>
);
