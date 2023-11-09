'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { makeCn } from '@/src/utils';
import './ReviewsSlider.scss';
import Link from 'next/link';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import review1 from '@/src/resources/images/review1.jpg';
import review2 from '@/src/resources/images/review2.jpg';

const cn = makeCn('reviews-slider');

interface CardProps {
  name: string;
  img: StaticImageData;
  badges: string[];
  rating: number;
  text: string;
}

const Card: React.FC<CardProps> = ({
  name,
  img,
  badges,
  rating,
  text,
}) => {
  const isActive = useCallback((pos: number) => pos <= rating ? '#D51A25' : '#4D4D4D', [rating]);

  return (
    <div className={cn('card')}>
      <div className={cn('card-header')}>
        <div className={cn('card-person')}>
          <div className={cn('card-media')}>
            <Image className={cn('card-img')} src={img} alt={name} />
          </div>
          <div className={cn('card-person-wrp')}>
            <p className={cn('card-name')}>{name}</p>
            <div className={cn('card-badges')}>
              {badges.map((badge) => <span className={cn('card-badge')}>{badge}</span>)}
            </div>

          </div>
        </div>
        <div className={cn('card-rating')}>
          <svg xmlns='http://www.w3.org/2000/svg' className={cn('card-rating-icon')} width='120' height='24'
               viewBox='0 0 120 24' fill='none'>
            <path
              d='M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.55011 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z'
              fill={isActive(1)} />
            <path
              d='M35.0489 2.92705C35.3483 2.00574 36.6517 2.00574 36.9511 2.92705L38.4697 7.60081C38.6035 8.01284 38.9875 8.2918 39.4207 8.2918H44.335C45.3037 8.2918 45.7065 9.53141 44.9228 10.1008L40.947 12.9894C40.5966 13.244 40.4499 13.6954 40.5838 14.1074L42.1024 18.7812C42.4017 19.7025 41.3472 20.4686 40.5635 19.8992L36.5878 17.0106C36.2373 16.756 35.7627 16.756 35.4122 17.0106L31.4365 19.8992C30.6528 20.4686 29.5983 19.7025 29.8976 18.7812L31.4162 14.1074C31.5501 13.6954 31.4034 13.244 31.053 12.9894L27.0772 10.1008C26.2935 9.53141 26.6963 8.2918 27.665 8.2918H32.5793C33.0125 8.2918 33.3965 8.01284 33.5303 7.60081L35.0489 2.92705Z'
              fill={isActive(2)} />
            <path
              d='M59.0489 2.92705C59.3483 2.00574 60.6517 2.00574 60.9511 2.92705L62.4697 7.60081C62.6035 8.01284 62.9875 8.2918 63.4207 8.2918H68.335C69.3037 8.2918 69.7065 9.53141 68.9228 10.1008L64.947 12.9894C64.5966 13.244 64.4499 13.6954 64.5838 14.1074L66.1024 18.7812C66.4017 19.7025 65.3472 20.4686 64.5635 19.8992L60.5878 17.0106C60.2373 16.756 59.7627 16.756 59.4122 17.0106L55.4365 19.8992C54.6528 20.4686 53.5983 19.7025 53.8976 18.7812L55.4162 14.1074C55.5501 13.6954 55.4034 13.244 55.053 12.9894L51.0772 10.1008C50.2935 9.53141 50.6963 8.2918 51.665 8.2918H56.5793C57.0125 8.2918 57.3965 8.01284 57.5303 7.60081L59.0489 2.92705Z'
              fill={isActive(3)} />
            <path
              d='M83.0489 2.92705C83.3483 2.00574 84.6517 2.00574 84.9511 2.92705L86.4697 7.60081C86.6035 8.01284 86.9875 8.2918 87.4207 8.2918H92.335C93.3037 8.2918 93.7065 9.53141 92.9228 10.1008L88.947 12.9894C88.5966 13.244 88.4499 13.6954 88.5838 14.1074L90.1024 18.7812C90.4017 19.7025 89.3472 20.4686 88.5635 19.8992L84.5878 17.0106C84.2373 16.756 83.7627 16.756 83.4122 17.0106L79.4365 19.8992C78.6528 20.4686 77.5983 19.7025 77.8976 18.7812L79.4162 14.1074C79.5501 13.6954 79.4034 13.244 79.053 12.9894L75.0772 10.1008C74.2935 9.53141 74.6963 8.2918 75.665 8.2918H80.5793C81.0125 8.2918 81.3965 8.01284 81.5303 7.60081L83.0489 2.92705Z'
              fill={isActive(4)} />
            <path
              d='M107.049 2.92705C107.348 2.00574 108.652 2.00574 108.951 2.92705L110.47 7.60081C110.604 8.01284 110.987 8.2918 111.421 8.2918H116.335C117.304 8.2918 117.706 9.53141 116.923 10.1008L112.947 12.9894C112.597 13.244 112.45 13.6954 112.584 14.1074L114.102 18.7812C114.402 19.7025 113.347 20.4686 112.564 19.8992L108.588 17.0106C108.237 16.756 107.763 16.756 107.412 17.0106L103.436 19.8992C102.653 20.4686 101.598 19.7025 101.898 18.7812L103.416 14.1074C103.55 13.6954 103.403 13.244 103.053 12.9894L99.0772 10.1008C98.2935 9.53141 98.6963 8.2918 99.665 8.2918H104.579C105.013 8.2918 105.396 8.01284 105.53 7.60081L107.049 2.92705Z'
              fill={isActive(5)} />
          </svg>
        </div>
      </div>
      <p className={cn('card-text')}>
        {text}
      </p>
    </div>
  );
};

