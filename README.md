# QPay Landing Page

Marketing landing page for QPay, built with React, Vite, Tailwind CSS, GSAP, and Framer Motion.

## Scripts

- `npm run dev` starts the local Vite dev server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across the project.

## Project Structure

- `src/App.jsx` composes the landing page sections.
- `src/components/` contains the page sections and shared UI helpers.
- `src/assets/` stores imported app assets.
- `public/` stores static images served directly by Vite.

## Notes

- The contact modal is shared across sections through a small custom event helper in `src/utils/contactModal.js`.
- Store badge clicks currently route visitors into the contact flow so they can request access without changing the page design.

## Contact and waitlist email setup

The contact form and waitlist use the same Vercel Function at `/api/contact`. Configure these server-side environment variables in the deployment project:

- `RESEND_API_KEY` — a Resend API key.
- `QPAY_CONTACT_FROM_EMAIL` — a sender address from a domain verified in Resend.
- `QPAY_CONTACT_TO_EMAIL` — optional recipient address; defaults to `support@qpay-ng.com`.

Do not use `VITE_` for these values because Vite variables are exposed in the browser. After adding the variables, redeploy the site so the function can send submissions.

During local development, Vite proxies `/api/contact` to the same handler and loads these values from `.env` for the server process.
