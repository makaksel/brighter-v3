import React from 'react';
import {makeCn} from "@/src/utils";
import "./Bright.scss";
import Image from "next/image";
import BrightImg1 from "@/src/resources/images/bright1.png";
import BrightImg2 from "@/src/resources/images/bright2.png";
import BrightImg3 from "@/src/resources/images/bright3.png";
import BrightImg4 from "@/src/resources/images/bright4.png";

const cn = makeCn('bright');

export const Bright: React.FC = () => (<div className={cn('')}>
    <div className={cn('wrp')}>
        <Image src={BrightImg1} alt={'img'} className={cn(`img`, [`img1`])}/>
        <Image src={BrightImg2} alt={'img'} className={cn(`img`, [`img2`])}/>
        <Image src={BrightImg3} alt={'img'} className={cn(`img`, [`img3`])}/>
        <Image src={BrightImg4} alt={'img'} className={cn(`img`, [`img4`])}/>
    </div>

    <div className={cn('bg')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('bg-icon')}  width="672" height="400" viewBox="0 0 672 400" fill="none">
            <path d="M249.4 399C97.571 380.171 -92.2181 274.609 52.8341 238.955C180.805 207.5 369.148 296.549 402.586 363.004C281.484 302.272 27.8733 162.503 157.219 119.891C283.292 78.3565 455.456 243.201 548.994 324.792C318.99 255.2 66.391 54.3604 249.4 8.94973C470.395 -45.8865 605.931 194.282 671 381.833" stroke="#444444"/>
        </svg>
    </div>
</div>);
