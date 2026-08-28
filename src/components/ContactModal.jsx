import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { FiX } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";
import { CONTACT_MODAL_EVENT } from "../utils/contactModal";

const CONTACT_API_URL = import.meta.env.VITE_QPAY_CONTACT_API_URL;
const CONTACT_API_KEY = import.meta.env.VITE_QPAY_CONTACT_API_KEY;

const copyByVariant = {
  contact: {
    eyebrow: "Contact QPay",
    heading: "Have a Question or Suggestion?",
    intro: "Send us a note and we'll get back to you as soon as possible.",
    fieldLabel: "Question",
    placeholder: "Write your question...",
    submitLabel: "Send Message",
    successMessage: "Question submitted successfully.",
  },
  privacy: {
    eyebrow: "Privacy Request",
    heading: "What information do you want to delete or update?",
    intro: "Tell us what you would like to review, update, or delete and include the email associated with your request.",
    fieldLabel: "What information do you want to delete or update?",
    placeholder: "Describe your request...",
    submitLabel: "Submit Request",
    successMessage: "Request submitted successfully.",
  },
};

const ContactModal = ({ variant = "contact", autoOpen = false }) => {
  const copy = copyByVariant[variant] || copyByVariant.contact;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalNotice, setModalNotice] = useState({
    message: "",
    isVisible: false,
    type: "error",
  });

  const modalRef = useRef(null);
  const modalNoticeTimerRef = useRef(null);

  useEffect(() => {
    const handleOpenContactModal = () => {
      openModal();
    };

    window.addEventListener(CONTACT_MODAL_EVENT, handleOpenContactModal);

    return () => {
      window.removeEventListener(CONTACT_MODAL_EVENT, handleOpenContactModal);
    };
  }, []);

  useEffect(() => {
    if (autoOpen) openModal();
  }, [autoOpen]);

  useEffect(() => {
    return () => {
      if (modalNoticeTimerRef.current) {
        clearTimeout(modalNoticeTimerRef.current);
      }
    };
  }, []);

  const showModalError = (noticeMessage) => {
    if (modalNoticeTimerRef.current) {
      clearTimeout(modalNoticeTimerRef.current);
    }

    setModalNotice({ message: noticeMessage, isVisible: true, type: "error" });

    modalNoticeTimerRef.current = setTimeout(() => {
      setModalNotice((currentNotice) => ({
        ...currentNotice,
        isVisible: false,
      }));

      modalNoticeTimerRef.current = setTimeout(() => {
        setModalNotice({ message: "", isVisible: false, type: "error" });
      }, 260);
    }, 2600);
  };

  const showModalSuccess = (noticeMessage) => {
    if (modalNoticeTimerRef.current) {
      clearTimeout(modalNoticeTimerRef.current);
    }

    setModalNotice({ message: noticeMessage, isVisible: true, type: "success" });

    modalNoticeTimerRef.current = setTimeout(() => {
      closeModal();
      setEmail("");
      setMessage("");
    }, 1300);
  };

  const openModal = () => {
    setIsModalOpen(true);
    requestAnimationFrame(() => {
      if (!modalRef.current) return;
      gsap.fromTo(
        modalRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" }
      );
    });
  };

  const closeModal = () => {
    if (modalNoticeTimerRef.current) {
      clearTimeout(modalNoticeTimerRef.current);
      modalNoticeTimerRef.current = null;
    }
    setModalNotice({ message: "", isVisible: false, type: "error" });

    if (!modalRef.current) {
      setIsModalOpen(false);
      return;
    }

    gsap.to(modalRef.current, {
      scale: 0.92,
      opacity: 0,
      duration: 0.25,
      ease: "power3.in",
      onComplete: () => setIsModalOpen(false),
    });
  };

  const handleSendMessage = async () => {
    const trimmedEmail = email.trim();
    const question = message.trim();
    const messageLabel = variant === "privacy" ? "request" : "question";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      showModalError("Please enter a valid email address.");
      return;
    }

    if (!question) {
      showModalError(`Please enter a ${messageLabel}.`);
      return;
    }

    if (question.length < 10) {
      showModalError("Please enter at least 10 characters.");
      return;
    }

    if (question.length > 2000) {
      showModalError(`Please keep your ${messageLabel} under 2000 characters.`);
      return;
    }

    if (!CONTACT_API_URL || !CONTACT_API_KEY) {
      showModalError("Contact form is not configured yet.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `Bearer ${CONTACT_API_KEY}`,
        },
        body: JSON.stringify({
          email: trimmedEmail,
          question,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        showModalSuccess(data.message || copy.successMessage);
      } else {
        showModalError(
          data.message ||
            (variant === "privacy"
              ? "Failed to submit your request."
              : "Failed to send message.")
        );
      }
    } catch (error) {
      showModalError(`An error occurred: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isModalOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
        onClick={closeModal}
      ></div>
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_32px_90px_rgba(15,23,42,0.32),0_0_0_1px_rgba(255,255,255,0.55)]"
      >
        <div
          role="alert"
          aria-live="polite"
          className={`pointer-events-none absolute left-1/2 top-4 z-30 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-2xl border bg-white/95 px-4 py-3 text-center text-sm font-semibold shadow-[0_18px_48px_rgba(15,23,42,0.22)] backdrop-blur-md transition-all duration-300 ease-out ${
            modalNotice.type === "success"
              ? "border-emerald-100 text-emerald-600"
              : "border-red-100 text-red-600"
          } ${
            modalNotice.message && modalNotice.isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          {modalNotice.message}
        </div>

        <div className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_28%),linear-gradient(135deg,#F9541D_0%,#FF6A2A_48%,#E74412_100%)] px-6 pb-8 pt-7 text-white sm:px-8 sm:pb-9 sm:pt-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-8 h-44 w-44 rounded-full bg-black/15 blur-3xl" />
          <button
            onClick={closeModal}
            aria-label="Close contact form"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            <FiX size={20} />
          </button>
          <p className="relative z-10 mb-3 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-white/75">
            {copy.eyebrow}
          </p>
          <h2 className="relative z-10 mx-auto max-w-md text-center font-heading text-3xl font-bold leading-tight sm:text-4xl">
            {copy.heading}
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-white/78 sm:text-base">
            {copy.intro}
          </p>
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="contact-email">
              Email address
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-customOrange focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="contact-message">
              {copy.fieldLabel}
            </label>
            <textarea
              id="contact-message"
              placeholder={copy.placeholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-40 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-customOrange focus:bg-white focus:ring-4 focus:ring-orange-100 sm:h-44"
            />
          </div>

          <button
            onClick={handleSendMessage}
            className="flex h-12 w-full items-center justify-center rounded-full bg-customOrange px-6 text-sm font-bold text-white shadow-[0_14px_32px_rgba(249,84,29,0.28)] transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_18px_38px_rgba(249,84,29,0.34)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
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
              copy.submitLabel
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
