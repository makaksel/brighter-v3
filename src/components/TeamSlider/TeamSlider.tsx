'use client';

import React, { useState } from 'react';
import { makeCn, useMediaQuery } from '@/src/utils';
import './TeamSlider.scss';
import Image, { StaticImageData } from 'next/image';
import TeamImg from '@/src/resources/images/team1.jpg';
import TeamImg2 from '@/src/resources/images/team2.jpg';
import TeamImg3 from '@/src/resources/images/team3.jpg';
import TeamImg4 from '@/src/resources/images/team4.jpg';
import TeamImg5 from '@/src/resources/images/team5.jpg';
import TeamImg6 from '@/src/resources/images/team6.jpg';
import TeamImgMobile from '@/src/resources/images/team1_mobile.jpg';
import TeamImg2Mobile from '@/src/resources/images/team2_mobile.jpg';
import TeamImg3Mobile from '@/src/resources/images/team3_mobile.jpg';
import TeamImg4Mobile from '@/src/resources/images/team4_mobile.png';
import TeamImg5Mobile from '@/src/resources/images/team5_mobile.jpg';
import TeamImg6Mobile from '@/src/resources/images/team6_mobile.jpg';
import TeamImgThumb from '@/src/resources/images/team1_thumb.jpg';
import TeamImg2Thumb from '@/src/resources/images/team2_thumb.jpg';
import TeamImg3Thumb from '@/src/resources/images/team3_thumb.png';
import TeamImg4Thumb from '@/src/resources/images/team4_thumb.jpg';
import TeamImg5Thumb from '@/src/resources/images/team5_thumb.jpg';
import TeamImg6Thumb from '@/src/resources/images/team6_thumb.jpg';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';

const cn = makeCn('team-slider');

interface SlideProps {
  img: string | StaticImageData;
  imgMobile: string | StaticImageData;
  name: string;
  major: string;
  since: string;
  quote: string;
}

const Slide: React.FC<SlideProps> = ({
  img,
  imgMobile,
  name,
  major,
  since,
  quote,
}) => (
  <div className={cn('slide')}>
    <div className={cn('slide-media')}>
      <Image className={cn('slide-img')} src={img} alt={name} />
      <Image className={cn('slide-img', ['mobile'])} src={imgMobile} alt={name} />
    </div>
    <div className={cn('slide-body')}>
      <p>{quote}</p>
    </div>
    <div className={cn('slide-footer')}>
      <span>{name}</span>
      <span>{major}</span>
      <span className={('hide-md')}>{since}</span>
    </div>
    <span className={cn('slide-since')}>{since}</span>
  </div>
);

export const TeamSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const isDesktop = useMediaQuery('(min-width:1024px)');

  return (
    <div className={cn()}>
      <div className={cn('title')}>
        <p>поярче - это люди, которые делают мир ярким</p>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Thumbs, EffectFade]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      >
        <SwiperSlide>
          <Slide
            img={TeamImg}
            imgMobile={TeamImgMobile}
            name={'максим поярче'}
            since={'[с 2021 года]'}
            major={'основатель студии'}
            quote={'"мы не просто рисуем дизайн, мы инженеры впечатлений, строящие мосты между вашим бизнесом и сердцами клиентов."'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={TeamImg2 }
            imgMobile={TeamImg2Mobile}
            name={'екатерина баратова'}
            since={'[с 2023 года]'}
            major={'лид-дизайнер'}
            quote={'"Дизайн - это эмоциональный язык, который позволяет нам вступать в диалог с пользователем и выражать свои чувства через форму и функцию"'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={TeamImg3}
            imgMobile={TeamImg3Mobile}
            name={'александр рожков'}
            since={'[с 2023 года]'}
            major={'ux/ui дизайнер'}
            quote={'"каждый дизайн несет в себе душу автора, который через работы освещает свои мысли, чувства и вдохновение”'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={TeamImg4}
            imgMobile={TeamImg4Mobile}
            name={'николай ельницкий'}
            since={'[с 2023 года]'}
            major={'ux-writer'}
            quote={'"что важнее: дизайн или смыслы, переданные через текст? Это неправильный вопрос. В ярком дизайне текст, усиливает визуал, и наоборот"'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={TeamImg5}
            imgMobile={TeamImg5Mobile}
            name={'евгений кислов'}
            since={'[с 2023 года]'}
            major={'графический дизайнер'}
            quote={'"что важнее: дизайн или смыслы, переданные через текст? Это неправильный вопрос. В ярком дизайне текст, усиливает визуал, и наоборот"'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={TeamImg6}
            imgMobile={TeamImg6Mobile}
            name={'алена тетёкина'}
            since={'[с 2024 года]'}
            major={'менеджер'}
            quote={'"что важнее: дизайн или смыслы, переданные через текст? Это неправильный вопрос”'}
          />
        </SwiperSlide>

      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={isDesktop ? 20 : 10}
        slidesPerView={6}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={cn('thumbs')}
      >
        <SwiperSlide className={cn('thumb')}>
          <Image className={cn('thumb-img')} src={TeamImgThumb} alt={'team'} />
        </SwiperSlide>
        <SwiperSlide className={cn('thumb')}>
          <Image className={cn('thumb-img')} src={TeamImg2Thumb} alt={'team'} />
        </SwiperSlide>
        <SwiperSlide className={cn('thumb')}>
          <Image className={cn('thumb-img')} src={TeamImg3Thumb} alt={'team'} />
        </SwiperSlide>
        <SwiperSlide className={cn('thumb')}>
          <Image className={cn('thumb-img')} src={TeamImg4Thumb} alt={'team'} />
        </SwiperSlide>
        <SwiperSlide className={cn('thumb')}>
          <Image className={cn('thumb-img')} src={TeamImg5Thumb} alt={'team'} />
        </SwiperSlide>
        <SwiperSlide className={cn('thumb')}>
          <Image className={cn('thumb-img')} src={TeamImg6Thumb} alt={'team'} />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};
