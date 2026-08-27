# QPay Visual Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the existing QPay marketing site feel like a restrained, premium fintech product while updating legal identity and removing unverified payment claims.

**Architecture:** Keep the existing React component tree, page routing, assets, contact modal, and Tailwind-first styling. Refine each presentational component in place using a small shared surface/motion system in `src/index.css`, then align homepage metadata and policy text with the same accurate product language. Add focused component tests for claims and legal identity, retaining the existing founders-route coverage.

**Tech Stack:** React 18, Vite 5, Tailwind CSS 3, Vitest, Testing Library, Font Awesome, existing GSAP/Framer Motion dependencies.

**Spec:** `docs/superpowers/specs/2026-08-27-qpay-visual-refinement-design.md`

## Global Constraints

- Preserve the page order, existing routes, QPay logo, QPay orange identity, screenshots, and contact-modal behaviour.
- The legal entity is exactly `Modulo Technologies LTD, trading as QPay`; QPay remains the public product name.
- Do not state or imply that QPay holds customer funds, operates a wallet, completes settlement with no connectivity, guarantees a transaction, requires no account, or uses a named infrastructure provider.
- Use restrained borders, tonal surfaces, deliberate whitespace, modest radii, and short interaction feedback instead of glass, neon, glow, floating decoration, large-radius cards, or continuous animation.
- All visual motion must remain useful when disabled and honour `prefers-reduced-motion`.
- Do not add dependencies or generate replacement decorative assets.

---

## File Structure

- `src/index.css` — global typography, focus, and reduced-motion guardrails.
- `src/components/Hero.jsx` — existing nav, hero copy, contact modal, and hero visual; remove non-essential animation and update safe messaging.
- `src/components/AboutQpay.jsx` — existing QR walkthrough and reliability story; update claims and reduce excessive surface treatment.
- `src/components/AppShowcase.jsx` — existing product screenshots; simplify product presentation and correct copy.
- `src/components/Testimonials.jsx` — existing social proof; remove decorative waves, pulses, gradient cards, star graphics, and deep hover movement.
- `src/components/ComingSoonSection.jsx` — existing download prompt and device composition; remove ornamental UI and unsupported download/offline claims.
- `src/components/FAQS.jsx` — existing accordion; update answers and simplify container/button treatment.
- `src/components/Footer.jsx` — existing footer links and channels; update copyright and quieten social interaction styles.
- `src/components/PrivacyPolicyPage.jsx` and `src/components/CookiesPolicyPage.jsx` — legal entity, headings, descriptions, and consistent company references.
- `index.html` — homepage SEO, Open Graph/Twitter content, organisation JSON-LD, and FAQ JSON-LD language.
- `src/components/MarketingCopy.test.jsx` — regression tests for safe marketing language and route metadata.
- `src/components/LegalIdentityPages.test.jsx` — regression tests for the agreed legal entity and policy branding.

### Task 1: Add regression coverage for the legal identity and accurate payment language

**Files:**
- Create: `src/components/LegalIdentityPages.test.jsx`
- Create: `src/components/MarketingCopy.test.jsx`
- Modify: `src/test/setup.js` only if an existing setup helper is insufficient for route/meta cleanup.

**Interfaces:**
- Consumes: current default exports from `PrivacyPolicyPage`, `CookiesPolicyPage`, `Hero`, `AboutQpay`, `AppShowcase`, `ComingSoonSection`, `FAQS`, and `Footer`.
- Produces: tests that later copy and styling tasks must preserve.

- [ ] **Step 1: Write failing legal-identity tests**

```jsx
import { render, screen } from '@testing-library/react'
import CookiesPolicyPage from './CookiesPolicyPage'
import PrivacyPolicyPage from './PrivacyPolicyPage'

const legalEntity = 'Modulo Technologies LTD, trading as QPay'

it('identifies the legal operator in the privacy policy', () => {
  render(<PrivacyPolicyPage />)
  expect(screen.getByText(legalEntity, { exact: false })).toBeInTheDocument()
})

it('identifies the legal operator in the cookies policy', () => {
  render(<CookiesPolicyPage />)
  expect(screen.getByText(legalEntity, { exact: false })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run the legal-identity test to verify it fails**

Run: `npm test -- LegalIdentityPages.test.jsx --run`

Expected: FAIL because neither policy currently contains the agreed entity string.

- [ ] **Step 3: Write failing marketing-copy tests**

```jsx
import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import FAQS from './FAQS'

