import { Metadata } from 'next';
import React from 'react';
import { CaseSidebar } from '@/src/components/CaseSidebar';
import './page.scss';
import { makeCn } from '@/src/utils';
import Image from 'next/image';
import getCaseById from '@/src/utils/getCaseById';
import { IPageProps } from '@/src/models';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('case-page');

export default async function page({ params }: IPageProps) {
  const { fields } = await getCaseById({ id: params.caseId });

  return (
    <main className={cn()}>
      <CaseSidebar
        title={fields.title}
        subtitle={fields.subtitle}
        caseLink={fields.link}
        behanceLink={fields.behanceLink}
      />
      <div className={cn('media')}>
        {!!fields?.imgs && fields?.imgs.map((img) => {
          return (
            <Image
              key={`https:${img.fields.file.url}`}
              src={`https:${img.fields.file.url}`}
              alt={'ник чернобаев'}
              className={cn('media-img')}
              width={img.fields.file.details.image.width}
              height={img.fields.file.details.image.height}
            />);
        })}
      </div>
    </main>
  );
}
