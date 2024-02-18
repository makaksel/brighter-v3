import { NextRequest, NextResponse } from 'next/server';
import { BrifFrom } from '@/src/components/BrifFrom';

const nodemailer = require('nodemailer');

const username = process.env.EMAIL_USERNAME;
const password = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: 'mail.hosting.reg.ru',
  port: 465,

  auth: {
    user: username,
    pass: password,
  },
});

export async function POST(req: NextRequest) {
  const json = req.json();
  const formData: BrifFrom = await json;

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: username,
      subject: `Новая заявка`,
      html: `
            <!DOCTYPE html>
            <html dir="ltr" lang="ru">
              <body>
                 <p><b>имя: </b> ${formData.name}</p>
                 <p><b>почта или контакт в любом мессенджере: </b> ${formData.contact}</p>
                 <p><b>название компании: </b> ${formData.company}</p>
                 <p><b>интересуют: </b> ${String(formData.services)}</p>
                 <p><b>бюджет: </b> ${formData.budget}</p>
              </body>
            </html>
            `,
    });

    return NextResponse.json({ message: 'Success: email was sent' });

  } catch (error) {
    console.log(error);
    NextResponse.json({ message: 'COULD NOT SEND MESSAGE' });
  }
}