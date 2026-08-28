import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiX } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import OptimizedPicture from "./OptimizedPicture";
import { openContactModal } from "../utils/contactModal";

const heroImage = {
  avif:
    "/optimized/hero-qpay-users-640.avif 640w, /optimized/hero-qpay-users-960.avif 960w, /optimized/hero-qpay-users-1280.avif 1280w",
  webp:
    "/optimized/hero-qpay-users-640.webp 640w, /optimized/hero-qpay-users-960.webp 960w, /optimized/hero-qpay-users-1280.webp 1280w",
  sizes: "(max-width: 640px) 92vw, (max-width: 1024px) 31rem, 34rem",
};

const QLogo = ({ className = "" }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="/3-nav.png"
      alt="QPay Logo"
      width="144"
      height="40"
      decoding="async"
      className="block h-9 w-auto object-contain md:h-10"
    />
  </div>
);

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const sideMenuRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero='copy']",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        "[data-hero='visual']",
        { y: 36, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    const nextOpen = !isMenuOpen;
    setIsMenuOpen(nextOpen);

    gsap.to(sideMenuRef.current, {
      x: nextOpen ? 0 : "-100%",
      duration: 0.35,
      ease: nextOpen ? "power3.out" : "power3.in",
    });
  };

  const handleScrollToWaitlist = () => {
    const waitlistSection = document.getElementById("coming-soon");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative isolate overflow-hidden bg-customOrange text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-46"
        style={{
          backgroundImage:
            "image-set(url('/optimized/hero-bg-1772.avif') type('image/avif'), url('/optimized/hero-bg-1772.webp') type('image/webp'), url('/lean/ChatGPT Image Apr 24, 2026, 07_38_50 PM.png') type('image/png'))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_35%),linear-gradient(180deg,rgba(249,84,29,0.14),rgba(249,84,29,0.02))]" />

      <nav className="relative z-30">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-8 lg:px-12 xl:px-16">
          <div className="flex h-10 items-center md:h-11">
            <QLogo />
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-controls="side-menu"
            onClick={toggleMenu}
            className="text-2xl text-white sm:hidden"
          >
            <RiMenu3Line />
          </button>

          <div className="hidden h-10 items-center sm:flex md:h-11">
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={openContactModal}
                className="h-10 rounded-full bg-white px-5 text-sm font-semibold leading-none text-customOrange shadow-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-md md:h-11"
              >
                Contact Us
              </motion.button>
            </Magnetic>
          </div>
        </div>
      </nav>

      <div
        ref={sideMenuRef}
        id="side-menu"
        className="fixed left-0 top-0 z-50 h-full w-full -translate-x-full bg-customOrange text-white sm:hidden"
      >
        <div className="flex h-full flex-col justify-between px-6 py-6">
          <div className="flex items-center justify-between">
            <QLogo />
            <button onClick={toggleMenu} className="text-white">
              <FiX size={24} />
            </button>
          </div>

          <ul className="flex flex-1 flex-col justify-center gap-2 text-lg">
            <li>
              <button
                onClick={() => handleScrollToSection("home")}
                className="block w-full border-b border-white/10 py-4 text-left font-medium"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("how-it-works")}
                className="block w-full border-b border-white/10 py-4 text-left font-medium"
              >
                How It Works
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("why-qpay")}
                className="block w-full border-b border-white/10 py-4 text-left font-medium"
              >
                Why QPay
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("coming-soon")}
                className="block w-full border-b border-white/10 py-4 text-left font-medium"
              >
                Join Waitlist
              </button>
            </li>
          </ul>

          <div className="flex justify-center space-x-8 pb-2">
            <a
              href="https://www.instagram.com/qpayng_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="mailto:support@qpay-ng.com"
              aria-label="Email QPay support"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-[1440px] items-center gap-8 px-4 pt-7 pb-9 sm:px-6 sm:pt-9 sm:pb-10 md:min-h-[calc(100svh-5.25rem)] md:gap-8 md:px-8 md:pt-10 md:pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.92fr)] lg:gap-11 lg:px-12 lg:pt-11 lg:pb-14 xl:gap-16 xl:px-16">
        <div className="flex w-full max-w-[40rem] flex-col justify-center">
          <span
            data-hero="copy"
            className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80 sm:text-xs"
          >
            Offline Payments, Rebuilt
          </span>

          <h1
            data-hero="copy"
            className="font-heading text-[clamp(2.55rem,13vw,3.55rem)] leading-[0.95] tracking-[-0.05em] text-white sm:text-[clamp(3.25rem,9vw,4rem)] md:text-[4.15rem] md:leading-[0.92] lg:text-[4.75rem] xl:text-[5.5rem]"
            style={{ textShadow: "0 2px 20px rgba(249,84,29,0.35)" }}
          >
            Low connectivity? Keep moving.
            <br />
            <span className="inline-block text-white/80">Even Offline.</span>
          </h1>

          <p
            data-hero="copy"
            className="mt-4 max-w-[34rem] text-[0.95rem] leading-relaxed text-white/78 sm:text-base md:mt-5 md:text-[1.02rem] lg:mt-6 lg:max-w-xl lg:text-lg"
          >
            Generate secure QR payment instructions on your phone when
            connectivity is limited. Merchants scan, and the payment
            instruction can then be processed through the relevant payment
            infrastructure.
          </p>

          <div
            data-hero="copy"
            className="mt-5 flex items-center gap-3 md:mt-6 lg:mt-7"
          >
            <img
              src="https://res.cloudinary.com/dtaqusjav/image/upload/v1724414014/people_aenuc1.svg"
              alt="People icons"
              className="h-9 w-9 md:h-10 md:w-10"
            />
            <span className="text-sm font-medium text-white md:text-base">
              Built for everyday payments
            </span>
          </div>

          <div
            data-hero="copy"
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-7 lg:mt-8"
          >
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToWaitlist}
                className="w-full rounded-full bg-white px-7 py-4 text-base font-bold text-customOrange shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl sm:w-auto"
              >
                Join the QPay Waitlist
              </motion.button>
            </Magnetic>

            <button
              onClick={() => handleScrollToSection("how-it-works")}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white/90 transition-colors hover:bg-white/15 sm:w-auto"
            >
              See How It Works
            </button>
          </div>
        </div>

        <div
          data-hero="visual"
          className="relative flex min-w-0 items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[min(100%,23rem)] sm:max-w-[29rem] md:max-w-[31rem] lg:max-w-[29.5rem] xl:max-w-[34rem]">
            <div className="pointer-events-none absolute left-[4%] top-[10%] h-[22%] w-[22%] rounded-full bg-white/16 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[6%] right-[2%] h-[26%] w-[26%] rounded-full bg-black/18 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/10 px-3 pt-3 pb-0 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-[6px] sm:rounded-[2.5rem] sm:px-4 sm:pt-4 sm:pb-0 md:rounded-[2.35rem] md:px-3 md:pt-3 md:pb-0 lg:rounded-[2.75rem] xl:rounded-[3rem]">
              <div className="rounded-[1.6rem] bg-gradient-to-b from-white/8 to-black/10 px-2 pt-2 pb-0 sm:rounded-[2rem] sm:px-3 sm:pt-3 sm:pb-0 md:rounded-[1.75rem] md:px-2.5 md:pt-2.5 md:pb-0 lg:rounded-[2rem]">
                <div
                  className="relative overflow-hidden rounded-[1.4rem] bg-white/5 bg-contain bg-center bg-no-repeat sm:rounded-[1.8rem] md:rounded-[1.55rem] lg:rounded-[1.8rem]"
                  style={{
                    backgroundImage:
                      "url('/optimized/hero-qpay-users-blur.webp')",
                  }}
                >
                  <OptimizedPicture
                    avif={heroImage.avif}
                    webp={heroImage.webp}
                    src="/hero-qpay-users.png"
                    alt="QPay payment interface preview"
                    width="1842"
                    height="2304"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    sizes={heroImage.sizes}
                    imgClassName="mx-auto block h-auto max-h-[none] w-auto max-w-full object-contain lg:max-h-[calc(100svh-14rem)] xl:max-h-[calc(100svh-13rem)]"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -left-1 bottom-[13%] rounded-2xl border border-white/14 bg-white/12 px-2.5 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:left-0 sm:px-4 sm:py-3 md:left-[-8px] md:bottom-[12%] md:px-3 md:py-2 lg:left-0 lg:bottom-[14%] lg:px-4 lg:py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
                Limited Connectivity
              </p>
              <p className="mt-1 text-xs font-bold text-white sm:text-sm md:text-[0.95rem] lg:text-base">
                QR payment details can be prepared
              </p>
            </div>

            <div className="absolute -right-1 top-[12%] rounded-2xl border border-white/14 bg-white px-2.5 py-2 text-customOrange shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:right-1 sm:px-4 sm:py-3 md:right-[-8px] md:top-[10%] md:px-3 md:py-2 lg:right-1 lg:top-[12%] lg:px-4 lg:py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-customOrange/70">
                Payment Status
              </p>
              <p className="mt-1 text-xs font-bold sm:text-sm md:text-[0.95rem] lg:text-base">Processing follows infrastructure</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