it('uses reliability language without a settlement guarantee', () => {
  render(<FAQS />)
  expect(screen.getByText(/prepare a secure QR payment/i)).toBeInTheDocument()
  expect(screen.queryByText(/send money with zero internet/i)).not.toBeInTheDocument()
})

it('uses the company name in the footer copyright', () => {
  render(<Footer />)
  expect(screen.getByText(/Modulo Technologies LTD/i)).toBeInTheDocument()
})
```

- [ ] **Step 4: Run the marketing-copy test to verify it fails**

Run: `npm test -- MarketingCopy.test.jsx --run`

Expected: FAIL because the FAQ and footer still use superseded wording.

- [ ] **Step 5: Do not implement product changes in this task**

Keep the failing tests as the copy contract for Tasks 2–4. The related components are updated in those focused tasks.

- [ ] **Step 6: Commit the tests**

```bash
git add src/components/LegalIdentityPages.test.jsx src/components/MarketingCopy.test.jsx src/test/setup.js
git commit -m "test: cover QPay copy and legal identity"
```

### Task 2: Establish the restrained visual system and refine the hero

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.css`
- Modify: `src/components/Hero.jsx`

**Interfaces:**
- Consumes: Task 1 safe-copy regression contract and the existing `CONTACT_MODAL_EVENT` contact behaviour.
- Produces: global class and motion guardrails, plus a hero that remains a drop-in component for `App.jsx`.

- [ ] **Step 1: Run the existing hero-related copy test as the initial failure**

Run: `npm test -- MarketingCopy.test.jsx --run`

Expected: FAIL because the homepage copy has not yet changed.

- [ ] **Step 2: Add shared global visual and motion rules**

Add restrained typography defaults, a visible keyboard focus treatment, and a reduced-motion override. Keep the existing Plus Jakarta Sans tokens and do not alter the logo or colour token names.

```css
:focus-visible {
  outline: 2px solid #f9541d;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

Remove the unused `.spin-animation` definition from `src/App.css`; do not introduce another always-running keyframe.

- [ ] **Step 3: Simplify the hero visual treatment without changing behaviour**

In `Hero.jsx`, retain the nav links, mobile menu, `handleScrollToWaitlist`, and contact modal. Replace large rounded navigation surfaces, unnecessary glow/gradient classes, magnetic decoration, and non-functional scroll animation with normal layout and short CSS transitions. If entrance animation remains, use one opacity/translate reveal for the hero group and skip it under reduced motion.

Replace copy with this meaning:

```jsx
<h1>Reliable payments when connectivity is poor.</h1>
<p>
  Prepare a secure QR payment from your phone, then let QPay coordinate the
  transaction through its payment infrastructure.
</p>
```

Do not use the phrases `completely offline`, `payment complete`, `zero failed`, or `no signal needed at every step`.

- [ ] **Step 4: Run lint and the copy regression test**

Run: `npm run lint && npm test -- MarketingCopy.test.jsx --run`

Expected: lint passes; the marketing-copy test may still fail until Tasks 3–4 update its FAQ/footer assertions.

- [ ] **Step 5: Commit the visual foundation and hero work**

```bash
git add src/index.css src/App.css src/components/Hero.jsx
git commit -m "style: refine QPay visual foundation and hero"
```

### Task 3: Refine the QR journey and product demonstrations in place

**Files:**
- Modify: `src/components/AboutQpay.jsx`
- Modify: `src/components/AppShowcase.jsx`
- Modify: `src/components/ComingSoonSection.jsx`

**Interfaces:**
- Consumes: Task 2 visual-system rules and existing `OptimizedPicture` asset interface.
- Produces: the same section IDs (`how-it-works`, `why-qpay`, `app-showcase`, `coming-soon`) with accurate language and low-noise presentation.

- [ ] **Step 1: Add or expand a failing copy assertion for the walkthrough**

```jsx
import AboutQpay from './AboutQpay'

