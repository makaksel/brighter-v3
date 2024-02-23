import React from 'react';
import { makeCn } from '@/src/utils';
import './BrifModal.scss';
import Link from 'next/link';
import { BEHANCE_LINK, INSTAGRAM_LINK, TELEGRAM_BOT_LINK, YOUTUBE_LINK } from '@/src/data/const';

const cn = makeCn('brif-modal');

interface BrifModalProps {
  open?: boolean;
  handleClose?: () => void;
}

export const BrifModal: React.FC<BrifModalProps> = ({ open, handleClose }) => {

  return (
    <div className={cn('', { open })}>

      <div className={cn('wrp')}>
        <div className={cn('content')}>
          <div className={cn('header')}>
            <div className={cn('header-left')}>
              <h3 className={cn('title')}>спасибо!</h3>
              <p className={cn('subtitle')}>Мы приняли вашу заявку, и Скоро с вами свяжемся</p>
            </div>
            <svg className={cn('close')} onClick={handleClose} width="77" height="77" viewBox="0 0 77 77" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M59.9923 17.0197L17.0077 60.0043M59.9923 60.0043L17.0077 17.0197" stroke="#2D2D2D"
                    />
            </svg>

          </div>

          <div className={cn('body')}>
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
            <p className={cn('notice')}>* Instagram принадлежит компании Meta, признанной экстремистской организацией и
              запрещенной в РФ.</p>
            {/*<Link href={routerLinks.root} className={cn('link')}>*/}
            {/*  <span>на главную</span>*/}
            {/*  <ArrowRightMobile className={cn('link-icon', ['mobile'])} />*/}
            {/*</Link>*/}
          </div>

        </div>
      </div>

    </div>
  );
};
