import { makeCn } from '@/src/utils';
import './WeDo.scss';
import { Section } from '@/src/components/Section';

const cn = makeCn('we-do');

const list = ['Web App', 'Креативы', 'Приложения', 'Иллюстрации', 'Сайты', '3D', 'Сервисы']

export const WeDo = () => {
  return (
    <Section title="Мы делаем">
      <div className={cn('')}>
        {list.map((item) => <span key={item} className={cn('item')}>{item}</span>)}
      </div>
    </Section>
  );
};
