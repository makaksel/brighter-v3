'use client';

import React, { useRef } from 'react';
import { makeCn } from '@/src/utils';
import './Partners.scss';
import Icon1 from '@/src/resources/icons/Ankil.png';
import Icon2 from '@/src/resources/icons/Bright_Minds.png';
import Icon3 from '@/src/resources/icons/Economic_data.png';
import Icon4 from '@/src/resources/icons/Economics_since.png';
import Icon5 from '@/src/resources/icons/Marta.png';
import Icon6 from '@/src/resources/icons/Millenium.png';

import Image from 'next/image';

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';


const cn = makeCn('partners');


export const Partners: React.FC = () => {
  const baseX = useMotionValue(-500);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(0, -290, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 3 * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={cn('paralax')}>
      <motion.div className={cn('body')} style={{ x }}>

        <div className={cn('card')}>
          <Image src={Icon1} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon2} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon3} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon4} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon5} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon6} alt={'Иконка'} className={cn('card-img')} />
        </div>

        <div className={cn('card')}>
          <Image src={Icon1} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon2} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon3} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon4} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon5} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon6} alt={'Иконка'} className={cn('card-img')} />
        </div>

        <div className={cn('card')}>
          <Image src={Icon1} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon2} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon3} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon4} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon5} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon6} alt={'Иконка'} className={cn('card-img')} />
        </div>

        <div className={cn('card')}>
          <Image src={Icon1} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon2} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon3} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon4} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon5} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon6} alt={'Иконка'} className={cn('card-img')} />
        </div>

        <div className={cn('card')}>
          <Image src={Icon1} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon2} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon3} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon4} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon5} alt={'Иконка'} className={cn('card-img')} />
        </div>
        <div className={cn('card')}>
          <Image src={Icon6} alt={'Иконка'} className={cn('card-img')} />
        </div>
      </motion.div>
    </div>);

};