export const ReviewsSlider: React.FC = () => {
  const slides: CardProps[] = [
    {
      name: 'Максим',
      img: review1,
      badges: ['Бизнес-центр', 'identity'],
      rating: 4,
      text: 'Мы бизнес центр в Поволжье. У нас был ограниченный приод времени, за который мы хотели получить качественный дизайн для бизнеса. Обратились в Поярче - сделали все на отлично.',
    },
    {
      name: 'Дмитрий',
      img: review2,
      badges: ['маркетплейсы'],
      rating: 4,
      text: 'Моя компания продает товары на маркетплейсах, вместо штатных дизайнеров решили попробоовать дизайн подписку и были удивлены качеством и скоростью работы. Паралельно удалось сократить расходы.',
    },
    {
      name: 'Максим',
      img: review1,
      badges: ['кафе'],
      rating: 4,
      text: 'Мы маленькое кафе в центре Москве, давно думали о том, чтобы заказать дизайн. Увидели студию Поярче и заказали у них экспресс-дизайн. Результат очень понравился.',
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);


  return (<div className={cn()}>
    <div className={cn('viewport')} ref={emblaRef}>
      <div className={cn('container')}>
        {[...slides, ...slides].map((slide, index) => (
          <div className={cn('slide')} key={index}>
            <Card {...slide} />
          </div>
        ))}
      </div>
    </div>
    <div className={cn('actions')}>

      <button className={cn('btn')} onClick={scrollPrev}>
        <svg xmlns='http://www.w3.org/2000/svg' className={cn('btn-icon')} width='27' height='24' viewBox='0 0 27 24' fill='none'>
          <path d='M27 12L0.999999 12' stroke='white' />
          <path d='M12.0742 23.0703L1.00015 11.9962L12.0742 0.922165' stroke='white' />
        </svg>
      </button>

      <Link href={TELEGRAM_BOT_LINK} className={cn('contact-btn')}>Обсудить проект</Link>

      <button className={cn('btn')} onClick={scrollNext}>
        <svg xmlns='http://www.w3.org/2000/svg' className={cn('btn-icon')} width='27' height='24' viewBox='0 0 27 24' fill='none'>
          <path d='M0 12H26' stroke='white' />
          <path d='M14.9258 0.929688L25.9999 12.0038L14.9258 23.0778' stroke='white' />
        </svg>
      </button>

    </div>

  </div>);
};
