import React from 'react';
import { makeCn } from "@/src/utils";
import "./Services.scss";
import Image from "next/image";

const cn = makeCn('services');

export const Services: React.FC = () => <section className={cn()}>
    <div className={cn("header")}>
      <p className={cn("text")}>Вы сможете получить услуги дизайна из любой сферы</p>
      <p className={cn("title")}>Что вы сможете заказать у нас?</p>
    </div>
    <div className={cn('body')}>
      <div className={cn('card')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="60" height="60" viewBox="0 0 60 60"
             fill="none">
          <path
            d="M5 34H4V36H5V34ZM55 36H56V34H55V36ZM22.5 54C21.9477 54 21.5 54.4477 21.5 55C21.5 55.5523 21.9477 56 22.5 56V54ZM37.5 56C38.0523 56 38.5 55.5523 38.5 55C38.5 54.4477 38.0523 54 37.5 54V56ZM31 45C31 44.4477 30.5523 44 30 44C29.4477 44 29 44.4477 29 45H31ZM12.5 6H47.5V4H12.5V6ZM54 12.5V37.5H56V12.5H54ZM47.5 44H12.5V46H47.5V44ZM6 37.5V12.5H4V37.5H6ZM12.5 44C8.91015 44 6 41.0899 6 37.5H4C4 42.1944 7.80558 46 12.5 46V44ZM54 37.5C54 41.0899 51.0899 44 47.5 44V46C52.1944 46 56 42.1944 56 37.5H54ZM47.5 6C51.0899 6 54 8.91015 54 12.5H56C56 7.80558 52.1944 4 47.5 4V6ZM12.5 4C7.80558 4 4 7.80558 4 12.5H6C6 8.91015 8.91015 6 12.5 6V4ZM5 36H55V34H5V36ZM22.5 56H30V54H22.5V56ZM30 56H37.5V54H30V56ZM31 55V45H29V55H31Z"
            fill="#FF4D00"/>
        </svg>
        <span className={cn('card-text')}>Веб—сайты</span>
      </div>

      <div className={cn('card')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="60" height="60" viewBox="0 0 60 60"
             fill="none">
          <path
            d="M5 20H55M5 15V45C5 50.5228 9.47715 55 15 55H45C50.5228 55 55 50.5228 55 45V15C55 9.47715 50.5228 5 45 5H15C9.47715 5 5 9.47715 5 15Z"
            stroke="#FF4D00" stroke-width="2" stroke-linecap="round"/>
          <ellipse cx="45" cy="12.5" rx="2.5" ry="2.5" fill="#FF4D00"/>
          <ellipse cx="35" cy="12.5" rx="2.5" ry="2.5" fill="#FF4D00"/>
        </svg>
        <span className={cn('card-text')}>Приложения</span>
      </div>

      <div className={cn('card')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="60" height="60" viewBox="0 0 60 60"
             fill="none">
          <path
            d="M35.3158 7.5H42.379C43.8974 7.5 45.3433 8.1575 46.352 9.30668L53.6573 17.6287C55.3526 19.56 55.4535 22.4387 53.8976 24.4869L34.2134 50.3991C32.0855 53.2003 27.9145 53.2003 25.7866 50.3991L6.10238 24.4869C4.54651 22.4387 4.6474 19.56 6.34273 17.6287L13.648 9.30668C14.6567 8.1575 16.1026 7.5 17.621 7.5H25.2748M35.3158 7.5L40.6316 20.9571M35.3158 7.5H25.2748M40.6316 20.9571H53.9211M40.6316 20.9571L30 51.9085L19.3684 20.9571M40.6316 20.9571H19.3684M25.2748 7.5L19.3684 20.9571M6.07891 20.9571H19.3684"
            stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span className={cn('card-text')}>Логотипы</span>
      </div>

      <div className={cn('card')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="60" height="60" viewBox="0 0 60 60"
             fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M54.8561 18.9392V40.9342C54.8561 49.0834 49.7561 54.8311 41.6068 54.8311H18.2653C10.116 54.8311 5.04297 49.0834 5.04297 40.9342V18.9392C5.04297 10.7899 10.143 5.04492 18.2653 5.04492H41.6068C49.7561 5.04492 54.8561 10.7899 54.8561 18.9392Z"
                stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path
            d="M11.875 41.9615L15.9982 37.6089C17.4311 36.0897 19.8192 36.0169 21.3411 37.447C21.387 37.4929 23.8696 40.0159 23.8696 40.0159C25.3672 41.5406 27.8147 41.5648 29.3393 40.0699C29.4391 39.9728 35.6374 32.4549 35.6374 32.4549C37.2349 30.5147 40.1034 30.2368 42.0462 31.837C42.1758 31.9449 48.0314 37.9543 48.0314 37.9543"
            stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M25.4504 22.2687C25.4504 24.8835 23.3321 27.0018 20.7173 27.0018C18.1025 27.0018 15.9843 24.8835 15.9843 22.2687C15.9843 19.6539 18.1025 17.5356 20.7173 17.5356C23.3321 17.5383 25.4504 19.6539 25.4504 22.2687Z"
                stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span className={cn('card-text')}>Карточки для маркетплейсов</span>
      </div>

      <div className={cn('card')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="60" height="60" viewBox="0 0 60 60"
             fill="none">
          <path
            d="M20 35L22.7056 30.4906C24.3019 27.8301 28.0618 27.5772 30 30C31.9382 32.4228 35.6981 32.1699 37.2944 29.5094L40 25M30 45V55M10 15H50C52.7614 15 55 12.7614 55 10C55 7.23858 52.7614 5 50 5H10C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15ZM7.5 15H52.5V40C52.5 42.7614 50.2614 45 47.5 45H12.5C9.73858 45 7.5 42.7614 7.5 40V15Z"
            stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span className={cn('card-text')}>Рекламные материалы</span>
      </div>

      <div className={cn('card')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="60" height="60" viewBox="0 0 60 60"
             fill="none">
          <path
            d="M55 30V45C55 50.5228 50.5228 55 45 55H15C9.47715 55 5 50.5228 5 45V15C5 9.47715 9.47715 5 15 5H30M39.2159 10.0569C39.2159 10.0569 39.2159 13.6326 42.7916 17.2084C46.3674 20.7841 49.9431 20.7841 49.9431 20.7841M22.8867 39.9739L30.3957 38.9012C31.4789 38.7465 32.4827 38.2446 33.2563 37.4709L53.5189 17.2083C55.4937 15.2335 55.4937 12.0317 53.5189 10.0569L49.9431 6.48112C47.9683 4.50629 44.7665 4.50629 42.7917 6.48112L22.5291 26.7437C21.7554 27.5173 21.2535 28.5211 21.0988 29.6043L20.0261 37.1133C19.7877 38.782 21.218 40.2123 22.8867 39.9739Z"
            stroke="#FF4D00" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span className={cn('card-text')}>Иллюстрации</span>
      </div>

      <div className={cn('card')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="60" height="60" viewBox="0 0 60 60"
             fill="none">
          <path
            d="M21.5779 26.086C20.1414 23.2185 17.1756 21.25 13.75 21.25C8.91751 21.25 5 25.1675 5 30C5 34.8325 8.91751 38.75 13.75 38.75C17.1756 38.75 20.1414 36.7815 21.5779 33.914M21.5779 26.086C22.168 27.2637 22.5 28.5931 22.5 30C22.5 31.4069 22.168 32.7363 21.5779 33.914M21.5779 26.086L38.4221 17.664M21.5779 33.914L38.4221 42.336M38.4221 17.664C39.8586 20.5315 42.8244 22.5 46.25 22.5C51.0825 22.5 55 18.5825 55 13.75C55 8.91751 51.0825 5 46.25 5C41.4175 5 37.5 8.91751 37.5 13.75C37.5 15.1569 37.832 16.4863 38.4221 17.664ZM38.4221 42.336C37.832 43.5137 37.5 44.8431 37.5 46.25C37.5 51.0825 41.4175 55 46.25 55C51.0825 55 55 51.0825 55 46.25C55 41.4175 51.0825 37.5 46.25 37.5C42.8244 37.5 39.8586 39.4685 38.4221 42.336Z"
            stroke="#FF4D00" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span className={cn('card-text')}>Инфографика </span>
      </div>

      <div className={cn('card')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="60" height="60" viewBox="0 0 60 60"
             fill="none">
          <path
            d="M52.5 44.9999L32.0307 54.0974C30.7379 54.672 29.2621 54.672 27.9693 54.0974L7.5 44.9999M52.5 32.4999L32.0307 41.5974C30.7379 42.172 29.2621 42.172 27.9693 41.5974L7.5 32.4999M9.47214 19.736L27.7639 28.8819C29.1716 29.5857 30.8284 29.5857 32.2361 28.8819L50.5279 19.736C52.3705 18.8147 52.3705 16.1852 50.5279 15.2638L32.2361 6.11795C30.8284 5.41413 29.1716 5.41413 27.7639 6.11795L9.47214 15.2638C7.62952 16.1852 7.62951 18.8147 9.47214 19.736Z"
            stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span className={cn('card-text')}>Презентации</span>
      </div>

      <div className={cn('card')}>
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="60" height="60" viewBox="0 0 60 60"
             fill="none">
          <path
            d="M39.5812 20.4366L25.2726 34.898L8.99859 24.7192C6.66688 23.2604 7.15191 19.7186 9.7893 18.9473L48.4281 7.63192C50.8431 6.92407 53.0814 9.18208 52.3639 11.605L40.9327 50.2169C40.1496 52.858 36.628 53.3299 35.183 50.9881L25.265 34.9005"
            stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span className={cn('card-text')}>Оформление социальных сетей</span>
      </div>
    </div>
  </section>
;
