import React from 'react';
import { cn } from './cn';


interface ExpressReview {
  text: string;
  author: string;
}

export const ExpressReview: React.FC<ExpressReview> = ({ text, author }) => <div className={cn('card')}>

  <div className={cn('card-icon-wrp')}>
    <svg className={cn('card-icon')} width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 3H7.87959L1 22.4286H10.4714L18 3Z" fill="#F2F2F2" stroke="#F2F2F2" stroke-width="0.485714" />
      <path d="M35 3H24.8796L18 22.4286H27.4714L35 3Z" fill="#F2F2F2" stroke="#F2F2F2" stroke-width="0.485714" />
    </svg>
  </div>
  <div className={cn('card-body')}>
    <p className={cn('card-text')}>{text}</p>
    <p className={cn('card-author')}>{author}</p>
  </div>

</div>;