it('describes QR payments as prepared on device and coordinated through payment infrastructure', () => {
  render(<AboutQpay />)
  expect(screen.getByText(/securely prepare and initiate/i)).toBeInTheDocument()
  expect(screen.queryByText(/Zero Failed Transactions/i)).not.toBeInTheDocument()
})
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `npm test -- MarketingCopy.test.jsx --run`

Expected: FAIL because `AboutQpay` still contains the obsolete heading and offline completion claims.

- [ ] **Step 3: Update the walkthrough copy and surfaces**

In `AboutQpay.jsx`, retain the existing three-step layout and screenshots. Replace the `Three Steps. Zero Internet.` section heading and all final-settlement wording with wording that distinguishes payment preparation from settlement. Use this copy direction:

```jsx
<h2>Three steps. Built for low connectivity.</h2>
<p>
  QPay helps you securely prepare and initiate a QR payment when your phone's
  connection is unreliable. Payment status is then coordinated through QPay's
  payment infrastructure.
</p>
```

Replace `Zero Failed Transactions.` with `Built to reduce payment friction.` Remove decorative badges, large circular icon treatments, hover elevation, excessive gradients, and duplicate card frames while preserving the current content order.

- [ ] **Step 4: Refine screenshot sections and download language**

In `AppShowcase.jsx` and `ComingSoonSection.jsx`, retain all current phone screenshots and store-button visual assets. Remove the giant background `Q`, floating badges, circular ornaments, infinite `animate={{ y: [...] }}` phone motion, heavy shadows, and hover-scale effects. Use modest device borders and a single quiet tonal backdrop.

Replace download copy with wording that does not claim current availability, universal offline completion, no account requirement, or app-store status unless a real release is verified. Use a waitlist/contact-forward CTA if the existing store images are only visual placeholders.

- [ ] **Step 5: Run the focused test and lint**

Run: `npm run lint && npm test -- MarketingCopy.test.jsx --run`

Expected: PASS for the walkthrough assertion; footer/FAQ assertions may still fail until Task 4.

- [ ] **Step 6: Commit the product-story refinement**

```bash
git add src/components/AboutQpay.jsx src/components/AppShowcase.jsx src/components/ComingSoonSection.jsx src/components/MarketingCopy.test.jsx
git commit -m "style: refine QPay product journey"
```

### Task 4: Simplify trust sections, align FAQs, and update legal identity

**Files:**
- Modify: `src/components/Testimonials.jsx`
- Modify: `src/components/FAQS.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/components/PrivacyPolicyPage.jsx`
- Modify: `src/components/CookiesPolicyPage.jsx`

**Interfaces:**
- Consumes: Task 1 test files and Task 2 reduced-motion baseline.
- Produces: customer-facing trust/FAQ content and legal pages that consistently identify the operator.

- [ ] **Step 1: Simplify testimonial presentation without manufacturing proof**

Remove `framer-motion` usage from `Testimonials.jsx` when it only supplies reveal, pulse, hover-lift, or avatar-scale decoration. Keep the existing supplied testimonials but remove the "Active and growing community"/"Available all across Nigeria"/"Amazing user feedbacks" pills, five-star graphics, quote watermark, wave transition, orange gradient card, and remote-image animation. Use a simple three-column grid with subtle borders and an optional short `Customer perspectives` eyebrow.

- [ ] **Step 2: Update FAQ copy and accordion treatment**

Keep the existing `useState` accordion interaction and icon data. Change the first answer to this safe statement:

```js
answer: 'QPay helps customers prepare a secure QR payment from their phone. A participating merchant scans the QR, and QPay coordinates the transaction through its payment infrastructure.'
```

Replace every answer that promises money transfer with no internet, immediate payment confirmation, balance syncing, a temporary offline limit, or a universal security standard. Use precise, conditional language: QR details are generated on device; transaction outcome depends on successful processing and applicable security checks. Replace rounded/padded icon boxes, 2xl/3xl container radii, and the pill contact button with a divider-led accordion and a modest-radius CTA.

- [ ] **Step 3: Apply the agreed identity and clean footer presentation**

In `Footer.jsx`, change the copyright to:

```jsx
&copy; 2026 Modulo Technologies LTD. All rights reserved.
```

Keep QPay on link labels and `aria-label`s. Replace circular social controls, vertical hover lift, and shadow expansion with compact square-to-rounded controls that change border/text colour only.

