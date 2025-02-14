
// pages/api/send-email.js

const PUBLIC_KEY = process.env.MAILJET_API_PUBLIC_KEY;
const PRIVATE_KEY = process.env.MAILJET_API_PRIVATE_KEY;

const Mailjet = require('node-mailjet');

const mailjet = new Mailjet({
  apiKey: PUBLIC_KEY || 'your-api-key',
  apiSecret: PRIVATE_KEY || 'your-api-secret'
});


const sendEmail = (brandname, fullname, email, employee, website, location, affiliate, hear, message) => {
  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: email, // Replace with your email
            Name: fullname // Replace with your name
          },
          To: [
            {
              Email: 'info@devend.com', // Replace with recipient's email
              Name: 'Devend', // Replace with recipient's name
            },
          ],
          Subject: 'New Form Submission',
          TextPart: `You have a new message from ${fullname} (${email}):\n\n${brandname}\n${employee}\n${website}\n${location}\n${affiliate}\n${hear}`,
          HTMLPart: `<p>You have a new message from <strong>${fullname}</strong> (<a href="mailto:${email}">${email}</a>):</p><p>${message}</p>`,
        },
      ],
    });

  return request
    .then((result) => {
      // console.log(result.body);
      return result.body;
    })
    .catch((err) => {
      // console.log(err.statusCode);
      throw new Error(err.statusCode);
      // return err.statusCode;
    });
};


export async function POST(req) {
  const { brandname, fullname, email, employee, website, location, affiliate, hear, message } = await req.json();

  if (!brandname || !fullname || !email || !employee || !website || !location || !affiliate || !hear || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), {
      status: 400,
    });

  }

  try {
    sendEmail(brandname, fullname, email, employee, website, location, affiliate, hear, message);

    
    return new Response(JSON.stringify({ message: 'Email sent successfully.' }), {
      status: 200,
    });

    
  } catch (error) {
    console.error('Mailjet Error:', error.response?.data || error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
      status: 500,
    });
    // return res.status(500).json({ error: 'Failed to send email.' });
  }
}
