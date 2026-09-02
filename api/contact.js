const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_RECIPIENT = 'support@qpay-ng.com';
const RESEND_URL = 'https://api.resend.com/emails';

function sendJson(response, status, payload) {
  return response.status(status).json(payload);
}

function parseBody(body) {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };
    return entities[character];
  });
}

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.setHeader('Allow', 'POST, OPTIONS');
    return response.status(204).end();
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS');
    return sendJson(response, 405, { message: 'Method not allowed.' });
  }

  const { email, question } = parseBody(request.body);
  const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  const trimmedQuestion = typeof question === 'string' ? question.trim() : '';

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return sendJson(response, 400, { message: 'Please enter a valid email address.' });
  }

  if (!trimmedQuestion || trimmedQuestion.length > 2000) {
    return sendJson(response, 400, { message: 'Please enter a valid message.' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.QPAY_CONTACT_FROM_EMAIL;
  const toEmail = process.env.QPAY_CONTACT_TO_EMAIL || DEFAULT_RECIPIENT;

  if (!resendApiKey || !fromEmail) {
    return sendJson(response, 503, {
      message: 'Email service is not configured yet. Please try again later.',
    });
  }

  const isWaitlist = trimmedQuestion.toLowerCase() === 'qpay waitlist signup';
  const subject = isWaitlist ? 'New QPay waitlist signup' : 'New QPay website message';
  const escapedEmail = escapeHtml(trimmedEmail);
  const escapedQuestion = escapeHtml(trimmedQuestion);
  const html = `
    <h2>${isWaitlist ? 'New QPay waitlist signup' : 'New QPay website message'}</h2>
    <p><strong>Email:</strong> ${escapedEmail}</p>
    <p><strong>${isWaitlist ? 'Signup type' : 'Message'}:</strong> ${escapedQuestion}</p>
  `;

  try {
    const emailResponse = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'QPay-Website/1.0',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: trimmedEmail,
        subject,
        html,
      }),
    });

    const emailData = await emailResponse.json().catch(() => ({}));

    if (!emailResponse.ok) {
      return sendJson(response, 502, {
        message: emailData.message || 'Unable to send your message right now.',
      });
    }

    return sendJson(response, 200, {
      message: isWaitlist
        ? 'You have been added to the waitlist.'
        : 'Question submitted successfully.',
    });
  } catch {
    return sendJson(response, 502, {
      message: 'Unable to send your message right now.',
    });
  }
}
