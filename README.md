# Porfirio Jimenez Portfolio

A modern, performant portfolio website built with Next.js 14, featuring a masculine/industrial aesthetic and an AI-powered Q&A system. The site showcases Porfirio's engineering projects, automation expertise, and machine learning experience.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **AI Q&A Integration**: Interactive chat system that can answer questions about Porfirio's background
- **Resume Integration**: All content populated from Porfirio's actual resume data
- **Industrial Design**: Bold, masculine aesthetic with high-contrast dark theme
- **Mobile-First**: Responsive design optimized for all devices
- **Performance Optimized**: Lighthouse scores ≥95 on mobile
- **Accessible**: WCAG AA compliant with semantic HTML and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
anthony-portfolio/
├── src/
│   ├── app/
│   │   ├── ask-me/          # AI Q&A page
│   │   ├── globals.css      # Global styles and CSS variables
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # React components
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Experience.tsx   # Work experience
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Navigation.tsx   # Site navigation
│   │   ├── Projects.tsx     # Project showcase
│   │   └── Skills.tsx       # Technical skills
│   └── content/
│       └── config.ts        # Site configuration and content
├── public/
│   └── resume.pdf          # Porfirio's resume for download
└── extract_resume.py       # Script used to parse resume data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anthony-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ Editing Content

All site content is centralized in `src/content/config.ts` for easy editing:

### Personal Information
```typescript
export const siteConfig = {
  name: "Porfirio Jimenez",
  role: "Software Engineer (Full-Stack & ML)",
  email: "tj.jimenez03@gmail.com",
  phone: "201-230-4890",
  // ... other fields
}
```

### Adding/Editing Projects
```typescript
projects: [
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ["Python", "React", "etc"],
    github: "https://github.com/username/repo",
    live: "https://your-demo-url.com"
  }
]
```

### Updating Skills
```typescript
skills: [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "code" },
      // Add more skills
    ]
  }
]
```

### Resume Updates
To update the resume:
1. Replace `public/resume.pdf` with the new resume file
2. Update the resume data in `src/content/config.ts`
3. The AI Q&A system will automatically reference the updated information

## 🤖 AI Q&A System

The `/ask-me` page features an AI assistant that can answer questions about Porfirio's:
- Technical experience and projects
- Work history and achievements  
- Educational background
- Skills and expertise
- Athletics and personal interests

The AI responses are generated based on the resume data and site configuration, ensuring accurate and up-to-date information.

## 🎨 Design System

### Color Palette
```css
--bg: #0B0E11        /* Near-black charcoal */
--surface: #131820    /* Slate */
--text: #E6E9EF      /* Off-white */
--muted: #94A3B8     /* Cool gray */
--accent: #3B82F6    /* Electric blue */
```

### Typography
- **Headings**: Space Grotesk (bold, geometric)
- **Body**: Inter (clean, readable)

### Components
- Sharp corners and clean geometry
- High contrast for accessibility
- Subtle animations with reduced motion support
- Industrial/technical aesthetic

## 📱 Responsive Design

The site is built mobile-first with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

## ⚡ Performance

- **Lighthouse Scores**: ≥95 Performance, ≥95 Best Practices, ≥90 Accessibility, ≥90 SEO
- **Optimizations**: 
  - Next.js Image optimization
  - Tree-shaking for minimal bundle size
  - Efficient animations with Framer Motion
  - Semantic HTML for accessibility

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

```bash
# Or deploy via Vercel CLI
npm i -g vercel
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```

### Environment Variables

Create a `.env.local` file for local development:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

For production, set these in your deployment platform.

## 🧪 Testing

### Local Testing
```bash
# Build and test locally
npm run build
npm start

# Run linting
npm run lint
```

### Performance Testing
1. Open Chrome DevTools
2. Navigate to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, and SEO
4. Verify scores meet requirements (≥90-95)

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:
- Email: tj.jimenez03@gmail.com
- GitHub: [@Anthonyooo0](https://github.com/Anthonyooo0)

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by Porfirio Jimenez
