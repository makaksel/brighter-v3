import React from 'react';
import { BrifFrom } from '@/src/components/BrifFrom';

interface EmailTemplateProps extends BrifFrom{
  // services: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, contact, company, services, budget }) => <div>
  <p>
    <span><b>[ваше имя]: </b></span>
    <span>{name}</span>
  </p>
  <p>
    <span><b>[почта или контакт в любом мессенджере]: </b></span>
    <span>{contact}</span>
  </p>
  <p>
    <span><b>[название компании]: </b></span>
    <span>{company}</span>
  </p>
  <p>
    <span><b>[вас интересуют]: </b></span>
    <span>{String(services)}</span>
  </p>
  <p>
    <span><b>[бюджет]: </b></span>
    <span>{budget}</span>
  </p>
</div>;
