import { NextResponse } from 'next/server';
import { telegramBotId, telegramChatId } from '@/src/data';

export async function POST(request: Request) {
  const requestData = await request.formData();
  const formData = Object.fromEntries(requestData);
/*  let uploadedFileLink = null;

  const file = requestData.get('file');
  if (file) {
    //@ts-ignore
    const buffer = Buffer.from(await file.arrayBuffer());
    //@ts-ignore
    const filename = file.name.replaceAll(' ', '_');

    await fs.writeFile(
      path.join(process.cwd(), '/public/assets/' + filename),
      buffer,
    );

    uploadedFileLink = `https://www.poyarche.ru/${filename}`;
  }*/

  // ${uploadedFileLink ? `Файл: ${uploadedFileLink};` : ''}

  const message = `*⚠️ Новое обращение*

👤 имя: ${formData.name};
${formData?.contact ? `📞 почта или контакт в любом мессенджере: ${formData.contact};` : ''}
${formData?.phone ? `📞 телефон: ${formData.phone};` : ''}
${formData?.telegram ? `📬 telegram: ${formData.telegram};` : ''}
${formData?.company ? `📬н азвание компании: ${formData.company};` : ''}

${formData?.services ? `интересует: ${formData.services};` : ''}
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
