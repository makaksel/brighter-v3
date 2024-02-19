'use client';

import React, { useState } from 'react';
import { makeCn } from '@/src/utils';
import './BrifFrom.scss';
import { TextInput } from '@/src/components/TextInput';
import { CheckboxButton } from '@/src/components/CheckboxButton';
import ArrowRight from '@/src/resources/icons/ArrowRight_big.svg';
import RequiredIcon from '@/src/resources/icons/required.svg';
import { Onest } from 'next/font/google';
import { Controller, useForm } from 'react-hook-form';

import get from 'lodash/get';
import ArrowRightMobile from '@/src/resources/icons/ArrowRightMobile.svg';
import { BrifModal } from '@/src/components/BrifModal';

const onest = Onest({ subsets: ['latin'] });

const cn = makeCn('brif-from');

export interface BrifFrom {
  name: string;
  contact: string;
  company: string;
  services: {
    branding: boolean;
    site: boolean;
    design: boolean;
    consultation: boolean;
  },
  budget: string;
  file: string;
}

export const BrifFrom: React.FC = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<BrifFrom>({
    defaultValues: {
      name: '',
      contact: '',
      company: '',
      services: {
        branding: false,
        site: false,
        design: false,
        consultation: false,
      },
      budget: '',
      file: '',
    },
  });

  const servicesWatch = watch('services');
  const budgetWatch = watch('budget');

  const servicesMap = {
    branding: 'брендинг',
    site: 'сайты',
    design: 'дизайн-поддержка',
    consultation: 'консультация',
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const processData = async (data: BrifFrom) => {
    setIsLoading(true);

    const servicesData = Object.entries(data.services).reduce((acc: string[], [key, val]: [string, boolean]) => {
      if (!val) return acc;
      // @ts-ignore
      const newService: string = servicesMap[key];
      return [...acc, newService];
    }, []).join(', ');
    const resultData = { ...data, services: servicesData };

    const response = await fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(resultData),
    });

    if (response) {
      setModalIsOpen(true);
      setIsLoading(false);
    }
  };

  const servicesHandleChange = (val: boolean, name: any) => {
    setValue(name, val);
  };

  const budgetHandleChange = (val: boolean, name: string) => {
    if (!val) {
      setValue('budget', '');
      return;
    }
    setValue('budget', name);
  };

  const fileHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // var tmppath = event.target.files[0].mozFullPath;
    // console.log(tmppath);
  };

  return (
    <form className={cn()} onSubmit={handleSubmit(processData)}>

      <div className={cn('row')}>
        <p className={cn('title-cell')}>
          <span className={cn('title-cell-text')}>[ваше имя]</span>
          <RequiredIcon className={cn('title-cell-icon', { error: !!get(errors, 'name.message') })} />
        </p>
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
        <p className={cn('title-cell')}>
          <span className={cn('title-cell-text')}>[почта или контакт в любом мессенджере]</span>
          <RequiredIcon className={cn('title-cell-icon', { error: !!get(errors, 'contact.message') })} />
        </p>
        <Controller
          control={control}
          name="contact"
          rules={{ required: '[обязательно]' }}
          render={({ field }) =>
            <TextInput
              placeholder="poyarche@mail.ru / @poyarche"
              inputClassName={cn('input', [onest.className])}
              error={get(errors, 'contact.message') as unknown as string}
              {...field}
            />
          }
        />

      </div>

      <div className={cn('row')}>
        <p className={cn('title-cell')}>
          <span className={cn('title-cell-text')}>[название компании]</span>
        </p>
        <Controller
          control={control}
          name="company"
          render={({ field }) =>
            <TextInput
              placeholder="введите название вашей компании"
              inputClassName={cn('input', [onest.className])}
              {...field}
            />
          }
        />
      </div>

      <div className={cn('row', ['mt-100'])}>
        <p className={cn('title-cell')}>
          <span className={cn('title-cell-text')}>[вас интересуют]</span>
        </p>
        <div>
          <div className={cn('checkboxes')}>
            <CheckboxButton name="services.branding" onChange={servicesHandleChange} checked={servicesWatch.branding}>
              брендинг
            </CheckboxButton>
            <CheckboxButton name="services.site" onChange={servicesHandleChange} checked={servicesWatch.site}>
              сайты
            </CheckboxButton>
            <CheckboxButton name="services.design" onChange={servicesHandleChange} checked={servicesWatch.design}>
              дизайн-поддержка
            </CheckboxButton>
            <CheckboxButton name="services.consultation"
                            onChange={servicesHandleChange}
                            checked={servicesWatch.consultation}
            >
              консультация
            </CheckboxButton>
          </div>
        </div>

      </div>

      <div className={cn('row')}>
        <p className={cn('title-cell')}>
          <span className={cn('title-cell-text')}>[бюджет]</span>
        </p>
        <div>
          <div className={cn('checkboxes')}>
            <CheckboxButton name="150000" onChange={budgetHandleChange} checked={budgetWatch === '150000'}>
              ~ 150 000 ₽
            </CheckboxButton>
            <CheckboxButton name="250000" onChange={budgetHandleChange} checked={budgetWatch === '250000'}>
              ~ 250 000 ₽
            </CheckboxButton>
            <CheckboxButton name="350000" onChange={budgetHandleChange} checked={budgetWatch === '350000'}>
              ~ 350 000 ₽
            </CheckboxButton>
            <CheckboxButton name="450000" onChange={budgetHandleChange} checked={budgetWatch === '450000'}>
              ~ 450 000 ₽
            </CheckboxButton>

          </div>
        </div>
      </div>

      <div className={cn('row', ['mt-100'])}>
        <p className={cn('title-cell')}>
          <span className={cn('title-cell-text')}>[Прикрепите бриф (если есть)]</span>
        </p>

        <div>
          <label className={cn('file-input')}>
            <input type="file" name="file" title="upload btn" className={cn('file-input-field', [onest.className])}
                   accept=".doc, .docx, .txt, .pdf" onChange={fileHandleChange} />
            <span className={cn('file-input-label')}>выбрать файл</span>
          </label>
        </div>

      </div>


      <div className={cn('row', [cn('actions')])}>
        <button type={'submit'} className={cn('submit-btn', { loading: isLoading }, [onest.className])}>
          <span className={cn('submit-btn-text')}>отправить</span>
          <ArrowRight className={cn('submit-btn-icon', ['hide-md'])} />
          <ArrowRightMobile className={cn('submit-btn-icon', ['mobile'])} />
        </button>
      </div>

      <BrifModal open={modalIsOpen} />

    </form>
  );
};
