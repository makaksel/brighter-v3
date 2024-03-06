import { NextResponse } from 'next/server';
import { telegramBotId, telegramChatId } from '@/src/data';
import path from 'path';
import { promises as fs } from 'fs';

export async function POST(request: Request) {
  const requestData = await request.formData();
  const formData = Object.fromEntries(requestData);
  let uploadedFileLink = null;

  const file = requestData.get('file');
  if (file) {
    //@ts-ignore
    const buffer = Buffer.from(await file.arrayBuffer());
    //@ts-ignore
    const filename = file.name.replaceAll(' ', '_');
    console.log(filename);

    await fs.writeFile(
      path.join(process.cwd(), '/public/assets/' + filename),
      buffer,
    );

    uploadedFileLink = `https://www.poyarche.ru/${filename}`;
  }


  const message = `*⚠️ Новое обращение*

👤имя: ${formData.name};
📞почта или контакт в любом мессенджере: ${formData.contact};
${formData.company ? `📬название компании: ${formData.company};` : ''}

${formData.services ? `интересует: ${formData.services};` : ''}
${formData.budget ? `бюджет: ${formData.budget};` : ''}
${uploadedFileLink ? `Файл: ${uploadedFileLink};` : ''}
`;

  const response = await fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      chat_id: telegramChatId,
      text: message,
      parse_mode: 'Markdown',
    }),
  });


  const responseData = await response.json();

  return NextResponse.json(responseData);
}
