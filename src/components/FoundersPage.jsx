import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Olagbegi Eniola',
    role: 'Co-Founder & CEO',
    image: '/founders-eniola.jpg',
    alt: 'Portrait of Olagbegi Eniola',
    statement:
      "I built this to solve a problem and it's great to see it solving real world problem.",
  },
  {
    name: 'Nneji Joseph',
    role: 'COO & Marketing Lead',
    image: '/founders-joseph.jpeg',
    alt: 'Portrait of Nneji Joseph',
    statement:
      'QPay is not just a product, it is a practical answer to the everyday payment barriers people face when connectivity fails.',
  },
  {
    name: 'Jack Wilson',
    role: 'CTO',
    image: null,
    alt: 'Default profile illustration for Jack Wilson',
    statement:
      'Reliable offline payments are essential in a world where commerce should not pause because the network does.',
  },
];

const PlaceholderAvatar = () => (
  <div className="relative flex h-full min-h-[380px] items-center justify-center overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.15),_transparent_42%),linear-gradient(160deg,#f7f7f4_0%,#eceff3_100%)]">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.02),transparent_55%)]" />
    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/70 bg-white/80 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <span className="text-3xl font-semibold tracking-[0.18em] text-slate-500">
        JW
      </span>
    </div>
  </div>
);

const FoundersPage = () => {
  return (
    <main className="min-h-screen bg-[#f6f6f2] text-slate-900">
      <section className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#fcfcfa_0%,#f6f6f2_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:px-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-customOrange">
              The Founders
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
              Built by people who understand why payments cannot wait
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              QPay was created to make payments dependable in the real places where weak connectivity slows down commerce and everyday life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 md:px-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="relative p-5">
                {founder.image ? (
                  <img
                    src={founder.image}
                    alt={founder.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[380px] w-full rounded-[1.6rem] object-cover object-top"
                  />
                ) : (
                  <PlaceholderAvatar />
                )}
              </div>

              <div className="px-6 pb-7 pt-1 sm:px-7 sm:pb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-customOrange">
                  Founder
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950">
                  {founder.name}
                </h2>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  {founder.role}
                </p>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  &quot;{founder.statement}&quot;
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FoundersPage;
