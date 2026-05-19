import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#26282d] text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-12">
        <p className="text-center text-sm text-white/90 sm:text-left">
          &copy; 2026 QPay. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-6 sm:justify-end">
          <a
            href="https://www.instagram.com/qpayng_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="QPay Instagram"
            className="text-white transition-colors duration-200 hover:text-white/70"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="mailto:support@qpay-ng.com"
            aria-label="Email QPay support"
            className="text-white transition-colors duration-200 hover:text-white/70"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
