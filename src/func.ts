import { toast } from 'react-hot-toast';
import ky from 'ky';

export const handleSubmit = async (event: any) => {
  event.preventDefault();

  if ((event.target[0].value && event.target[1].value)) {
    await ky
      .post(
        `https://api.telegram.org/bot${
          process.env.NEXT_PUBLIC_BOT_TOKEN
        }/sendMessage?chat_id=${
          process.env.NEXT_PUBLIC_CHAT_ID
        }&text=${encodeURIComponent(`
<b>Ism:</b> ${event.target[0].value}
<b>Telefon raqami:</b> ${event.target[1].value}
        `)}&parse_mode=html`
      )
      .then(() => {
        event.target.reset();
        toast.success(
          'Sizning malumotlaringiz yuborildi, tez orada aloqaga chiqamiz'
        );
      })
      .catch(() =>
        toast.error(
          'Iltimos, maʼlumotlarni tekshiring yoki keyinroq qayta urinib koʻring.'
        )
      );
  } else {
    toast.error('Malumotlaringizni tekshiring');
  }
};
