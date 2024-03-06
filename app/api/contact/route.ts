import { NextResponse } from 'next/server';
import { telegramBotId, telegramChatId } from '@/src/data';


export async function POST(request: Request) {
  const requestData = await request.formData();
  const formData = Object.fromEntries(requestData);
/*
  const formDataForUpload = new FormData();

  const fileData: File = formData.file
  console.log(fileData);
  if (fileData) {

    const bytes = await fileData.arrayBuffer();
    const buffer = Buffer.from(bytes)

    const file = fs.readFileSync(requestData.get('file') as string);
    //@ts-ignore
    const upload = await contentfulClient.upload.create({
        file: buffer,
      }
    );
    console.log(upload);
  }
*/


/*
  console.log('requestData.get(\'file\')', requestData.get('file'));

  if (requestData.has('file')) {
    formDataForUpload.append('document', requestData.get('file'));
  }
  formDataForUpload.append('chat_id', `${telegramChatId}`);

  console.log('formDataForUpload', formDataForUpload);
  const responseUpload = await fetch(`https://api.telegram.org/bot${telegramBotId}/sendDocument`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: formDataForUpload,
  }).then((res) => res.json());

  console.log('responseUpload', responseUpload);
*/


  // ${uploadFile ? `Файл: ${uploadFile};` : ''}

  const message = `*⚠️ Новое обращение*

👤имя: ${formData.name};
📞почта или контакт в любом мессенджере: ${formData.contact};
${formData.company ? `📬название компании: ${formData.company};` : ''}
${formData.services ? `интересуют: ${formData.services};` : ''}
${formData.budget ? `бюджет: ${formData.budget};` : ''}

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
