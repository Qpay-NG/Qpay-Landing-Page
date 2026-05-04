import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import screenSplash from "./images/screens/screen_splash.png";

const screenStep1 = "/screen2.jpg";
const screenStep2 = "/screen33.jpg";
const screenStep3 = "/screen_1.jpg";

const screens = [
  { src: screenSplash, label: "Onboarding" },
  { src: "/lean/Hidden balance.png", label: "Dashboard" },
  { src: screenStep1, label: "Enter Amount" },
  { src: screenStep2, label: "Merchant QR" },
  { src: screenStep3, label: "Payment Confirmed" },
  { src: "/lean/Default1.png", label: "Merchant Dashboard" },
];

const pills = [
  "Bank-Grade Security",
  "Instant QR",
  "No Bank App Needed",
  "Works Everywhere",
  "Zero Connectivity",
];

const AppShowcase = () => {
  const stripRef = useRef(null);
  const marqueeRef = useRef(null);
  const pillTweenRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setIsMobile(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (pillTweenRef.current) pillTweenRef.current.kill();
      return undefined;
    }

    if (marqueeRef.current) {
      pillTweenRef.current = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }

    let xPos = 0;
    const speed = 1.6;
    const strip = stripRef.current;
    let halfWidth = 0;

    const tick = () => {
      if (!strip) return;
      if (!halfWidth) halfWidth = strip.scrollWidth / 2;

      xPos -= speed;
      if (Math.abs(xPos) >= halfWidth) {
        xPos = 0;
      }

      gsap.set(strip, { x: xPos });
    };

    if (strip) {
      gsap.ticker.add(tick);
    }

    return () => {
      gsap.ticker.remove(tick);
      if (pillTweenRef.current) pillTweenRef.current.kill();
    };
  }, [isMobile]);

  const renderPhoneSet = (keyPrefix) => (
    <div className="flex flex-row items-end gap-5 px-3 sm:gap-6 sm:px-4 md:gap-8">
      {screens.map((screen, index) => (
        <div
          key={`${keyPrefix}-${index}`}
          className="relative flex-shrink-0 w-[132px] h-[280px] min-[400px]:w-[148px] min-[400px]:h-[312px] sm:w-[190px] sm:h-[400px] md:w-[220px] md:h-[460px]"
        >
          <div
            className="relative w-full h-full rounded-[2.5rem] border-[3px] border-white/20 overflow-hidden bg-white"
            style={{
              boxShadow:
                "0 0 0 2px rgba(255,255,255,0.15), 0 24px 48px rgba(0,0,0,0.3)",
            }}
          >
            <div className="absolute left-1/2 top-3 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/10 sm:top-4 sm:h-2 sm:w-16" />
            <div className="absolute inset-[6px] overflow-hidden rounded-[2rem] bg-[#f8f8f8] sm:inset-[8px] md:inset-[10px]">
              <img
                src={screen.src}
                alt={screen.label}
                className="block h-full w-full object-contain object-top"
              />
            </div>
          </div>

          <p className="mt-3 text-center text-xs font-medium text-white/60 sm:text-sm md:mt-4">
            {screen.label}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="relative overflow-x-hidden overflow-y-visible bg-customOrange pt-12 pb-10 md:pt-20 md:pb-[60px]"
      id="app-showcase"
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="relative z-10 mb-16 w-full text-center">
        <div className="px-6">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Every Screen.{" "}
            <span style={{ color: "rgba(255,255,255,0.75)" }}>
              Offline Ready.
            </span>
          </h2>
          <p className="font-body mx-auto mt-3 max-w-2xl px-4 text-sm font-medium leading-relaxed text-white/70 sm:text-base md:mt-4 md:text-lg lg:text-xl">
            From onboarding to instant payment, QPay works completely offline.
          </p>
        </div>

        <div className="relative mt-6 w-full overflow-hidden md:mt-10">
          <div ref={marqueeRef} className="flex w-max flex-row">
            {[...Array(10)].map((_, setIndex) => (
              <div key={`pill-set-${setIndex}`} className="flex gap-4 px-2">
                {pills.map((pill, index) => (
                  <span
                    key={`pill-${setIndex}-${index}`}
                    className="flex-shrink-0 whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800 md:px-4 md:py-2 md:text-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full pb-8 md:pb-12">
        <div className="hide-scrollbar px-4 md:hidden overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex w-max snap-x snap-mandatory gap-4 pr-4">
            {screens.map((screen, index) => (
              <div
                key={`mobile-screen-${index}`}
                className="snap-center relative flex-shrink-0 w-[172px] h-[360px] min-[390px]:w-[190px] min-[390px]:h-[396px]"
              >
                <div
                  className="relative h-full w-full overflow-hidden rounded-[2.1rem] border-[3px] border-white/20 bg-white"
                  style={{
                    boxShadow:
                      "0 0 0 2px rgba(255,255,255,0.12), 0 18px 36px rgba(0,0,0,0.24)",
                  }}
                >
                  <div className="absolute left-1/2 top-3 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/10" />
                  <div className="absolute inset-[7px] overflow-hidden rounded-[1.7rem] bg-[#f8f8f8]">
                    <img
                      src={screen.src}
                      alt={screen.label}
                      className="block h-full w-full object-contain object-top"
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-sm font-medium text-white/75">
                  {screen.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div ref={stripRef} className="flex w-max flex-row">
            {renderPhoneSet("screen1")}
            {renderPhoneSet("screen2")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
