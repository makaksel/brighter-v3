import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/src/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
resend.domains.create({ name: 'poyarche.ru' });

export async function POST(req: NextRequest) {
  const json = req.json();
  const { username, attachments } = await json;

  try {
    const data = await resend.emails.send({
      from: 'Поярче <hello@poyarche.ru>',
      to: ['makarovoptionmail@gmail.com'],
      subject: 'Новая заявка',
      text: 'Hello world',
      react: EmailTemplate({ userName: 'asdasdas' }),
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