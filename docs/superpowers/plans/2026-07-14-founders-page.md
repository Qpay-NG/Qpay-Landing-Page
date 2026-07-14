# Founders Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium `/founders` page with two real founder portraits, one intentional fallback avatar, and a footer link that routes visitors there from the landing site.

**Architecture:** Keep routing lightweight by extending the existing pathname switch in `src/App.jsx`, add a dedicated `FoundersPage.jsx` component for the full-page experience, and keep founder content local to that page in a small array. Add minimal component testing with Vitest + Testing Library so the new route and page content are covered.

**Tech Stack:** React 18, Vite 5, Tailwind utility classes, Framer Motion, Vitest, React Testing Library

## Global Constraints

- The founders experience must live on its own route at `/founders`
- The landing page must not duplicate founder content
- The footer `Company` column must include a `Founders` link
- Founder visuals must feel premium, editorial, and high-end
- Jack Wilson must use a purposeful fallback avatar rather than a broken or missing image
- The final implementation must verify on mobile and desktop-friendly layouts

---

### Task 1: Add founder page test scaffolding and route coverage

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `src/test/setup.js`
- Create: `src/components/FoundersPage.test.jsx`
- Test: `src/components/FoundersPage.test.jsx`

**Interfaces:**
- Consumes: `App` default export from `src/App.jsx`
- Produces: `npm run test -- --run src/components/FoundersPage.test.jsx` command for later tasks

- [ ] **Step 1: Write the failing test**

```jsx
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(() => {
  cleanup();
  window.history.replaceState({}, '', '/');
});

describe('Founders route', () => {
  it('renders the founders page when the pathname is /founders', async () => {
    window.history.replaceState({}, '', '/founders');
    const { default: App } = await import('../App.jsx');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /built by people who understand why payments cannot wait/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /founders/i })
    ).toHaveAttribute('href', '/founders');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- --run src/components/FoundersPage.test.jsx`

Expected: FAIL because the `test` script and Vitest configuration do not exist yet.

- [ ] **Step 3: Write minimal implementation for test tooling**

`package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "images:optimize": "node scripts/generate-optimized-images.mjs",
    "lint": "eslint .",
    "test": "vitest",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.0.1",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "jsdom": "^25.0.1",
    "postcss": "^8.4.41",
    "sharp": "^0.34.5",
    "tailwindcss": "^3.4.10",
    "vite": "^5.4.1",
    "vitest": "^2.1.1"
  }
}
```

`vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    globals: true,
  },
})
```

`src/test/setup.js`

```js
import '@testing-library/jest-dom/vitest';
```

- [ ] **Step 4: Run test to verify it still fails for the right reason**

Run: `npm run test -- --run src/components/FoundersPage.test.jsx`

Expected: FAIL because `FoundersPage` content and the footer link do not exist yet, not because Vitest is missing.

- [ ] **Step 5: Commit**

```bash
git add package.json vite.config.js src/test/setup.js src/components/FoundersPage.test.jsx
git commit -m "test: add founders page route coverage"
```

### Task 2: Build the dedicated founders page and route

**Files:**
- Create: `src/components/FoundersPage.jsx`
- Modify: `src/App.jsx`
- Create: `public/founders-eniola.jpg`
- Create: `public/founders-joseph.jpeg`
- Test: `src/components/FoundersPage.test.jsx`

**Interfaces:**
- Consumes: `window.location.pathname` routing pattern already used in `src/App.jsx`
- Produces: `FoundersPage` default export from `src/components/FoundersPage.jsx`

- [ ] **Step 1: Write the failing test for founder-specific content**

Append this test to `src/components/FoundersPage.test.jsx`:

```jsx
it('shows all three founders with roles and statement copy', async () => {
  window.history.replaceState({}, '', '/founders');
  const { default: App } = await import('../App.jsx');

  render(<App />);

  expect(screen.getByText(/olagbegi eniola/i)).toBeInTheDocument();
  expect(screen.getByText(/co-founder & ceo/i)).toBeInTheDocument();
  expect(
    screen.getByText(/i built this to solve a problem/i)
  ).toBeInTheDocument();

  expect(screen.getByText(/nneji joseph/i)).toBeInTheDocument();
  expect(screen.getByText(/coo & marketing lead/i)).toBeInTheDocument();
  expect(
    screen.getByText(/practical answer to the everyday payment barriers/i)
  ).toBeInTheDocument();

  expect(screen.getByText(/jack wilson/i)).toBeInTheDocument();
  expect(screen.getByText(/^cto$/i)).toBeInTheDocument();
  expect(
    screen.getByText(/commerce should not pause because the network does/i)
  ).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- --run src/components/FoundersPage.test.jsx`

