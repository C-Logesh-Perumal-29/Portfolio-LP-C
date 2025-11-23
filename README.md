# Portfolio Website - Logesh Perumal C

A modern, interactive portfolio website featuring a 3D landing page built with React, TypeScript, and Three.js.

## Features

- 🎨 **3D Landing Page** - Interactive 3D scene with animated geometric shapes using React Three Fiber
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🎭 **Smooth Animations** - Framer Motion animations throughout the site
- 🎯 **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast builds

## Sections

1. **Landing Page** - 3D animated hero section
2. **About Me** - Professional introduction and roles
3. **Internships** - Timeline of professional experiences
4. **Skills** - Categorized technical skills (AI/ML, Full Stack, Data Science)
5. **Projects** - Showcase of portfolio projects
6. **UI/UX Designs** - Design portfolio gallery
7. **Contact** - Contact form and social media links

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Three Fiber** - 3D graphics
- **Three.js** - 3D library
- **Framer Motion** - Animations
- **shadcn/ui** - UI components
- **Tailwind CSS** - Styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn UI components
│   ├── Navigation.tsx   # Sticky navigation bar
│   ├── Landing3D.tsx    # 3D landing page
│   ├── About.tsx        # About section
│   ├── Internships.tsx  # Internships timeline
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Projects grid
│   ├── UIDesigns.tsx    # UI/UX designs gallery
│   └── Contact.tsx      # Contact form
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Customization

### Update Personal Information

Edit the following files to update your information:
- `src/components/About.tsx` - Personal details
- `src/components/Internships.tsx` - Internship experiences
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Contact.tsx` - Contact information and social links

### Styling

The project uses Tailwind CSS with custom CSS variables defined in `src/index.css`. You can customize colors and themes by modifying the CSS variables.

## License

This project is open source and available under the MIT License.

