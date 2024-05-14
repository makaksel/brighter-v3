'use client';

import React, { useState } from 'react';
import './ExpressForm.scss';

import { makeCn } from '@/src/utils';
import localFont from 'next/font/local';
import RequiredIcon from '@/src/resources/icons/required.svg';
import get from 'lodash/get';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '@/src/components/TextInput';
import { Onest } from 'next/font/google';
import { TELEGRAM_BOT_LABEL } from '@/src/data';

const NeutralFaceFont = localFont({ src: '../../../public/fonts/NeutralFace.otf' });
const onest = Onest({ subsets: ['latin'] });

export const cn = makeCn('express-form');

export interface ExpressForm {
  name: string;
  phone: string;
  telegram: string;

}

export const ExpressForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpressForm>({
    defaultValues: {
      name: '',
      phone: '',
      telegram: '',
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);


  /** Создание оповещение в ТГ */
  const processData = async (data: ExpressForm) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.entries(data)
      .forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (response) {
      setIsLoading(false);
    }
  };

  return (
    <section className={cn()} id={"form"}>
      <h3 className={cn('title', [NeutralFaceFont.className])}>Оставьте заявку</h3>


      <form className={cn('form')} onSubmit={handleSubmit(processData)}>

        <div className={cn('row')}>
          <div>
            <p className={cn('title-cell')}>
              <span className={cn('title-cell-text')}>[ваше имя]</span>
              <RequiredIcon className={cn('title-cell-icon', { error: !!get(errors, 'name.message') })} />
            </p>
          </div>
          <Controller
            control={control}
            name="name"
            rules={{ required: '[обязательно]' }}
            render={({ field }) =>
              <TextInput placeholder="введите ваше имя"
                         inputClassName={cn('input', [onest.className])}
                         error={get(errors, 'name.message') as unknown as string}
                         {...field}
              />
            }
          />
        </div>

        <div className={cn('row')}>
          <div>
            <p className={cn('title-cell')}>
              <span className={cn('title-cell-text')}>[номер телефона]</span>
              <RequiredIcon className={cn('title-cell-icon', { error: !!get(errors, 'phone.message') })} />
            </p>
          </div>
          <Controller
            control={control}
            name="phone"
            rules={{ required: '[обязательно]' }}
            render={({ field }) =>
              <TextInput placeholder="+7 987 123-45-67"
                         inputClassName={cn('input', [onest.className])}
                         error={get(errors, 'phone.message') as unknown as string}
                         {...field}
              />
            }
          />
        </div>

        <div className={cn('row')}>
          <div>
            <p className={cn('title-cell')}>
              <span className={cn('title-cell-text')}>[telegram]</span>
            </p>
          </div>
          <Controller
            control={control}
            name="telegram"
            render={({ field }) =>
              <TextInput placeholder={TELEGRAM_BOT_LABEL}
                         inputClassName={cn('input', [onest.className])}
                         {...field}
              />
            }
          />
        </div>

        <div className={cn('action')}>
          <button className={cn('submit', [onest.className])} type="submit">отправить</button>
        </div>

      </form>

    </section>
  );
};
