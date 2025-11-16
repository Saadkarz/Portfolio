# Saad Karzouz - AI & Data Science Portfolio 

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, high-performance portfolio website showcasing AI/ML projects, full-stack development skills, and professional experience.

[View Live Demo](https://portfolio-git-main-karzouz03-gmailcoms-projects.vercel.app?_vercel_share=EdRs8wM9bRbytwaBlSfJwWjaUIfY1TOe)  [Report Bug](https://github.com/Saadkarz/Portfolio/issues)  [Request Feature](https://github.com/Saadkarz/Portfolio/issues)

</div>

---

##  Features

<table>
<tr>
<td>

### Design
- **Dark Theme** with gradient accents
- **Smooth Animations** powered by Framer Motion
- **Responsive Design** for all screen sizes
- **Professional UI/UX** with attention to detail

</td>
<td>

### Performance
- **Next.js 15** App Router for optimal speed
- **Image Optimization** with Next/Image
- **Static Generation** for fast page loads
- **SEO Optimized** with proper meta tags

</td>
</tr>
</table>

## Tech Stack

```javascript
const techStack = {
  framework: "Next.js 15",
  language: "TypeScript",
  styling: "Tailwind CSS",
  animations: "Framer Motion",
  icons: "Lucide React",
  deployment: "Vercel"
}
```

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Saadkarz/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio in action!

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Saadkarz/Portfolio)

### Manual Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Your site is live!**

## Project Structure

```
Portfolio/
 src/
    app/
       layout.tsx       # Root layout with metadata
       page.tsx         # Home page
       globals.css      # Global styles
    components/
        Navigation.tsx   # Sticky navigation bar
        Hero.tsx         # Landing section with profile
        About.tsx        # About me section
        Skills.tsx       # Technical skills
        Experience.tsx   # Work experience
        Projects.tsx     # Featured projects
        Education.tsx    # Academic background
        Certifications.tsx # Certifications & courses
        Contact.tsx      # Contact information
 public/
    profile.png          # Profile picture
 next.config.js           # Next.js configuration
 tailwind.config.ts       # Tailwind CSS config
 tsconfig.json            # TypeScript config
```

## Portfolio Sections

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching introduction with profile picture and animated background |
| **About** | Professional background and expertise areas |
| **Skills** | Technical skills categorized by domain (AI/ML, Programming, Tools) |
| **Experience** | Professional work experience with detailed highlights |
| **Projects** | Featured projects including Shiha, FaceSmart, and more |
| **Education** | Academic qualifications and language proficiency |
| **Certifications** | Professional certifications and online courses |
| **Contact** | Multiple ways to connect (Email, LinkedIn, GitHub) |

## Customization

### Update Profile Picture
Replace `public/profile.png` with your own image

### Modify Content
Edit component files in `src/components/` to personalize:
- Update your name, title, and bio in `Hero.tsx`
- Add your skills in `Skills.tsx`
- Include your projects in `Projects.tsx`
- Update experience in `Experience.tsx`

### Change Colors
Modify the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#2E9EF7',      // Main accent color
  background: '#0d1117',   // Background
  surface: '#161b22',      // Card backgrounds
  text: '#c9d1d9',        // Text color
}
```

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **SEO Score**: 100

## Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Saad Karzouz** - AI & Data Science Engineer

- Portfolio: https://portfolio-git-main-karzouz03-gmailcoms-projects.vercel.app?_vercel_share=EdRs8wM9bRbytwaBlSfJwWjaUIfY1TOe
- LinkedIn: https://www.linkedin.com/in/saad-karzouz-65690629b
- GitHub: https://github.com/Saadkarz
- Email: karzouz03@gmail.com

---

<div align="center">

** Star this repo if you find it helpful!**

Built with Next.js  Deployed on Vercel

</div>
