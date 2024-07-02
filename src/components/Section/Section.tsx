import { makeCn } from '@/src/utils';
import './Section.scss';

const cn = makeCn('section');
interface SectionProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section className={cn('')} id={id}>
      <h2 className={cn('title')}>{title}</h2>
      <div className={cn('body')}>{children}</div>
    </section>
  );
};
