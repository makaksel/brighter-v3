import React from 'react';
import { makeCn } from '@/src/utils';
import './BrifModal.scss';
import Link from 'next/link';
import ArrowRight from '@/src/resources/icons/ArrowRight_big.svg';
import ArrowRightMobile from '@/src/resources/icons/ArrowRightMobile.svg';
import { routerLinks } from '@/src/data/navigation';
import { BEHANCE_LINK, INSTAGRAM_LINK, TELEGRAM_BOT_LINK, YOUTUBE_LINK } from '@/src/data/const';

const cn = makeCn('brif-modal');

interface BrifModalProps {
  open?: boolean;
  handleClose?: () => void;
}

export const BrifModal: React.FC<BrifModalProps> = ({ open }) => {

  return (
    <div className={cn('', { open })}>

      <div className={cn('wrp')}>
        <div className={cn('content')}>
          <div className={cn('body')}>
            <h3 className={cn('title')}>спасибо!</h3>
            <p className={cn('subtitle')}>Мы приняли вашу заявку, и Скоро с вами свяжемся</p>

            <div className={cn('block')}>
              <div className={cn('block-col')}>
                <p className={cn('block-title')}>а пока посмотрите <br /> наши соц. сети</p>
                <span className={cn('block-line')}></span>
              </div>
              <div className={cn('block-col', [cn('social')])}>
                <Link href={TELEGRAM_BOT_LINK} className={cn('social-link')}>telegram</Link>
                <Link href={INSTAGRAM_LINK} className={cn('social-link')}>instagram</Link>
                <Link href={BEHANCE_LINK} className={cn('social-link')}>behance</Link>
                <Link href={YOUTUBE_LINK} className={cn('social-link')}>youtube</Link>
              </div>
            </div>

            <div className={cn('block')} style={{ alignItems: 'flex-end' }}>
              <div className={cn('block-col')}>
                <p className={cn('block-title')}>скачайте гайд</p>
                <span className={cn('block-line')}></span>
              </div>
              <div className={cn('block-col')}>
                <a href={'/guide.pdf'} className={cn('load-guide')} download="гайд">скачать</a>
              </div>
            </div>

          </div>


          <div className={cn('footer')}>
            <p>* Instagram принадлежит компании Meta, признанной экстремистской организацией и запрещенной в РФ.</p>
            <Link href={routerLinks.root} className={cn('link')}>
              <span>на главную</span>
              <ArrowRight className={cn('link-icon', ['hide-md'])} />
              <ArrowRightMobile className={cn('link-icon', ['mobile'])} />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};
