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
import { TELEGRAM_BOT_LABEL } from '@/src/data';

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
  const [fileUpload, setFileUpload] = useState<File | null>(null);


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


  /** Создание оповещение в ТГ */
  const processData = async (data: BrifFrom) => {
    setIsLoading(true);
    setModalIsOpen(true);

    const formData = new FormData();

    const servicesData = Object.entries(data.services).reduce((acc: string[], [key, val]: [string, boolean]) => {
      if (!val) return acc;
      // @ts-ignore
      const newService: string = servicesMap[key];
      return [...acc, newService];
    }, []).join(', ');

    Object.entries(data)
      .forEach(([key, value]) => {
        if (key === 'services') {
          value = servicesData;
        }

        if (value) {
          formData.append(key, value);
        }
      });

    // const fileUp = await toBase64(fileUpload)

    if (fileUpload) {
      formData.append('file', fileUpload);
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (response) {
      setIsLoading(false);
    }
  };

  const fileHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFileUpload(event.target.files[0]);
    }
  };

  return (
    <form className={cn()} onSubmit={handleSubmit(processData)}>

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
            <span className={cn('title-cell-text')}>[почта или контакт в любом мессенджере]</span>
            <RequiredIcon className={cn('title-cell-icon', { error: !!get(errors, 'contact.message') })} />
          </p>
        </div>

        <Controller
          control={control}
          name="contact"
          rules={{ required: '[обязательно]' }}
          render={({ field }) =>
            <TextInput
              placeholder={`hello@poyarche.ru / ${TELEGRAM_BOT_LABEL}`}
              inputClassName={cn('input', [onest.className])}
              error={get(errors, 'contact.message') as unknown as string}
              {...field}
            />
          }
        />

      </div>

      <div className={cn('row')}>
        <div>
          <p className={cn('title-cell')}>
            <span className={cn('title-cell-text')}>[название компании]</span>
          </p>
        </div>
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
        <div>
          <p className={cn('title-cell')}>
            <span className={cn('title-cell-text')}>[вас интересуют]</span>
          </p>
        </div>
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

      <div className={cn('row', ['mt-100'])}>
        <div>
          <p className={cn('title-cell')}>
            <span className={cn('title-cell-text')}>[Прикрепите бриф (если есть)]</span>
          </p>
        </div>

        <div>
          <div className={cn('file-input-wrp')}>
            {/*<Controller
              control={control}
              name="file"
              render={({ field }) =>
                <label className={cn('file-input')}>
                  <input type="file" title="upload btn"
                         className={cn('file-input-field', [onest.className])}
                         accept=".doc, .docx, .txt, .pdf"  {...field}/>
                  <span className={cn('file-input-label')}>выбрать файл</span>
                </label>
              }
            />*/}
            <label className={cn('file-input')}>
              <input type="file" title="upload btn"
                     className={cn('file-input-field', [onest.className])}
                     accept=".doc, .docx, .txt, .pdf" onChange={fileHandleChange} />
              <span className={cn('file-input-label')}>выбрать файл</span>
            </label>
          </div>
        </div>

      </div>


      <div className={cn('row', [cn('actions')])}>
        <button type={'submit'} className={cn('submit-btn', { loading: isLoading }, [onest.className])}>
          <span className={cn('submit-btn-text')}>отправить</span>
          <ArrowRight className={cn('submit-btn-icon', ['hide-md'])} />
          <ArrowRightMobile className={cn('submit-btn-icon', ['mobile'])} />
        </button>
      </div>
      
      <BrifModal open={modalIsOpen} handleClose={() => setModalIsOpen(false)} />

    </form>
  );
};
