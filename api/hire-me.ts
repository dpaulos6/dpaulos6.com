// This file requires the 'node-fetch' package. Install it using: npm install node-fetch @types/node-fetch

import fetch from 'node-fetch';

// Replace with your actual Resend API key
const RESEND_API_KEY: string = process.env.VITE_RESEND_API_KEY || '';

async function sendEmail(): Promise<void> {
  const url: string = 'https://api.resend.com/emails';

  const body: string = JSON.stringify();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send email: ${errorText}`);
    }

    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail()
  .then(() => console.log('Email sent!'))
  .catch((error) => console.error('Error sending email:', error));
