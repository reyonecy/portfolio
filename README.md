# Reyone Chaudhary - Portfolio

A clean, minimalistic, and professional portfolio website showcasing my work in Data Science, AI, and Software Development.

## Features

- **Hero Section** - Professional introduction with headline and CTAs
- **About Me** - Personal narrative and background
- **Featured Projects** - Showcase of key projects with elegant cards
- **Skills** - Organized by category (Data, AI/ML, Web Dev, Tools)
- **Journey Timeline** - Education and career milestones
- **Certifications** - Filterable certification cards
- **Education** - Academic background with coursework
- **Contact** - Contact form with social links

## Tech Stack

- **Next.js 15** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Subtle animations
- **Lucide React** - Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/reyonecy/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Custom Domain Setup

1. In Vercel, go to your project settings
2. Add your custom domain (e.g., `yourname.com.np`)
3. Update DNS records at your domain registrar:
   - Add A record pointing to Vercel's IP
   - Add CNAME for `www` subdomain
4. SSL is automatically configured by Vercel

## Project Structure

```
app/
  layout.tsx      # Root layout with fonts
  page.tsx        # Main page
  globals.css     # Global styles

components/
  Navbar.tsx      # Navigation component
  Footer.tsx      # Footer component

sections/
  Hero.tsx        # Hero section
  About.tsx       # About section
  Projects.tsx    # Projects section
  Skills.tsx      # Skills section
  Journey.tsx      # Journey timeline
  Certifications.tsx
  Education.tsx
  Contact.tsx

lib/
  data.ts         # Portfolio data
  animations.tsx  # Framer Motion components

types/
  index.ts        # TypeScript interfaces
```

## Customization

Update your personal information in `lib/data.ts`:
- Personal details
- Projects
- Skills
- Certifications
- Education
- Experience

## License

MIT License

## Contact

- Email: reyonechaudhary@gmail.com
- LinkedIn: [reyone-chaudhary-359038271](https://www.linkedin.com/in/reyone-chaudhary-359038271/)
- GitHub: [@reyonecy](https://github.com/reyonecy)
