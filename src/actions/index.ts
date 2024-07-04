import { telegramBotId, telegramChatId } from "@/src/data/const";
import { redirect } from "next/navigation";
import { routerLinks } from "@/src/data/navigation";

export async function createTelegrammNotify(formDataReq: FormData) {
  'use server'

  const formData = Object.fromEntries(formDataReq);
  const message = `*⚠️ Новое обращение*

👤 имя: ${formData.name};
${formData?.email ? `📞 почта: ${formData.email};` : ''}
${formData?.phone ? `📞 телефон: ${formData.phone};` : ''}
${formData?.telegram ? `📬 telegram: ${formData.telegram};` : ''}

${formData?.comment ? `комментарий: ${formData.comment};` : ''}
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


  await response.json();

  redirect(routerLinks.success);
  
}
