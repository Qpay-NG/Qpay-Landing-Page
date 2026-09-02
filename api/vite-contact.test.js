import { Readable } from 'node:stream';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { contactApiPlugin } from '../src/utils/localContactApi.js';

function createResponse() {
  return {
    statusCode: 200,
    setHeader: vi.fn(),
    end: vi.fn(),
  };
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe('local contact API middleware', () => {
  it('forwards local POST requests to the contact handler', async () => {
    vi.stubEnv('RESEND_API_KEY', 'test-resend-key');
    vi.stubEnv('QPAY_CONTACT_FROM_EMAIL', 'QPay Website <website@qpay-ng.com>');
    vi.stubEnv('QPAY_CONTACT_TO_EMAIL', 'support@qpay-ng.com');
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ id: 'email-id' }),
    });

    const useMiddleware = vi.fn();
    contactApiPlugin.configureServer({
      middlewares: { use: useMiddleware },
    });

    const middleware = useMiddleware.mock.calls[0][1];
    const request = Readable.from([
      JSON.stringify({
        email: 'visitor@example.com',
        question: 'This is a local test message',
      }),
    ]);
    request.method = 'POST';
    const response = createResponse();

    await middleware(request, response, vi.fn());

    expect(useMiddleware).toHaveBeenCalledWith('/api/contact', expect.any(Function));
    expect(response.statusCode).toBe(200);
    expect(response.end).toHaveBeenCalledWith(
      JSON.stringify({ message: 'Question submitted successfully.' })
    );
  });
});
