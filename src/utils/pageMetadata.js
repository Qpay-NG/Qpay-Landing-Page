const SITE_URL = 'https://qpay-ng.com';

const pageMetadata = {
  '/': {
    title: 'QPay NG | QR Payments for Low-Connectivity Moments',
    description:
      'QPay is a payment technology platform designed for reliable QR payment experiences in low-connectivity environments. Underlying financial services are provided by regulated partners.',
  },
  '/founders': {
    title: 'Founders | QPay NG',
    description:
      'Meet the founders building QPay NG and learn why they are creating QR payment experiences for low-connectivity moments.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | QPay NG',
    description:
      'Read the QPay NG Privacy Policy to understand how personal information is collected, used, stored, and shared on qpay-ng.com and related services.',
  },
  '/cookies-policy': {
    title: 'Cookies Policy | QPay NG',
    description:
      'Read the QPay NG Cookies Policy to understand how cookies are used on qpay-ng.com and the choices available to website visitors.',
  },
  '/terms-of-use': {
    title: 'Terms of Use | QPay NG',
    description:
      'Read the QPay NG Terms of Use governing access to and use of the QPay mobile application, website, payment services, and related products.',
  },
  '/contact-us': {
    title: 'Contact QPay NG | Support and Enquiries',
    description:
      'Contact QPay NG for product questions, support enquiries, privacy requests, or feedback about QPay services.',
  },
};

const normalizePathname = (pathname) => pathname.replace(/\/+$/, '') || '/';

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

export const applyPageMetadata = (pathname) => {
  const normalizedPathname = normalizePathname(pathname);
  const metadata = pageMetadata[normalizedPathname] || pageMetadata['/'];
  const canonicalPath = pageMetadata[normalizedPathname] ? normalizedPathname : '/';
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;

  document.title = metadata.title;
  upsertMeta('name', 'description', metadata.description);
  upsertMeta('property', 'og:title', metadata.title);
  upsertMeta('property', 'og:description', metadata.description);
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('name', 'twitter:title', metadata.title);
  upsertMeta('name', 'twitter:description', metadata.description);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);
};