In both policy components, define and reuse:

```js
const legalEntity = 'Modulo Technologies LTD, trading as QPay'
```

Use it in each company definition and first-use disclosure. Keep `QPay`/`QPay-NG` solely where it identifies the service, app, website, or policy brand. Update page intro text and meta description consistently. Do not change the listed support email, externally linked policy providers, existing privacy-rights text, or make new claims about licences, partners, retention, or data processing.

- [ ] **Step 4: Run copy, policy, and existing route tests**

Run: `npm test -- LegalIdentityPages.test.jsx MarketingCopy.test.jsx FoundersPage.test.jsx --run`

Expected: PASS. This confirms the legal entity appears in both policies, safe FAQ language is visible, the old key claim is absent, footer identity is correct, and the founders route remains covered.

- [ ] **Step 5: Commit trust, FAQ, footer, and legal work**

```bash
git add src/components/Testimonials.jsx src/components/FAQS.jsx src/components/Footer.jsx src/components/PrivacyPolicyPage.jsx src/components/CookiesPolicyPage.jsx src/components/LegalIdentityPages.test.jsx src/components/MarketingCopy.test.jsx
git commit -m "fix: align QPay trust and legal identity"
```

### Task 5: Align homepage metadata and run the complete verification pass

**Files:**
- Modify: `index.html`
- Modify: `src/components/MarketingCopy.test.jsx`
- Test: `src/components/FoundersPage.test.jsx`

**Interfaces:**
- Consumes: all visual/content components from Tasks 2–4.
- Produces: metadata that matches visible messaging and a validated production build.

- [ ] **Step 1: Write a failing static-metadata assertion**

Use `fs.readFileSync` in `MarketingCopy.test.jsx` to test the built-in homepage source rather than duplicating JSON-LD parsing in the UI layer:

```jsx
import { readFileSync } from 'node:fs'

it('does not advertise offline final settlement in homepage metadata', () => {
  const document = readFileSync(new URL('../../index.html', import.meta.url), 'utf8')
  expect(document).toContain('QR payments for low-connectivity moments')
  expect(document).not.toMatch(/send and receive money with zero internet/i)
  expect(document).not.toMatch(/payment confirms in seconds without internet/i)
})
```

- [ ] **Step 2: Run the metadata test to verify it fails**

Run: `npm test -- MarketingCopy.test.jsx --run`

Expected: FAIL because the existing title, description, and FAQ schema promise fully offline payments.

- [ ] **Step 3: Rewrite metadata and schema with the visible product language**

Update `<title>`, description, keywords, Open Graph, Twitter, Organisation/Website JSON-LD, and FAQ JSON-LD in `index.html` so they describe QPay as QR payment technology for low-connectivity moments. Use language such as:

```html
<meta name="description" content="QPay helps customers and merchants prepare secure QR payments in low-connectivity moments. Transaction processing is coordinated through QPay's payment infrastructure." />
```

Do not say QPay is a wallet, holds balances, sends money without internet, guarantees success, or settles payments offline.

- [ ] **Step 4: Run automated verification**

Run: `npm run lint && npm test -- --run && npm run build && git diff --check`

Expected: all commands exit 0; the production bundle is generated without warnings that indicate a broken import or missing asset.

- [ ] **Step 5: Run browser verification at all public routes**

Start the Vite dev server, then inspect `/`, `/privacy-policy`, `/cookies-policy`, and `/founders` at desktop and mobile widths. Verify section order, no horizontal overflow, nav/menu and contact modal work, FAQ toggles work, visible focus states work, and disabling/reducing motion leaves the content fully usable.

- [ ] **Step 6: Run final content scans**

Run:

```bash
rg -n -i 'qoay|three steps\. zero internet|zero failed transactions|sent means received|no bank account required|works completely offline|payment complete.*dead zone' src index.html
rg -n 'Modulo Technologies LTD, trading as QPay' src/components/PrivacyPolicyPage.jsx src/components/CookiesPolicyPage.jsx
```

Expected: the first scan has no obsolete live-copy matches; the second scan finds the shared legal entity in both policy components.

- [ ] **Step 7: Commit metadata and verification changes**

```bash
git add index.html src/components/MarketingCopy.test.jsx
git commit -m "fix: align QPay metadata with product messaging"
```
