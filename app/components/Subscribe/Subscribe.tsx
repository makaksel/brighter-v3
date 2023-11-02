import React from 'react';
import { makeCn } from "@/src/utils";
import "./Subscribe.scss";
import Image from "next/image";

const cn = makeCn('subscribe');


export const Subscribe: React.FC = () => <section className={cn()}>
    <div className={cn("wrp")}>
      <p className={cn("title")}>Оформите подписку и получите лучший сервис</p>
      <div className={cn('body')}>
        <div className={cn('card')}>
          <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="61" height="60" viewBox="0 0 61 60"
               fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M41.335 6.87549H19.6625C12.11 6.87549 7.375 12.223 7.375 19.7905V40.2105C7.375 47.778 12.0875 53.1255 19.6625 53.1255H41.3325C48.91 53.1255 53.625 47.778 53.625 40.2105V19.7905C53.625 12.223 48.91 6.87549 41.335 6.87549Z"
                  stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.5977 30.0004L27.5327 35.9329L39.3977 24.0679" stroke="#FF4D00" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className={cn('card-text')}>Бесконечное количество запросов</span>
        </div>

        <div className={cn('card')}>
          <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="61" height="60" viewBox="0 0 61 60"
               fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M41.335 6.87549H19.6625C12.11 6.87549 7.375 12.223 7.375 19.7905V40.2105C7.375 47.778 12.0875 53.1255 19.6625 53.1255H41.3325C48.91 53.1255 53.625 47.778 53.625 40.2105V19.7905C53.625 12.223 48.91 6.87549 41.335 6.87549Z"
                  stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.5977 30.0004L27.5327 35.9329L39.3977 24.0679" stroke="#FF4D00" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className={cn('card-text')}>Неограниченное количество ваших брендов</span>
        </div>

        <div className={cn('card')}>
          <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="61" height="60" viewBox="0 0 61 60"
               fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M41.335 6.87549H19.6625C12.11 6.87549 7.375 12.223 7.375 19.7905V40.2105C7.375 47.778 12.0875 53.1255 19.6625 53.1255H41.3325C48.91 53.1255 53.625 47.778 53.625 40.2105V19.7905C53.625 12.223 48.91 6.87549 41.335 6.87549Z"
                  stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.5977 30.0004L27.5327 35.9329L39.3977 24.0679" stroke="#FF4D00" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className={cn('card-text')}>Возможность приостановить или отменить в любой момент</span>
        </div>

        <div className={cn('card')}>
          <svg xmlns="http://www.w3.org/2000/svg" className={cn('card-icon')} width="61" height="60" viewBox="0 0 61 60"
               fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M41.335 6.87549H19.6625C12.11 6.87549 7.375 12.223 7.375 19.7905V40.2105C7.375 47.778 12.0875 53.1255 19.6625 53.1255H41.3325C48.91 53.1255 53.625 47.778 53.625 40.2105V19.7905C53.625 12.223 48.91 6.87549 41.335 6.87549Z"
                  stroke="#FF4D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.5977 30.0004L27.5327 35.9329L39.3977 24.0679" stroke="#FF4D00" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className={cn('card-text')}>Возможность приостановить или отменить в любой момент</span>
        </div>

      </div>
    </div>
    <button className={cn('button')}>Узнать цену</button>
  </section>
;
