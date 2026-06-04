# Prospera — Career Counselling & Guidance Portal

Prospera is a career counselling platform built for Indian high-schoolers choosing their academic stream and future career path. It offers expert-led guidance, stream exploration, curated resources, and easy session booking.

**Live:** [prospera-career.vercel.app](https://prospera-career.vercel.app)

---

## Features

- **Stream Exploration** — In-depth breakdown of Science, Commerce, and Arts streams with career opportunities, degrees, top colleges, and entrance exams
- **Expert Counselling** — One-on-one sessions with certified career counsellors via Calendly booking
- **Resource Portal** — Curated college lists, entrance exam guides, and a free Career Choice Analysis PDF
- **Interactive Games** — Stream-specific Hangman games to make learning engaging
- **AI Career Buddy** — AI-powered chatbot for instant career guidance
- **Showcase** — Hall of Fame partner institutions and sample counselling session video
- **Responsive Design** — Mobile-first layout with hamburger nav, works across all screen sizes

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion, MagicUI |
| Fonts | Sora (display) + Inter (body) |
| Booking | Calendly embed |
| Deployment | Vercel |

---

## Project Structure

```
app/
├── page.tsx              # Home — hero, services, process, testimonial, team
├── explore/
│   ├── page.tsx          # Stream explorer (Science / Commerce / Arts)
│   └── resource/
│       └── page.tsx      # Resource portal — colleges, exams, degrees
├── showcase/
│   └── page.tsx          # Partner institutions + sample session video
└── meeting/
    └── page.tsx          # Book a counselling session (Calendly)

components/
├── showcase-navbar.tsx   # Sticky navbar with mobile hamburger
├── footer.tsx            # Multi-column footer
├── ui/
│   └── placeholder-avatar.tsx  # Initials avatar for team cards
└── demos/                # Section-specific animation components
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build
npm run build
npm run start
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, 3-step process, testimonial, guarantees, team |
| `/explore` | Science / Commerce / Arts stream deep-dives with videos and games |
| `/explore/resource` | Career opportunities, degrees, colleges, and entrance exams by stream |
| `/showcase` | Partner school logos and a sample counselling session video |
| `/meeting` | Book a 1-on-1 counselling session via Calendly |

---

## Contact

- **Phone:** 853-498-2098
- **Email:** admin@prospera_career.in
- **Website:** [prospera-career.vercel.app](https://prospera-career.vercel.app)
