import React from 'react';
import {makeCn} from "@/src/utils";
import "./Marta.scss";
import Image from "next/image";
import MartaImg1 from "@/src/resources/images/marta1.png";
import MartaImg2 from "@/src/resources/images/marta2.png";
import MartaImg3 from "@/src/resources/images/marta3.png";
import MartaImg4 from "@/src/resources/images/marta4.png";
import MartaImg5 from "@/src/resources/images/marta5.png";
import MartaImg6 from "@/src/resources/images/marta6.png";

const cn = makeCn('marta');

export const Marta: React.FC = () => (<div className={cn('')}>
    <div className={cn('wrp')}>
        <Image src={MartaImg1} alt={'img'} className={cn(`img`, [`img1`])}/>
        <Image src={MartaImg2} alt={'img'} className={cn(`img`, [`img2`])}/>
        <Image src={MartaImg3} alt={'img'} className={cn(`img`, [`img3`])}/>
        <Image src={MartaImg4} alt={'img'} className={cn(`img`, [`img4`])}/>
        <Image src={MartaImg5} alt={'img'} className={cn(`img`, [`img5`])}/>
        <Image src={MartaImg6} alt={'img'} className={cn(`img`, [`img6`])}/>
    </div>

    <div className={cn('bg')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('bg-icon')}  width="586" height="439" viewBox="0 0 586 439" fill="none">
            <path d="M118.573 219.958L119.611 219.5L118.573 219.042L0.780566 167.143L87.4064 52.7716L205.485 104.677L206.186 104.985L206.186 104.22L206.253 0.5L379.747 0.5L379.814 104.22L379.814 104.985L380.515 104.677L498.593 52.7716L585.219 167.143L467.426 219.042L466.388 219.5L467.426 219.958L585.219 271.857L498.593 386.229L380.515 334.323L379.814 334.015L379.814 334.78L379.747 438.5H206.253L206.186 334.78L206.186 334.015L205.485 334.323L87.4064 386.229L0.780566 271.857L118.573 219.958Z" stroke="#444444"/>
        </svg>
    </div>
</div>);
