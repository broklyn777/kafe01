// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Meddelande från ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'success', message: 'E-postmeddelandet skickades.' });
    } catch (error) {
      console.error('E-postfel:', error);
      res.status(500).json({ status: 'error', message: 'Ett fel inträffade när e-postmeddelandet skulle skickas.' });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Metoden är inte tillåten.' });
  }
};

export default sendEmail;
