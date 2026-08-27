# QPay Visual Refinement and Legal Identity Design

## Goal

Refine the existing QPay landing site into a mature, restrained fintech experience without changing its page order, core product story, brand colours, routes, or contact behaviour. The result should feel credible for a Nigerian payments product, with product UI and clear hierarchy doing more of the visual work than decorative effects.

The work also corrects legal entity references and removes public claims that could suggest QPay independently holds customer funds or guarantees final settlement without network access.

## Scope

The current single-page flow remains:

1. Hero and contact action
2. Payment walkthrough and QPay explanation
3. Testimonials
4. Product showcase
5. Download / coming-soon section
6. FAQs
7. Footer

The existing `/privacy-policy`, `/cookies-policy`, and `/founders` routes remain available. No new pages, payment backend, account system, or data collection are added.

## Visual System

Establish a small set of shared visual decisions across the existing components:

- Use QPay orange sparingly for primary actions, active states, and short emphasis; use slate/near-black typography and off-white surfaces for the majority of the interface.
- Reduce default card and button rounding to modest radii. Preserve rounding only where it communicates a control or groups related content.
- Replace broad shadows, glow, glass surfaces, and decorative gradient treatments with borders, tonal backgrounds, spacing, and alignment.
- Use a consistent content width and vertical rhythm. Headings are compact and confident; body copy has a readable measure and comfortable leading.
- Restrict animation to short hover/focus feedback and meaningful state changes. Remove continuous spinning, pulsing, floating, and scroll-only movement. Add a reduced-motion override.
- Keep product screenshots as the main visual proof, without surrounding them with fake widgets or ornamental UI.

## Component Refinement

### Hero

Keep the existing navigation, headline concept, contact modal, and primary CTA. Simplify the navigation container and hero surfaces; retain one primary action and make secondary links visually quieter. The product image stays central, with less decorative layering and no non-functional animation.

Update the supporting claim to distinguish customer-device connectivity from settlement. The site may say QPay prepares and initiates a payment when the customer has poor connectivity; it must not state that settlement is fully offline or guaranteed.

### Payment Walkthrough, Product Showcase, and FAQ

Retain the existing sequence and screenshots. Use section framing, dividers, grid alignment, and controlled whitespace rather than a card around each detail.

Replace statements such as "Three Steps. Zero Internet", "payment complete in a dead zone", "zero failed transactions", "sent means received", "no bank account required", and "works completely offline". The new copy will describe secure QR payment preparation/initiation and a payment status that is completed through QPay's payment infrastructure. It will not make claims about customer balances, wallets, direct settlement, or underlying providers that are not implemented and verified.

FAQ and structured metadata must match these same claims so search snippets do not retain superseded messaging.

### Testimonials and Coming Soon

Preserve their position and content hierarchy, but reduce decorative treatments, oversized motifs, and motion. Retain testimonials only as the existing marketing content; the task does not invent claims or endorsements. Download copy is revised to remove unverified statements about universal offline operation, account requirements, or current app availability where applicable.

### Footer and Legal Page Presentation

Keep the link structure and contact addresses. Use the refined visual system: clean borders, modest interactive states, square-to-subtle social controls, and no lift/glow effects that distract from navigation.

## Legal Identity Updates

The legal identity in both legal policies and the footer becomes:

> Modulo Technologies LTD, trading as QPay

QPay remains the product and public-facing brand. This identity will replace the existing generic company definition and any incorrect `Qoay`/`Qpay` legal attribution. The footer copyright will be updated to Modulo Technologies LTD.

Privacy and Cookies policies will be updated for entity naming, policy titles/descriptions where required, and consistent contact wording. The policy is not rewritten to claim new compliance status, licences, banking partners, data transfers, retention practices, or payment-provider relationships that have not been confirmed. Existing legal substance is retained except where branding corrections or copy clarity are required.

## Metadata and Accessibility

- Update homepage SEO, Open Graph, Twitter, JSON-LD, and FAQ schema language to match the refined, non-guaranteed payment messaging.
- Preserve semantic headings, form labels, focus states, meaningful image alt text, and keyboard access.
- Ensure colour contrasts remain readable and all animation respects `prefers-reduced-motion`.

## Implementation Boundaries

- Do not replace the logo, main QPay colour identity, visual section order, routes, analytics/contact integration, or product screenshots.
- Do not add Paystack, Anchor, or any other infrastructure provider to public copy unless the company has approved that disclosure separately.
- Do not represent payment authorisation as settlement, or say QPay stores, holds, issues, or manages customer funds.
- Do not introduce new visual assets merely to decorate the page. Reuse existing product imagery where it supports the story.

## Validation

1. Automated tests continue to pass, including the existing founders test.
2. Production build succeeds.
3. Search verifies no `Qoay` typo remains and all legal entity references use the agreed identity.
4. Search verifies prohibited/obsolete claims are removed from rendered copy and metadata.
5. Browser review confirms desktop and mobile layouts retain the existing journey, have restrained motion, and have no visual overflow or inaccessible interactions.
6. Check `/`, `/privacy-policy`, `/cookies-policy`, and `/founders` directly.
