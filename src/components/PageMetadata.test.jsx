import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';

import App from '../App.jsx';

const routeCases = [
  {
    path: '/',
    title: 'QPay NG | QR Payments for Low-Connectivity Moments',
    description:
      'QPay is a payment technology platform designed for reliable QR payment experiences in low-connectivity environments. Underlying financial services are provided by regulated partners.',
    canonical: 'https://qpay-ng.com/',
  },
  {
    path: '/founders',
    title: 'Founders | QPay NG',
    description:
      'Meet the founders building QPay NG and learn why they are creating QR payment experiences for low-connectivity moments.',
    canonical: 'https://qpay-ng.com/founders',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | QPay NG',
    description:
      'Read the QPay NG Privacy Policy to understand how personal information is collected, used, stored, and shared on qpay-ng.com and related services.',
    canonical: 'https://qpay-ng.com/privacy-policy',
  },
  {
    path: '/cookies-policy',
    title: 'Cookies Policy | QPay NG',
    description:
      'Read the QPay NG Cookies Policy to understand how cookies are used on qpay-ng.com and the choices available to website visitors.',
    canonical: 'https://qpay-ng.com/cookies-policy',
  },
  {
    path: '/terms-of-use',
    title: 'Terms of Use | QPay NG',
    description:
      'Read the QPay NG Terms of Use governing access to and use of the QPay mobile application, website, payment services, and related products.',
    canonical: 'https://qpay-ng.com/terms-of-use',
  },
  {
    path: '/contact-us',
    title: 'Contact QPay NG | Support and Enquiries',
    description:
      'Contact QPay NG for product questions, support enquiries, privacy requests, or feedback about QPay services.',
    canonical: 'https://qpay-ng.com/contact-us',
  },
];

afterEach(() => {
  cleanup();
  window.history.replaceState({}, '', '/');
  document.title = '';
  document
    .querySelectorAll(
      'link[rel="canonical"], meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]'
    )
    .forEach((element) => element.remove());
});

describe.each(routeCases)('$path page metadata', ({ path, title, description, canonical }) => {
  it('identifies the rendered page consistently to search and social crawlers', () => {
    window.history.replaceState({}, '', path);

    render(<App />);

    expect(document.title).toBe(title);
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      description
    );
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      canonical
    );
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
      'content',
      title
    );
    expect(document.querySelector('meta[property="og:description"]')).toHaveAttribute(
      'content',
      description
    );
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      'content',
      canonical
    );
    expect(document.querySelector('meta[name="twitter:title"]')).toHaveAttribute(
      'content',
      title
    );
    expect(document.querySelector('meta[name="twitter:description"]')).toHaveAttribute(
      'content',
      description
    );
  });
});
