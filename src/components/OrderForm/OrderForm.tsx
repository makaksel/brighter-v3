import { makeCn } from '@/src/utils';
import './OrderForm.scss';
import { TextInput } from '../TextInput';
import { createTelegrammNotify } from '@/src/actions';
import { AnimateWrp } from '../AnimateWrp';

const cn = makeCn('order-form');

export const OrderForm = () => {
  return (
    <section className={cn('')}>
      <h2 className={cn('title')}>Обсудим ваш проект, задизайним хотелку</h2>
      <AnimateWrp>
        <form className={cn('body')} action={createTelegrammNotify}>
          <TextInput className={cn('input')} name="name" label="Ваше имя" />
          <TextInput className={cn('input')} name="email" label="Почта" />
          <TextInput className={cn('input')} name="phone" label="Телефон" />
          <TextInput className={cn('input')} name="telegram" label="Телеграм" />

          <TextInput name="comment" label="Комментарий" />

          <button className={cn('submit')} type="submit">
            Отправить
          </button>
        </form>
      </AnimateWrp>
    </section>
  );
};
