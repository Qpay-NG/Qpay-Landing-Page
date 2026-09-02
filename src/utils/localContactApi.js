import contactHandler from '../../api/contact.js';

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';

    request.setEncoding?.('utf8');
    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => resolve(body));
    request.on('error', reject);
  });
}

function createVercelResponse(response) {
  return {
    status(statusCode) {
      response.statusCode = statusCode;
      return this;
    },
    setHeader(name, value) {
      response.setHeader(name, value);
    },
    json(payload) {
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify(payload));
      return this;
    },
    end(body) {
      response.end(body);
      return this;
    },
  };
}

export const contactApiPlugin = {
  name: 'qpay-contact-api',
  configureServer(server) {
    server.middlewares.use('/api/contact', async (request, response, next) => {
      try {
        const body = request.method === 'POST' ? await readRequestBody(request) : undefined;
        await contactHandler({ ...request, body }, createVercelResponse(response));
      } catch (error) {
        next(error);
      }
    });
  },
};
