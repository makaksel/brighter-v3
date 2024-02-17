import React from 'react';

interface EmailTemplateProps {
  userName: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ userName }) => <div>
  {userName}
  {userName}
  {userName}
</div>;
