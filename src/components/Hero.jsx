import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiX } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const QLogo = ({ className = "" }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="/3-nav.png"
      alt="QPay Logo"
      className="block h-9 w-auto object-contain md:h-10"
    />
  </div>
);

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isToastShown, setIsToastShown] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const heroRef = useRef(null);
  const modalRef = useRef(null);
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

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" }
      );
    }, 0);
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      scale: 0.92,
      opacity: 0,
      duration: 0.25,
      ease: "power3.in",
      onComplete: () => setIsModalOpen(false),
    });
  };

  const toggleMenu = () => {
    const nextOpen = !isMenuOpen;
    setIsMenuOpen(nextOpen);

    gsap.to(sideMenuRef.current, {
      x: nextOpen ? 0 : "-100%",
      duration: 0.35,
      ease: nextOpen ? "power3.out" : "power3.in",
    });
  };

  const handleSendMessage = async () => {
    if (!isAnonymous && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (!isToastShown) {
        toast.error("Please enter a valid email address.");
        setIsToastShown(true);
      }
      return;
    }

    if (!message.trim()) {
      if (!isToastShown) {
        toast.error("Please enter a message.");
        setIsToastShown(true);
      }
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://mythriftwaitlist.fly.dev/api/v1/contactus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: isAnonymous
              ? "Anonymous"
              : `From: ${email}\nMessage: ${message}`,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        closeModal();
        setEmail("");
        setMessage("");
        setIsAnonymous(false);
        setIsToastShown(false);
      } else if (!isToastShown) {
        toast.error(`Failed to send message: ${data.message || "Unknown error"}`);
        setIsToastShown(true);
      }
    } catch (error) {
      if (!isToastShown) {
        toast.error(`An error occurred: ${error.message}`);
        setIsToastShown(true);
      }
    } finally {
      setIsLoading(false);
    }
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
            'url("/lean/ChatGPT Image Apr 24, 2026, 07_38_50 PM.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_35%),linear-gradient(180deg,rgba(249,84,29,0.14),rgba(249,84,29,0.02))]" />

      <nav className="relative z-30">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-[8vw]">
          <div className="flex h-10 items-center md:h-11">
            <QLogo className="ml-1 -translate-y-0.5" />
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
                onClick={openModal}
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
                Download
              </button>
            </li>
          </ul>

          <div className="flex justify-center space-x-8 pb-2">
            <a
              href="https://www.instagram.com/mythriftng?igsh=MTFzM2tkMXp2Z2RpYg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://x.com/mythriftng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-[1440px] items-center gap-10 px-4 pt-10 pb-10 sm:px-6 md:min-h-[calc(100svh-5.5rem)] md:gap-8 md:px-[6vw] md:pt-10 md:pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:gap-12 lg:px-[8vw] lg:pt-12 lg:pb-14 xl:gap-16 xl:pt-14 xl:pb-16">
        <div className="flex max-w-[40rem] flex-col justify-center md:max-w-[40rem] lg:max-w-[40rem]">
          <span
            data-hero="copy"
            className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80 sm:text-xs"
          >
            Offline Payments, Rebuilt
          </span>

          <h1
            data-hero="copy"
            className="font-heading text-[2.8rem] leading-[0.95] tracking-[-0.05em] text-white sm:text-[3.6rem] md:text-[3.85rem] md:leading-[0.92] lg:text-[4.6rem] xl:text-[5.5rem]"
            style={{ textShadow: "0 2px 20px rgba(249,84,29,0.35)" }}
          >
            Pay Anywhere.
            <br />
            <span className="inline-block text-white/80">Even Offline.</span>
          </h1>

          <p
            data-hero="copy"
            className="mt-4 max-w-[30rem] text-[0.98rem] leading-relaxed text-white/78 sm:text-base md:mt-5 md:max-w-[28rem] md:text-[1.02rem] lg:mt-6 lg:max-w-xl lg:text-lg"
          >
            Generate secure QR payments on your phone without internet.
            Merchants scan, payment confirms fast, and everything feels simple
            even in low-connectivity, real-world environments.
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
              4,200+ users
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
                Start Paying Offline Today
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
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[27rem] sm:max-w-[31rem] md:max-w-[34rem] lg:max-w-[31rem] xl:max-w-[38rem]">
            <div className="pointer-events-none absolute left-[4%] top-[10%] h-[22%] w-[22%] rounded-full bg-white/16 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[6%] right-[2%] h-[26%] w-[26%] rounded-full bg-black/18 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/10 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-[6px] sm:rounded-[2.5rem] sm:p-4 md:rounded-[2.35rem] md:p-3 lg:rounded-[2.75rem] xl:rounded-[3rem]">
              <div className="rounded-[1.6rem] bg-gradient-to-b from-white/8 to-black/10 p-2 sm:rounded-[2rem] sm:p-3 md:rounded-[1.75rem] md:p-2.5 lg:rounded-[2rem]">
                <div className="relative overflow-hidden rounded-[1.4rem] bg-white/5 sm:rounded-[1.8rem] md:rounded-[1.55rem] lg:rounded-[1.8rem]">
                  <img
                    src="/ChatGPT_Image_Apr_28__2026_at_06_21_14_PM-removebg-preview.png"
                    alt="QPay Offline Payment UI"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -left-2 bottom-[14%] rounded-2xl border border-white/14 bg-white/12 px-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:left-0 sm:px-4 sm:py-3 md:left-[-10px] md:bottom-[12%] md:px-3 md:py-2 lg:left-0 lg:bottom-[14%] lg:px-4 lg:py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
                No Network
              </p>
              <p className="mt-1 text-sm font-bold text-white md:text-[0.95rem] lg:text-base">
                QR still generates instantly
              </p>
            </div>

            <div className="absolute -right-1 top-[12%] rounded-2xl border border-white/14 bg-white px-3 py-2 text-customOrange shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:right-1 sm:px-4 sm:py-3 md:right-[-8px] md:top-[10%] md:px-3 md:py-2 lg:right-1 lg:top-[12%] lg:px-4 lg:py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-customOrange/70">
                Confirmed
              </p>
              <p className="mt-1 text-sm font-bold md:text-[0.95rem] lg:text-base">Under 3 seconds</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeModal}
          ></div>
          <div
            ref={modalRef}
            className="relative z-10 w-11/12 max-w-lg rounded-lg bg-white shadow-lg md:w-[min(36rem,90vw)]"
          >
            <div className="relative rounded-t-lg bg-customOrange py-2 text-white">
              <button
                onClick={closeModal}
                className="absolute right-2 top-2 text-white hover:text-gray-200"
              >
                <FiX size={24} />
              </button>
              <h2 className="px-4 text-center font-heading text-2xl sm:text-3xl md:mb-16 md:text-5xl">
                Have a Question or Suggestion?
              </h2>
            </div>

            <div className="p-6">
              <p className="mb-4 -translate-y-1 text-center text-xs text-gray-500 md:px-14">
                Leave us a message and we&apos;ll get back to you as soon as
                possible!
              </p>

              {!isAnonymous && (
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4 h-10 w-full rounded-full border border-gray-300 p-3 focus:border-customOrange focus:outline-none"
                />
              )}

              <textarea
                placeholder="Write a message.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mb-4 h-44 w-full resize-none rounded-md border border-gray-300 bg-gray-100 p-3 placeholder:pl-1 placeholder:pt-2 focus:border-customOrange focus:outline-none"
              />

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                  className="mr-2"
                />
                <label htmlFor="anonymous" className="text-sm text-gray-500">
                  Submit Anonymously
                </label>
              </div>

              <button
                onClick={handleSendMessage}
                className="flex w-full items-center justify-center rounded-full bg-customOrange p-3 text-white hover:bg-orange-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <Toaster position="top-center" />
    </section>
  );
};

export default Hero;
