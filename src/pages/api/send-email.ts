import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Создаем транспорт для отправки email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // или другой сервис
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Форматируем данные для email
    const optionsString = formData.option?.join(', ') || 'Not specified';
    const price = formData.additionalField ? `$${formData.additionalField}` : 'Not specified';

    // Опции для email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${formData.firstName} ${formData.lastName}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phoneNumber || 'Not provided'}</p>
        <p><strong>Description:</strong> ${formData.description || 'Not provided'}</p>
        <p><strong>Offer Price:</strong> ${price}</p>
        <p><strong>Client Acquisition Methods:</strong> ${optionsString}</p>
      `,
    };

    // Отправляем email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}