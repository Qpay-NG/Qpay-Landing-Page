# Founders Section Design

## Goal

Add a premium founders page for QPay that introduces the leadership team with portraits, names, roles, and short personal statements. The page should feel polished, editorial, and high-end, matching the rest of the site's premium visual direction.

## Placement

Create a dedicated founders page instead of placing this content on the landing page.

The landing page should only expose a footer link under `Company` that routes to the founders page.

Use a simple route path:

- `/founders`

## Content

### Page Header

- Eyebrow: `THE FOUNDERS`
- Heading: `Built by people who understand why payments cannot wait`
- Supporting text: a short premium intro explaining that QPay was created to make payments dependable in the real environments where network failure slows down commerce.

### Founder Cards

#### Olagbegi Eniola

- Role: `Co-Founder & CEO`
- Image source: user-provided image from `IMG_9010 2.HEIC`
- Statement: `I built this to solve a problem and it's great to see it solving real world problem.`

#### Nneji Joseph

- Role: `COO & Marketing Lead`
- Image source: user-provided image from `photo_2026-07-14 17.21.50.jpeg`
- Statement: `QPay is not just a product, it is a practical answer to the everyday payment barriers people face when connectivity fails.`

#### Jack Wilson

- Role: `CTO`
- Image source: designed fallback avatar styled like a refined default profile placeholder rather than a missing image.
- Statement: `Reliable offline payments are essential in a world where commerce should not pause because the network does.`

## Visual Direction

The section should feel more editorial than startup-generic.

- Soft light background that complements the site rather than flat white
- Large, elegant typography with strong hierarchy
- Spacious card layout with restrained shadows and crisp borders
- Portraits treated as premium assets with large crops and clean framing
- Quotes presented as founder statements, not testimonials
- Subtle orange accents only where they help emphasis

## Layout

Use a two-part page structure:

1. Intro block centered at the top
2. Three-card founder grid beneath it

### Desktop

- Three columns
- First two cards use real portrait images
- Third card uses a premium fallback avatar tile
- Cards align in height and feel balanced

### Mobile

- Stack cards vertically
- Preserve generous spacing and large imagery

## Founder Card Structure

Each card should include:

- Large portrait area
- Name
- Role
- Short statement

Optional premium touches:

- Light quote mark treatment
- Soft gradient or glow behind the portrait zone
- Slightly differentiated highlight treatment for the CEO card only if it remains subtle

## Fallback Avatar Treatment

Jack Wilson should not look like a broken or missing image.

Use a purposeful designed placeholder:

- Neutral gradient background
- Circular inner badge or silhouette treatment
- Initials `JW` or a refined abstract profile glyph
- Same dimensions and framing as the real portrait cards

This should feel intentional and premium, similar to a polished platform default avatar.

## Landing Page Navigation

- Add a `Founders` link under the footer `Company` column
- The footer link should route to `/founders`
- Do not duplicate founder content on the homepage

## Implementation Notes

- Create a dedicated `FoundersSection.jsx` component
- Prefer renaming this to something page-oriented such as `FoundersPage.jsx`
- Add routing logic in `App.jsx` so `/founders` renders the founders page
- Copy founder images into `public/` so the section has stable local asset paths
- Keep data in a small local array inside the component unless reuse becomes necessary
- Follow existing Tailwind patterns already used across the landing page

## Interaction

- Gentle reveal-on-scroll motion is acceptable
- Avoid loud hover effects
- Keep movement subtle and premium

## Accessibility

- All portraits need descriptive `alt` text using founder names
- Fallback avatar should also expose meaningful alt text for Jack Wilson
- Maintain readable contrast across text and background

## Testing

- Verify the new `/founders` page on mobile and desktop
- Verify the footer `Founders` link opens the page correctly
- Confirm image loading works for both founder photos and the fallback avatar
- Run a production build after implementation
