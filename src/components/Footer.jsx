import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { openContactModal } from '../utils/contactModal';

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Security', href: '/#app-showcase' },
      { label: 'Join the Waitlist', onClick: () => openContactModal('waitlist') },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/#why-qpay' },
      { label: 'Founders', href: '/founders' },
      { label: 'FAQs', href: '/#faq-section' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookies Policy', href: '/cookies-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
    ],
  },
];

const socialLinks = [
  {
    label: 'QPay Instagram',
    href: 'https://www.instagram.com/qpayng_/',
    icon: faInstagram,
  },
  {
    label: 'Email QPay support',
    href: 'mailto:support@qpay-ng.com',
    icon: faEnvelope,
  },
];

const linkClassName =
  'self-start text-left text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-slate-950';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#f8f8f5] text-slate-900">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-16 lg:grid-cols-[1.65fr_repeat(3,minmax(0,1fr))] lg:gap-12">
          <div className="max-w-lg">
            <a href="/" aria-label="QPay home" className="inline-flex items-center">
              <img
                src="/footer-logo.png"
                alt="QPay"
                width="180"
                height="53"
                decoding="async"
                className="h-12 w-auto object-contain sm:h-14"
              />
            </a>

            <p className="mt-6 max-w-[20rem] text-[16px] leading-7 text-slate-700 sm:text-[17px]">
              Payment experiences for everyday commerce, designed for low connectivity.
            </p>

            <div className="mt-10 flex items-center gap-4">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[18px] text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav
              key={column.heading}
              aria-label={`${column.heading} links`}
            >
              <h3 className="text-[13px] font-extrabold uppercase tracking-[0.18em] text-slate-800">
                {column.heading}
              </h3>

              <div className="mt-7 flex flex-col gap-5">
                {column.links.map((link) => (
                  link.onClick ? (
                    <button key={link.label} type="button" onClick={link.onClick} className={linkClassName}>
                      {link.label}
                    </button>
                  ) : (
                    <a key={link.label} href={link.href} className={linkClassName}>
                      {link.label}
                    </a>
                  )
                ))}
              </div>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[14px] text-slate-600">
              &copy; 2026 Modulo Technologies LTD. All rights reserved.
            </p>
            <p className="text-[14px] text-slate-600">
              Built for dependable payments, even when the network is not.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
