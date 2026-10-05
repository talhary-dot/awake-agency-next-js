# Awake — Digital Agency & Creative Studio Template

A high-performance, modern, and aesthetic digital agency website template crafted with **React 19**, **Vite 8**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**.

Built for creative agencies, design studios, software consultancies, and freelancers looking for a production-ready website with slick animations, light/dark mode, and conversion-focused layouts.

---

## ✨ Features

- **⚡ Modern Tech Stack**: React 19, Vite 8, TypeScript, Tailwind CSS v4, and Oxlint.
- **🎨 Dark & Light Theme**: Built-in instant theme switcher with persistent preference and CSS variable color tokens.
- **🪄 Fluid Animations**: Staggered text reveals, smooth accordion expansions, count-up stats, and infinite brand marquees powered by `motion` (Framer Motion).
- **📱 Fully Responsive**: Thoughtfully engineered for mobile, tablet, and desktop with an animated mobile drawer navigation.
- **🧩 5 Complete Pages**:
  - **Home (`/`)**: Hero with blur reveal, Brand Marquee, About with stats, Services grid, Selected Work portfolio, Team showcase, Testimonials, Pricing plans, FAQ accordion, Awards, and CTA banner.
  - **Contact (`/contact`)**: Interactive inquiry form with project type and budget selectors, plus an integrated FAQ section.
  - **Sign In (`/signin`)**: Clean authentication layout with GitHub/Google OAuth buttons and credentials form.
  - **Sign Up (`/signup`)**: Streamlined onboarding flow with terms acceptance and social auth.
  - **404 Not Found (`*`)**: Custom illustrated error page with easy navigation back home.
- **⚙️ Centralized Content Config**: All agency info, navigation links, services, case studies, team members, testimonials, pricing, and FAQs are managed in a single file (`src/config/site.ts`).
- **🎯 Accessible & Clean Code**: Semantic HTML, accessible form inputs, and zero clutter.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | UI Library |
| **Vite 8** | Build tool & lightning-fast HMR |
| **TypeScript** | Type safety and autocompletion |
| **Tailwind CSS v4** | Modern utility-first styling with `@tailwindcss/vite` |
| **Motion (`motion/react`)** | Hardware-accelerated animations and gestures |
| **React Router DOM 7** | Client-side routing and navigation |
| **Lucide React** | Clean, consistent icons |
| **Shadcn UI & Base UI** | Primitive accessible components |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher (Node 20+ recommended)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/talhary-dot/awake-agency-next-js.git
   cd awake-agency-next-js
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-optimized static assets will be output to the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
├── public/                 # Static assets (images, logos, brand vectors)
├── src/
│   ├── assets/             # Internal asset files
│   ├── components/
│   │   ├── common/         # Shared components (Logo, ThemeToggle, etc.)
│   │   ├── layout/         # Header, Footer, MobileNav
│   │   ├── sections/       # Hero, Services, Work, Team, Pricing, FAQ, etc.
│   │   └── ui/             # Primitive UI elements (Button, Dialog, Accordion, etc.)
│   ├── config/
│   │   └── site.ts         # Central content & configuration file
│   ├── context/
│   │   └── ThemeContext.tsx# Dark/Light mode provider
│   ├── pages/              # Route pages (Home, Contact, SignIn, SignUp, NotFound)
│   ├── App.tsx             # Root router setup
│   ├── index.css           # Tailwind v4 theme tokens & CSS variables
│   └── main.tsx            # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Customization

### Changing Content & Details
Edit [`src/config/site.ts`](src/config/site.ts) to update:
- Agency name, social media profiles, and contact details
- Navigation items and footer links
- Services, case studies, and team members
- Pricing tiers and feature lists
- Testimonials and FAQs

### Adjusting Color Palette
Colors are defined using CSS variables in [`src/index.css`](src/index.css) for both light and dark modes:
```css
:root {
  --background: #ffffff;
  --foreground: #121212;
  --primary: #000000;
  /* ... */
}

.dark {
  --background: #0f1015;
  --foreground: #f4f4f5;
  --primary: #ffffff;
  /* ... */
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
