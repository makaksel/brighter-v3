import { makeCn } from '@/src/utils';
import './Clients.scss';
import Client from '@/src/resources/images/client1.jpg';
import Client2 from '@/src/resources/images/client2.jpg';
import Client3 from '@/src/resources/images/client3.jpg';
import Client4 from '@/src/resources/images/client4.jpg';
import Image from 'next/image';
import { Section } from '@/src/components/Section';

const cn = makeCn('clients');

export const Clients = () => {
  return (
    <Section title="Наши клиенты">
      <div className={cn('')}>
        <div className={cn('img-wrp')}>
          <Image className={cn('img')} src={Client} alt={'Клиент'} quality={100}/>
        </div>

        <div className={cn('img-wrp')}>
          <Image className={cn('img')} src={Client2} alt={'Клиент'} quality={100} />
        </div>
        <div className={cn('img-wrp')}>
          <Image className={cn('img')} src={Client3} alt={'Клиент'} quality={100} />
        </div>
        <div className={cn('img-wrp')}>
          <Image className={cn('img')} src={Client4} alt={'Клиент'} quality={100} />
        </div>
      </div>
    </Section>
  );
};
