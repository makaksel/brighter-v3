'use client';

import React from 'react';
import { makeCn } from '@/src/utils';
import './CaseSidebar.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import Verified from '@/src/resources/icons/verified.svg';

const cn = makeCn('case-sidebar');

type CaseSidebarProps = {
  title: string;
  about?: string;
  task?: string;
  subtitle?: string;
  caseLink?: string;
  behanceLink?: string;
};


export const CaseSidebar: React.FC<CaseSidebarProps> = ({
  title,
  about,
  task,
  subtitle,
  caseLink,
  behanceLink,
}) => {
  const router = useRouter();

  return (
    <aside className={cn('')}>
      <div className={cn('wrp')}>
        <div className={cn('header')}>
          <span className={cn('back-link')} onClick={() => router.back()}>
            <ArrowRight className={cn('back-link-icon')} />
            <span>назад</span>
          </span>

          <h2 className={cn('title')}>
            <span>{title}</span>
            <Verified className={cn('title-icon')} />
          </h2>
          {subtitle && <p className={cn('sub-title')}>{subtitle}</p>}
        </div>

        <div className={cn('body')}>
          {task && <div className={cn('row')}>
            <p className={cn('row-title')}>[задача]</p>
            <div className={cn('row-text')} dangerouslySetInnerHTML={{ __html: task }} />
          </div>}
          {about && <div className={cn('row')}>
            <p className={cn('row-title')}>[результат]</p>
            <div className={cn('row-text')} dangerouslySetInnerHTML={{ __html: about }} />
          </div>}
        </div>

        <div className={cn('footer')}>
          {caseLink && <Link className={cn('case-link')} href={caseLink}>
            <span>{new URL(caseLink).hostname.replace(/^www\./, '')}</span>
            <ArrowRight className={cn('arrow-icon')} />
          </Link>}
          {behanceLink && <Link className={cn('behance-link')} href={behanceLink}>
            <span>кейс на behance</span>
            <ArrowRight className={cn('arrow-icon')} />
          </Link>}
        </div>
      </div>

    </aside>
  );
};
