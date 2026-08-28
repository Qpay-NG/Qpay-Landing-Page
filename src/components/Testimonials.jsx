import { motion } from 'framer-motion';

const Testimonials = () => {
  const statPills = [
    { text: "Designed for everyday commerce" },
    { text: "Built for diverse payment contexts" },
    { text: "Illustrative payment scenarios" },
  ];

  const testimonials = [
    {
      quote: "Illustrative use case: A market seller prepares QR payment instructions when connectivity is limited, helping keep checkout easier to follow.",
      audience: "Market seller",
      delay: 0,
      isHero: true,
      marginTop: "mt-0",
    },
    {
      quote: "Illustrative use case: A student prepares a QPay QR payment instruction during a period of limited connectivity; final processing follows the relevant payment infrastructure.",
      audience: "Student",
      delay: 0.15,
      isHero: false,
      marginTop: "md:mt-16",
    },
    {
      quote: "Illustrative use case: A dispatch rider prepares payment instructions in areas with limited connectivity, while processing and confirmation follow the relevant payment infrastructure.",
      audience: "Dispatch rider",
      delay: 0.3,
      isHero: false,
      marginTop: "md:mt-8",
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <p className="text-customOrange text-xs font-semibold tracking-widest uppercase text-center mb-3">
            ILLUSTRATIVE USE CASES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center leading-tight max-w-3xl mx-auto">
            Payment moments QPay is designed for.
          </h2>
        </motion.div>

        {/* Floating Social Proof Strip */}
        <div className="flex justify-center gap-2 sm:gap-4 flex-wrap mb-10 md:mb-16">
          {statPills.map((pill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.35 }}
              className="bg-gray-50 border border-gray-100 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-customOrange animate-pulse" />
              <span className="text-gray-600 text-xs sm:text-sm font-medium">{pill.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: item.delay, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(249,84,29,0.15)" }}
              className={`group flex flex-col bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden transition-all duration-500 ${item.marginTop} ${
                item.isHero 
                  ? "shadow-[0_16px_60px_rgba(249,84,29,0.10)] border border-orange-100" 
                  : "shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100"
              }`}
              style={item.isHero ? { background: "linear-gradient(135deg, #FFF5F0 0%, #FFFFFF 60%)" } : {}}
            >
              {/* Large decorative quote mark */}
              <div className="text-[120px] font-serif text-orange-50 group-hover:text-orange-100 transition-colors duration-300 leading-none select-none pointer-events-none absolute -top-2 right-4">
                &quot;
              </div>

              {/* Star rating row */}
              <div className="text-customOrange text-sm mb-5 flex gap-0.5 relative z-10">
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>

              {/* Quote text */}
              <p className="text-gray-800 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-6 md:mb-8 relative z-10 flex-grow">
                &quot;{item.quote}&quot;
              </p>

              <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.16em] relative z-10">
                Example use case · {item.audience}
              </p>

              {/* Bottom accent bar */}
              <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-customOrange to-orange-300 mt-6 relative z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 z-0 hidden w-full rotate-180 overflow-hidden leading-none md:block">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block h-[80px] w-full fill-customOrange">
          <path d="M1200,0H0v60c0,0,131-40,277-38s207,32,319,33s181-25,298-31S1200,60,1200,60V0z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
