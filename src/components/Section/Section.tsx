import { makeCn } from '@/src/utils';
import './Section.scss';
import { AnimateWrp } from '../AnimateWrp';

const cn = makeCn('section');
interface SectionProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  id?: string;
  noMargin?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, children, id, noMargin }) => {
  return (
    <section className={cn('', { noMargin })} id={id}>
      <AnimateWrp>
        <h2 className={cn('title')}>{title}</h2>
        <div className={cn('body')}>{children}</div>
      </AnimateWrp>
    </section>
  );
};
