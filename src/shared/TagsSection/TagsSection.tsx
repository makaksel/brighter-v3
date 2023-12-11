'use client';

import React, { useRef } from 'react';
import { makeCn } from '@/src/utils';
import './TagsSection.scss';

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

const cn = makeCn('tags-section');

interface ParalaxLineProps {
  children: React.ReactNode | React.ReactNode[];
  speed?: number;
}

const ParalaxLine: React.FC<ParalaxLineProps> = ({ children, speed = 3 }) => {
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
  const x = useTransform(baseX, (v) => `${wrap(0, -150, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * speed * (delta / 1000);

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
    <motion.div className={cn('body')} style={{ x }}>
      {children}
    </motion.div>
  );
};


export const TagsSection: React.FC = () => {

  const slides = ['структура', 'конверсия', 'Веб', 'Маркетинг', 'Дизайн', 'тренды', 'Анимации'];

  return (
    <div className={cn('paralax')}>
      <ParalaxLine speed={3}>
        {[...slides, ...slides].map((slide, index) => (<div key={index} className={cn('card')}>
          {slide}
        </div>))}
      </ParalaxLine>
      <ParalaxLine speed={-5}>
        {[...slides, ...slides].reverse().map((slide, index) => (<div key={index} className={cn('card')}>
          {slide}
        </div>))}
      </ParalaxLine>
    </div>
  );
};
