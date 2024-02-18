import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/src/components/EmailTemplate';
import { BrifFrom } from '@/src/components/BrifFrom';

const resend = new Resend(process.env.RESEND_API_KEY);
resend.domains.create({ name: 'poyarche.ru' });

export async function POST(req: NextRequest) {
  const json = req.json();
  const formData: BrifFrom = await json;

  try {
    const data = await resend.emails.send({
      from: 'Поярче <hello@poyarche.ru>',
      to: ['hello@poyarche.ru'],
      subject: 'Новая заявка',
      text: '',
      react: EmailTemplate(formData),
      // attachments: attachments.map((file: any) => ({
      //   filename: file.filename,
      //   content: file.content,
      // })),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}