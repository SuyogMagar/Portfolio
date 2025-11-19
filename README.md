# Suyog Magar - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This portfolio showcases the work of Suyog Magar, a backend-focused full-stack developer specializing in Java, Spring Boot, and React.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive**: Fully responsive layout that works seamlessly on all devices
- **Project Showcase**: Interactive project gallery with filtering and search capabilities
- **Contact Form**: Functional contact form with validation and rate limiting
- **Skills Display**: Comprehensive skills section with proficiency indicators
- **Analytics**: Built-in visitor tracking and analytics
- **Dark Mode**: Support for light and dark themes
- **SEO Optimized**: Meta tags, structured data, and sitemap generation
- **Performance**: Optimized images, lazy loading, and code splitting

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Headless UI

### Backend (API Routes)
- **API**: Next.js API Routes
- **Validation**: Zod schemas
- **Rate Limiting**: In-memory rate limiting
- **Contact Form**: Email notifications (configuration required)

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Projects pages
│   │   ├── skills/            # Skills page
│   │   ├── about/             # About page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   └── projects/          # Project-related components
│   ├── lib/
│   │   ├── api.ts             # API client configuration
│   │   ├── utils.ts           # Utility functions
│   │   └── validations.ts     # Form validation schemas
│   └── types/
│       └── portfolio.ts       # TypeScript type definitions
├── public/                    # Static assets
├── .env.local                 # Environment variables
├── .env.local.example         # Environment variables example
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your configuration:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=your-email@example.com
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📝 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact Form
CONTACT_EMAIL=your-email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com

# Social Media Links
GITHUB_URL=https://github.com/yourusername
LINKEDIN_URL=https://linkedin.com/in/yourusername
TWITTER_URL=https://twitter.com/yourusername

# Optional: Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
```

## 📊 Features Overview

### Project Showcase
- Grid layout with responsive design
- Filter by technology stack and category
- Search functionality
- Sort options (date, name, featured)
- Detailed project pages with case studies

### Contact Form
- Real-time validation with Zod
- Rate limiting to prevent spam
- Email notifications (setup required)
- Multiple inquiry types

### Skills Section
- Categorized skills display
- Proficiency indicators
- Experience tracking
- Technology icons

### Analytics
- Visitor tracking
- Page view analytics
- Daily statistics
- Referrer tracking

## 🛠️ Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

### Deployment Options

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

#### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🔧 Customization

### Adding Projects

Projects are currently stored as sample data in the API routes. To add your own projects:

1. Edit `src/app/api/projects/route.ts`
2. Add your project data to the `sampleProjects` array
3. Update project images in the `public/projects/` directory

### Styling

The project uses Tailwind CSS for styling. Customize the theme by:

1. Edit `tailwind.config.js` (if exists)
2. Modify colors and spacing in `src/app/globals.css`
3. Add custom utility classes as needed

### Contact Form

To enable email notifications:

1. Configure your preferred email service (SendGrid, Nodemailer, AWS SES)
2. Update the `sendNotificationEmail` function in `src/app/api/contact/route.ts`
3. Add email service credentials to environment variables

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design System

- **Primary Colors**: Blue and Purple gradient
- **Typography**: Geist Sans and Geist Mono
- **Spacing**: Tailwind CSS default spacing scale
- **Animations**: Framer Motion for smooth transitions

## 📈 Performance

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for fast loading
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: suyog.magar@example.com
- **Portfolio**: https://suyogmagar.com
- **GitHub**: https://github.com/suyogmagar
- **LinkedIn**: https://linkedin.com/in/suyogmagar

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
