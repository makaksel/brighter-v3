'use client'

import React, {useRef} from 'react';
import {makeCn} from "@/src/utils";
import "./Partners.scss";
import Image from "next/image";
/* @ts-ignore */
import Ankil from '@/src/resources/icons/partners/ankil.svg?url';
/* @ts-ignore */
import BrightMight from '@/src/resources/icons/partners/brightMight.svg?url';
/* @ts-ignore */
import EData from '@/src/resources/icons/partners/eData.svg?url';
/* @ts-ignore */
import ESince from '@/src/resources/icons/partners/eSince.svg?url';
/* @ts-ignore */
import Marta from '@/src/resources/icons/partners/marta.svg?url';
/* @ts-ignore */
import Millenium from '@/src/resources/icons/partners/millenium.svg?url';
/* @ts-ignore */
import Uptitle from '@/src/resources/icons/partners/uptitle.svg?url';
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap
} from "framer-motion";


const cn = makeCn('partners');

const images = [Ankil, BrightMight, EData, ESince, Marta, Millenium, Uptitle];

export const Partners: React.FC = () => {
    const baseX = useMotionValue(-500);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(0, -150, v)}%`);

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
        <>
            <section className={cn()}>
                <div className={cn("header")}>
                    <p className={cn("text")}>Более 10 крупных компаний доверяют нам свои задачи и проекты</p>
                    <p className={cn("title")}>Компании, которые нам доверяют</p>
                </div>

            </section>

            <div className={cn('paralax')}>
                <motion.div className={cn('body')} style={{x}}>
                    {images.map((img) => (<div key={img} className={cn('card')}>
                        <Image src={img} alt={'Иконка'} className={cn('card-img')}/>
                    </div>))}
                    {images.map((img, index) => (<div key={img} className={cn('card')}>
                        <Image src={img} alt={'Иконка'} className={cn('card-img')}/>
                    </div>))}
                </motion.div>
            </div>
        </>)

}
