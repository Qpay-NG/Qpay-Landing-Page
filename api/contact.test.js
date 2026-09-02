import { afterEach, describe, expect, it, vi } from 'vitest';
import handler from './contact.js';

function createResponse() {
  return {
    status: vi.fn().mockReturnThis(),
    json: vi.fn(),
    setHeader: vi.fn(),
    end: vi.fn(),
  };
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe('contact endpoint', () => {
  it('sends waitlist signups to the QPay support inbox', async () => {
    vi.stubEnv('RESEND_API_KEY', 'test-resend-key');
    vi.stubEnv('QPAY_CONTACT_FROM_EMAIL', 'QPay Website <website@qpay-ng.com>');
    vi.stubEnv('QPAY_CONTACT_TO_EMAIL', 'support@qpay-ng.com');

    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ id: 'email-id' }),
    });
    const response = createResponse();

    await handler(
      {
        method: 'POST',
        body: {
          email: 'visitor@example.com',
          question: 'QPay waitlist signup',
        },
      },
      response
    );

    expect(fetchSpy).toHaveBeenCalledWith(
      'https://api.resend.com/emails',
      expect.objectContaining({
        method: 'POST',
        headers: {
          Authorization: 'Bearer test-resend-key',
          'Content-Type': 'application/json',
          'User-Agent': 'QPay-Website/1.0',
        },
        body: expect.any(String),
      })
    );
    const [, request] = fetchSpy.mock.calls[0];
    expect(JSON.parse(request.body)).toMatchObject({
      from: 'QPay Website <website@qpay-ng.com>',
      to: ['support@qpay-ng.com'],
      subject: 'New QPay waitlist signup',
    });
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      message: 'You have been added to the waitlist.',
    });
  });
});
