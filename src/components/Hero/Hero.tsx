import { makeCn } from '@/src/utils';
import { Team } from '@/src/components/Team';
import { Ton } from '@/src/components/Ton';
import './Hero.scss';

const cn = makeCn('hero');

interface HeroProps {
  title: string;
  id?: string;
  largeGap?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ title, id, largeGap }) => {
  return (
    <section className={cn('')} id={id}>
      <h1 className={cn('title', { largeGap })}>{title}</h1>

      <div className={cn('text')}>
        <p>Мы специализируемся на крипто-тех дизайне, круты в кошельках и биржах, знаем сферу от а до я.</p>
        <p>Будем на одной волне и не придется объяснять, что такое токены и децентрализованные биржи</p>
      </div>

      <Team />
      <Ton />

    </section>
  );
};
