import React from 'react';
import {makeCn} from "@/src/utils";
import "./BigData.scss";
import Image from "next/image";
import BigDataImg1 from "@/src/resources/images/bigdata1.png";
import BigDataImg2 from "@/src/resources/images/bigdata2.png";
import BigDataImg3 from "@/src/resources/images/bigdata3.png";

const cn = makeCn('bigData');

export const BigData: React.FC = () => (<div className={cn('')}>
    <div className={cn('wrp')}>
        <Image src={BigDataImg1} alt={'img'} className={cn(`img`, [`img1`])}/>
        <Image src={BigDataImg2} alt={'img'} className={cn(`img`, [`img2`])}/>
        <Image src={BigDataImg3} alt={'img'} className={cn(`img`, [`img3`])}/>
    </div>

    <div className={cn('bg')}>

    </div>
</div>);
