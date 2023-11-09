import React from 'react';
import { makeCn } from '@/src/utils';
import './Waves.scss';


const cn = makeCn('waves');
export const Waves: React.FC = () => {
  return (<div className={cn()}>
    <div className={cn('circles')}>
      <span className={cn('circles-line', {number: 'one'})}></span>
      <span className={cn('circles-line', {number: 'two'})}></span>
      <span className={cn('circles-line', {number: 'three'})}></span>
    </div>

    <div className={cn('wrp')}>
      <div className={cn('row')}>
        <p className={cn('text')}>Оценку сайта по моим критериям</p>
      </div>

      <div className={cn('row', [cn('body')])}>
        <p className={cn('text')}>Список рекомендаций и лучших практик</p>

        <div className={cn('main-circle')}>
          <svg xmlns="http://www.w3.org/2000/svg" className={cn('main-circle-icon')} width="152" height="110" viewBox="0 0 152 110" fill="none">
            <path d="M152 66H108.571V88H130.286V110H86.8571V88H65.1429V110H21.7143V88H43.4286V66H0V44H43.4286V22H21.7143V0H65.1429V22H86.8571V0H130.286V22H108.571V44H152V66Z" fill="white"/>
          </svg>
        </div>

        <p className={cn('text')}>Онлайн-консультация и ответы на все вопросы</p>
      </div>

      <div className={cn('row')}>
        <p className={cn('text')}>Точки роста вашей компании в интернете</p>
      </div>
    </div>

  </div>);
};
