import { makeCn } from '@/src/utils';
import { Team } from '@/src/components/Team';
import './Hero.scss';

const cn = makeCn('hero');

interface HeroProps {
  title: string;
  id?: string;
  largeGap?: boolean;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, id, largeGap, className }) => {
  return (
    <section className={cn('', [className])} id={id}>
      
      <h1 className={cn('title', { largeGap }, )} dangerouslySetInnerHTML={{ __html: title }}></h1>

      <div className={cn('text')}>
        <p>Мы специализируемся на крипто-тех дизайне, круты в кошельках и биржах, знаем сферу от а до я.</p>
        <p>Будем на одной волне и не придется объяснять, что такое токены и децентрализованные биржи</p>
      </div>

      <Team />

    </section>
  );
};
