import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import App from '../App.jsx';
import Footer from './Footer.jsx';
import CookiesPolicyPage from './CookiesPolicyPage.jsx';
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx';
import TermsOfUsePage from './TermsOfUsePage.jsx';

afterEach(() => {
  cleanup();
  window.history.replaceState({}, '', '/');
});

describe('risk-sensitive marketing copy', () => {
  it('does not make absolute payment, connectivity, security, or availability claims', () => {
    render(<App />);

    const pageCopy = document.body.textContent;
    const prohibitedClaims = [
      /zero failed transactions/i,
      /sent means received/i,
      /payment complete/i,
      /works completely offline/i,
      /no bank account required/i,
      /bank[- ]grade security/i,
      /available now on ios and android/i,
      /payment confirms? in seconds/i,
      /nigerians are already paying offline/i,
      /active and growing community/i,
      /available all across nigeria/i,
    ];

    prohibitedClaims.forEach((claim) => {
      expect(pageCopy).not.toMatch(claim);
    });
  });

  it('keeps the legal entity attribution in the footer and policies', () => {
    render(<Footer />);
    expect(document.body.textContent).toContain('Modulo Technologies LTD');
    expect(document.body.textContent).not.toContain('trading as QPay');

    const legalLinks = screen.getByRole('navigation', { name: /legal links/i });
    expect(within(legalLinks).getByRole('link', { name: /terms of use/i })).toHaveAttribute(
      'href',
      '/terms-of-use'
    );

    cleanup();
    window.history.replaceState({}, '', '/privacy-policy');
    render(<PrivacyPolicyPage />);
    expect(document.body.textContent).toContain(
      'Modulo Technologies LTD, trading as QPay'
    );

    cleanup();
    window.history.replaceState({}, '', '/cookies-policy');
    render(<CookiesPolicyPage />);
    expect(document.body.textContent).toContain(
      'Modulo Technologies LTD, trading as QPay'
    );

    cleanup();
    window.history.replaceState({}, '', '/terms-of-use');
    render(<TermsOfUsePage />);
    expect(document.body.textContent).toContain('Modulo Technologies LTD');
    expect(document.body.textContent).not.toContain('[QPay Legal Company Name]');
    expect(document.body.textContent).toContain('2.5% transaction fee');
  });

  it('renders the terms route with a public download link', async () => {
    window.history.replaceState({}, '', '/terms-of-use');
    const { default: App } = await import('../App.jsx');

    render(<App />);

    expect(
      screen.getByRole('heading', { name: /qpay terms of use/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /download terms of use/i })
    ).toHaveAttribute('href', '/qpay-terms-of-use.txt');
    expect(
      screen.getByRole('link', { name: /download terms of use/i })
    ).toHaveAttribute('download', 'qpay-terms-of-use.txt');
  });

  it('lists legal routes including terms and founders in the sitemap', () => {
    const sitemap = readFileSync(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8');

    expect(sitemap).toContain('https://qpay-ng.com/terms-of-use');
    expect(sitemap).toContain('https://qpay-ng.com/founders');
  });

  it('keeps public metadata aligned with payment-technology positioning', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');

    expect(html).toContain('payment technology platform');
    expect(html).not.toMatch(/send and receive money with zero internet/i);
    expect(html).not.toMatch(/confirm the payment in seconds without internet/i);
    expect(html).not.toMatch(/does not rely on an internet connection during the transaction/i);
  });

  it('opens the existing contact modal for privacy requests', () => {
    window.history.replaceState({}, '', '/privacy-policy');
    render(<App />);

    const dataRequestLinks = screen.getAllByRole('button', {
      name: /data subject access request/i,
    });
    expect(dataRequestLinks).toHaveLength(2);
    fireEvent.click(dataRequestLinks[0]);

    expect(
      screen.getByRole('heading', {
        name: /what information do you want to delete or update/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', {
        name: /what information do you want to delete or update/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument();
  });

  it('keeps the contact-us trigger on the shared modal', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: 'Contact Us' })[0]);

    expect(
      screen.getByRole('heading', { name: /have a question or suggestion/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /question/i })).toBeInTheDocument();
  });

  it('opens an email-only waitlist variant of the shared modal', () => {
    render(<App />);

    fireEvent.click(
      screen.getAllByRole('button', { name: /join the qpay waitlist/i })[0]
    );

    expect(
      screen.getByRole('heading', { name: /be first to know/i })
    ).toBeInTheDocument();
    const waitlistModal = screen.getByRole('dialog', { name: /be first to know/i });
    expect(within(waitlistModal).getByRole('textbox', { name: /email address/i })).toBeInTheDocument();
    expect(within(waitlistModal).queryByRole('textbox', { name: /question/i })).not.toBeInTheDocument();
    expect(within(waitlistModal).getByRole('button', { name: /^join waitlist$/i })).toBeInTheDocument();
  });

  it('submits a waitlist email through the same-site contact endpoint', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ message: 'You have been added to the waitlist.' }),
    });

    render(<App />);
    fireEvent.click(
      screen.getAllByRole('button', { name: /join the qpay waitlist/i })[0]
    );

    const waitlistModal = screen.getByRole('dialog', { name: /be first to know/i });
    fireEvent.change(
      within(waitlistModal).getByRole('textbox', { name: /email address/i }),
      { target: { value: 'visitor@example.com' } }
    );
    fireEvent.click(within(waitlistModal).getByRole('button', { name: /^join waitlist$/i }));

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith(
        '/api/contact',
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({
            email: 'visitor@example.com',
            question: 'QPay waitlist signup',
          }),
        })
      );
    });
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'You have been added to the waitlist.'
    );

    fetchSpy.mockRestore();
  });

  it('keeps the waitlist access while avoiding repeated infrastructure wording', () => {
    render(<App />);

    const hero = document.getElementById('home');
    expect(within(hero).getByText('Designed for everyone')).toBeInTheDocument();
    expect(within(hero).queryByText('Payment status follows processing')).not.toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/payment infrastructure/i);
    expect(screen.getByRole('button', { name: /^join the qpay waitlist$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^join the waitlist$/i })).toBeInTheDocument();

    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');
    expect(html).not.toMatch(/payment infrastructure/i);
  });
});
