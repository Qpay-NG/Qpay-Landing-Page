import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import App from '../App.jsx';
import Footer from './Footer.jsx';
import CookiesPolicyPage from './CookiesPolicyPage.jsx';
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx';

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
});
