import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface EmailRequest extends NextApiRequest {
  body: {
    firstName: string;
    lastName: string;
    description: string;
    additionalField: number;
    option: string[];
    email: string;
    phoneNumber: string;
    others: string;
  };
}

interface EmailResponse {
  message?: string;
  error?: string;
}

export default async function handler(
  req: EmailRequest,
  res: NextApiResponse<EmailResponse>
) {

  const { firstName, lastName, description, additionalField, option, email, phoneNumber, others } = req.body;

  // Создаем транспорт для отправки email
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const isOtherReal = others != undefined && others != "";

  try {
    // Формируем HTML содержимое письма
    const htmlContent = `
      <h2>New application from ${firstName} ${lastName}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Clients through:</strong></p>
      <ul>
          ${option.map(type => type != "OTHER" ?  `<li>${type}</li>` : ``).join('')}
          ${(others != undefined && others != "") ? `<li>${others}</li>` : ``}
      </ul>
      <p><strong>Budget:</strong> ${additionalField}$</p>
      <h3>Description:</h3>
      <p>${description}</p>
    `;

    // Отправляем email
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New application: ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber}
        Clients through: ${option.map(type => ` - ${type}`).join('\n')}
        ${isOtherReal && (`Others client through:${others}`)}
        Budget: ${additionalField}$
        Description: ${description}
      `,
      html: htmlContent,
    });

    return res.status(200).json({ message: 'Сообщение отправлено успешно!' });
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    return res.status(500).json({ error: 'Произошла ошибка при отправке сообщения' });
  }
}