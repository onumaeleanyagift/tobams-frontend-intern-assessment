# Tobams Group Training and Development Website

A responsive implementation of the Tobams Group Training and Development website based on the provided Figma design.

## Overview

This project recreates the provided design for desktop and mobile screens using Next.js, React, TypeScript, and Tailwind CSS.

The implementation includes:

- Responsive navigation
- Hero section
- Training and Development services
- Learning Management System section
- Responsive images
- Reusable button component
- Desktop and mobile layouts
- Lucide icons
- Custom design colors and spacing

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Features

### Responsive Navbar

- Tobams Group logo
- Desktop navigation links
- Account button
- Take Assessment button
- Mobile menu button
- Fixed positioning
- Responsive typography and spacing

### Hero Section

- Responsive background image
- Dark image overlay
- Desktop and mobile headings
- Supporting description
- Book a Consultation CTA

### Training Services

The page includes:

- Corporate Trainings
- Personalised Individual Training
- Capacity Development

Each service includes:

- Title
- Description
- Training areas
- Responsive image
- Different image dimensions and border radii based on the design

The second service reverses the text and image positions on desktop to match the provided design.

On mobile, the content follows:

```text
Title
Image
Description
Training areas
```

### Learning Management System

The section introduces TG Academy and includes:

- Academy description
- Course list
- Responsive image
- Learn More CTA

Courses displayed include:

- Business Analysis
- Design Thinking
- Effective Communication
- Entrepreneurship
- Career Development
- Business Model

## Project Structure

```text
app/
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── layout/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── sections/
│   ├── Hero.tsx
│   ├── LearningManagement.tsx
│   └── TrainingServices.tsx
└── ui/
    └── Button.tsx

public/
└── images/
    ├── Logo.svg
    ├── hero.jpg
    ├── learning-management.jpg
    ├── corporate-training.jpg
    ├── individual-training.jpg
    ├── capacity-development.jpg
    ├── management-development.jpg
    └── transformation-hub.jpg
```

## Reusable Button Component

The project includes a reusable `Button` component.

It supports:

- Primary variant
- Pink variant
- White variant
- Link buttons
- Submit buttons

Example:

```tsx
<Button href="#consultation">Book a Consultation</Button>
```

## Styling

The project uses CSS variables for the main design colors.

```css
:root {
  --white: #ffffff;
  --black: #000000;
  --primary: #571244;
  --primary-dark: #2c0922;
  --secondary: #ef4353;
  --main-text: #151515;
  --subdued: #696969;
  --footer: #11040e;
}
```

## Responsive Design

The website supports the two required layouts:

- Mobile
- Desktop

Tailwind responsive utilities control layout, typography, spacing, image sizes, navigation, and content positioning.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Move into the project directory

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Design

Figma Design:

[Figma URL](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=1-1404&t=cHv6xTBj9mzTd76w-0)

## Live Website

[Live Deployment URL](https://tobams-frontend-intern-assessment-gamma.vercel.app/)

## GitHub Repository

[GitHub Repository URL](https://github.com/onumaeleanyagift/tobams-frontend-intern-assessment)

## Design Decisions

- Used reusable components for repeated UI elements.
- Used a data-driven approach for the training service sections.
- Used responsive Tailwind classes for mobile and desktop layouts.
- Used Next.js `Image` for image optimisation.
- Used Lucide React for interface icons.
- Used CSS variables for the main design colors.
- Used separate mobile and desktop image placements where the design required different content ordering.

## Technical Assumptions

- The assessment focuses on the provided desktop and mobile designs.
- Navigation links currently point to page sections.
- The mobile menu button provides the visual interface but does not include a menu interaction unless required by the assessment.
- Account and assessment actions use the provided button component.
- Content and images come from the supplied design assets.

## Known Issues

- Some navigation and CTA links currently point to placeholder section IDs.
- Interactive functionality such as the mobile navigation menu is not implemented unless required by the assessment.

## AI Use Disclosure

AI tools were used as a development support tool during the implementation.

They assisted with:

- Code explanations
- Debugging
- Component structure
- Tailwind CSS guidance
- README documentation

The final implementation was reviewed and adjusted manually to match the provided design.

## License

This project was created for assessment purposes.
