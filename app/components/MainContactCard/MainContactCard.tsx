import React from 'react';
import { makeCn } from '@/src/utils';
import './MainContactCard.scss';
import { ContactCard } from '@/src/shared/ContactCard';
import Image from 'next/image';
import Diamond from '@/src/resources/images/diamond1.png';
import { MagneticButton } from '@/src/shared/MagneticButton';

const cn = makeCn('main-contact');

export const MainContactCard: React.FC = () => <div className={cn()}>
    <div className={cn('cloudImg', [cn('dot')])}>
      <MagneticButton activeStiffness={40}>
        <svg className={cn('cloudImg-img')} xmlns='http://www.w3.org/2000/svg' width='79' height='79'
             viewBox='0 0 79 79'
             fill='none'>
          <path
            d='M4.1265 37.4415C-2.22601 34.9191 -0.0933142 25.437 6.72745 25.8775L27.4687 27.2171C30.0641 27.3847 32.472 25.8611 33.4319 23.4438L41.1022 4.12647C43.6246 -2.22604 53.1067 -0.0933544 52.6662 6.72741L51.3267 27.4687C51.1591 30.0641 52.6827 32.472 55.1 33.4319L74.4172 41.1022C80.7697 43.6245 78.637 53.1067 71.8163 52.6662L51.0751 51.3267C48.4796 51.1591 46.0718 52.6827 45.1119 55.0999L37.4415 74.4173C34.9191 80.7698 25.437 78.637 25.8775 71.8163L27.2171 51.0751C27.3847 48.4797 25.8611 46.0717 23.4438 45.1119L4.1265 37.4415Z'
            fill='#3E51FF' />
        </svg>
      </MagneticButton>
    </div>

    <div className={cn('cloudImg', [cn('diamond')])}>
      <MagneticButton activeStiffness={10}>
        <Image src={Diamond} alt={'Бриллиант'} className={cn('cloudImg-img')} />
      </MagneticButton>
    </div>

    <ContactCard />
  </div>
;