Expected: FAIL because `App.jsx` does not route to a founders page and `FoundersPage.jsx` does not exist yet.

- [ ] **Step 3: Write minimal implementation**

`src/components/FoundersPage.jsx`

```jsx
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
                  "{founder.statement}"
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
```

`src/App.jsx`

```jsx
import './App.css'
import Hero from './components/Hero'
import AboutQpay from './components/AboutQpay'
import ComingSoonSection from './components/ComingSoonSection'
import FAQs from './components/FAQS'
import AppShowcase from './components/AppShowcase'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CookiesPolicyPage from './components/CookiesPolicyPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import FoundersPage from './components/FoundersPage'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isCookiesPolicyPage = pathname === '/cookies-policy'
  const isPrivacyPolicyPage = pathname === '/privacy-policy'
  const isContactUsPage = pathname === '/contact-us'
  const isFoundersPage = pathname === '/founders'

  return (
    <div>
      {isCookiesPolicyPage ? (
        <CookiesPolicyPage />
      ) : isPrivacyPolicyPage ? (
        <PrivacyPolicyPage />
      ) : isFoundersPage ? (
        <FoundersPage />
      ) : (
        <>
          <Hero autoOpenContactModal={isContactUsPage} />
          <AboutQpay />
          <Testimonials />
          <AppShowcase />
          <ComingSoonSection />
          <FAQs />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
```

Asset commands:

```bash
cp '/Users/eniolacaleb/Downloads/IMG_9010 2.HEIC' public/founders-eniola.HEIC
cp '/Users/eniolacaleb/Downloads/photo_2026-07-14 17.21.50.jpeg' public/founders-joseph.jpeg
```

Then convert the HEIC image to a browser-friendly format before wiring the final `src`:

```bash
qlmanage -t -s 1600 -o public '/Users/eniolacaleb/Downloads/IMG_9010 2.HEIC'
mv public/IMG_9010\ 2.HEIC.png public/founders-eniola.jpg
rm public/founders-eniola.HEIC
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- --run src/components/FoundersPage.test.jsx`

Expected: PASS with 2 passing tests.

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx src/components/FoundersPage.jsx public/founders-eniola.jpg public/founders-joseph.jpeg src/components/FoundersPage.test.jsx
git commit -m "feat: add premium founders page"
```

### Task 3: Add the footer link and final regression checks

**Files:**
- Modify: `src/components/Footer.jsx`
- Test: `src/components/FoundersPage.test.jsx`

**Interfaces:**
- Consumes: `/founders` route from `App.jsx`
- Produces: Footer navigation entry for the `Company` column

- [ ] **Step 1: Write the failing test for the footer link label**

Append this test to `src/components/FoundersPage.test.jsx`:

```jsx
it('adds founders under the company footer links', async () => {
  const { default: App } = await import('../App.jsx');

  render(<App />);

  const foundersLink = screen.getByRole('link', { name: /founders/i });
  expect(foundersLink).toHaveAttribute('href', '/founders');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- --run src/components/FoundersPage.test.jsx`

Expected: FAIL because `Footer.jsx` does not yet include a `Founders` link in the `Company` column.

- [ ] **Step 3: Write minimal implementation**

Update the `Company` links array in `src/components/Footer.jsx`:

```jsx
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/#why-qpay' },
      { label: 'Founders', href: '/founders' },
      { label: 'FAQs', href: '/#faq-section' },
    ],
  },
```

- [ ] **Step 4: Run full verification**

Run: `npm run test -- --run src/components/FoundersPage.test.jsx`

Expected: PASS with all founders route and footer-link tests green.

Run: `npm run build`

Expected: PASS with Vite production build output and exit code 0.

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer.jsx src/components/FoundersPage.test.jsx
git commit -m "feat: link founders page from footer"
```

## Self-Review

### Spec coverage

- Dedicated `/founders` page: covered in Task 2
- Footer `Founders` link under `Company`: covered in Task 3
- Premium founder presentation with real portraits and fallback avatar: covered in Task 2
- No founder duplication on homepage: covered by route-only implementation in Task 2
- Production verification: covered in Task 3

### Placeholder scan

- No `TBD`, `TODO`, or deferred implementation markers remain
- Each task includes specific files, commands, and code snippets

### Type consistency

- `FoundersPage` is introduced as the default export and imported consistently in `App.jsx`
- The `/founders` route string is used consistently across tests, footer, and route logic

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-07-14-founders-page.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
