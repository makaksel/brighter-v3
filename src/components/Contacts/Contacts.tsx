import { makeCn } from '@/src/utils';
import './Contacts.scss';
import { Section } from '@/src/components/Section';
import { EMAIL, TELEGRAM_CANNEL_FOOTER_LABEL, TELEGRAM_CANNEL_FOOTER_LINK, anchors } from '@/src/data';
import Link from 'next/link';

const cn = makeCn('contacts');

const list = [
  {
    id: 1,
    link: TELEGRAM_CANNEL_FOOTER_LINK,
    label: TELEGRAM_CANNEL_FOOTER_LABEL,
  },
  {
    id: 2,
    link: EMAIL,
    label: EMAIL,
  },
];

export const Contacts = () => {
  return (
    
      <Section title="Наши контакты" id={anchors.contacts} noMargin>
        <div className={cn('')}>
          {list.map((item) => (
            <Link key={item.id} href={item.link} className={cn('link')}>
              {item.label}
            </Link>
          ))}
        </div>
      </Section>
  );
};
