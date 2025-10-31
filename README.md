# Portfolio Website

A modern, responsive portfolio website built with React, showcasing projects, experience, and professional achievements.

## Features

- **Home/Landing Page** - Eye-catching hero section with call-to-action buttons
- **About Me** - Professional bio with skills grid and technical expertise
- **Projects** - Interactive project cards with detailed modal views (Problem → Approach → Outcome format)
- **Experience** - Timeline display of work experience, internships, and programs
- **Conference Gallery** - Photo grid showcasing professional events and networking
- **Contact Section** - Multiple ways to connect (Email, LinkedIn, GitHub, Calendly)
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Update Your Information

1. **Home Component** ([src/components/Home.js](src/components/Home.js)):
   - Replace "Your Name" with your actual name
   - Update the tagline to reflect your professional focus
   - Add your resume PDF to the `public` folder

2. **About Component** ([src/components/About.js](src/components/About.js)):
   - Update the bio paragraphs with your personal story
   - Modify the skills arrays with your actual technical skills
   - Update the current role information

3. **Projects Component** ([src/components/Projects.js](src/components/Projects.js)):
   - Replace the sample projects with your actual projects
   - Add GitHub links, live demo URLs, and project thumbnails
   - Update tech stacks and project details

4. **Experience Component** ([src/components/Experience.js](src/components/Experience.js)):
   - Replace with your actual work experience and programs
   - Update dates, organizations, and descriptions

5. **Gallery Component** ([src/components/Gallery.js](src/components/Gallery.js)):
   - Add your conference photos to the `public/images` folder
   - Update event titles, locations, and descriptions

6. **Contact Component** ([src/components/Contact.js](src/components/Contact.js)):
   - Replace placeholder email with your actual email
   - Add your LinkedIn, GitHub, and Calendly links

7. **Footer Component** ([src/components/Footer.js](src/components/Footer.js)):
   - Update "Your Name" with your actual name

### Color Scheme

The primary color scheme uses a purple gradient (#667eea to #764ba2). To customize:

- Update gradient colors in:
  - [src/components/Home.css](src/components/Home.css)
  - [src/components/Contact.css](src/components/Contact.css)
- Update accent colors throughout component CSS files

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized and ready for deployment.

## Deployment

### Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify:
   - Drag and drop the build folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repo for automatic deployments

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## Project Structure

```
portfolio-website/
├── public/
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── Home.js & Home.css
│   │   ├── About.js & About.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Experience.js & Experience.css
│   │   ├── Gallery.js & Gallery.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Technologies Used

- React 18
- CSS3 with modern features (Grid, Flexbox, Animations)
- Responsive design principles
- Smooth scrolling navigation

## License

This project is open source and available for personal use.

## Support

For issues or questions, please open an issue in the repository.
