# Tobams Group Training and Development Website

A responsive implementation of the Tobams Group Training and Development page based on the provided Figma design for the Frontend Intern Assessment.

## Overview

This project recreates the provided Tobams Group Training and Development design using Next.js, React, TypeScript, and Tailwind CSS.

The implementation focuses on:

- Figma-based layout, spacing, typography, colors, and image styling
- Responsive behavior across mobile, tablet, and desktop screens
- Reusable React components
- Semantic HTML and accessible interactive elements
- Optimized images with Next.js Image
- Reusable button variants and link support

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Icons

## Features

### Responsive Navbar

- Tobams Group logo
- Desktop navigation links
- Account button
- Take Assessment button
- Mobile menu button
- Fixed navigation
- Responsive typography and spacing
- Hover and focus states for navigation links

### Hero Section

- Responsive background image
- 70% black overlay
- Desktop and mobile headings
- Supporting description
- Book a Consultation CTA
- Responsive sizing and spacing based on the Figma design

### Learning Management System

The section introduces TG Academy and includes:

- Responsive image
- Academy description
- Course list
- Learn More CTA

Courses displayed include:

- Business Analysis
- Design Thinking
- Effective Communication
- Entrepreneurship
- Career Development
- Business Model

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
- Figma-based image dimensions and individual corner radii

On desktop, the second service reverses the image and text positions to match the design.

On mobile, the content follows:

```text
Title
Image
Description
Training areas
```

### Management Development Program

Includes:

- Management Development heading and description
- Responsive image
- Four management development features
- Learn More CTA
- Responsive desktop and mobile layouts

### Transformation Hub

Includes:

- CEO introduction label
- Transformation Hub heading and description
- Responsive image
- Six feature items
- Learn More CTA
- Responsive desktop and mobile layouts

### Training The Consultant

Includes:

- Section heading and supporting text
- Consultant training description
- Four training programme benefits
- Learn More CTA
- Two-column desktop layout
- Single-column mobile layout

### Consultation CTA

Includes:

- Responsive call-to-action section
- Desktop CTA copy
- Mobile CTA copy
- Book a Consultation button

### Testimonials

Includes:

- Reusable testimonial cards
- Customer names and roles
- Profile images
- Responsive card layout
- Static previous and next controls

The testimonial controls are visual only because the assessment focuses on static page implementation.

### Footer

Includes:

- Footer CTA
- Tobams Group branding
- Company description
- Social links
- What We Do links
- Company links
- Solution links
- Registered office information
- Contact information
- Legal links
- Copyright information

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
│   ├── TrainingServices.tsx
│   ├── ManagementDevelopment.tsx
│   ├── TransformationHub.tsx
│   ├── ConsultantTraining.tsx
│   ├── ConsultationCTA.tsx
│   └── Testimonials.tsx
└── ui/
    ├── Button.tsx
    └── TestimonialCard.tsx

public/
└── images/
    ├── Logo.svg
    ├── hero.jpg
    ├── learning-management.jpg
    ├── corporate-training.jpg
    ├── individual-training.jpg
    ├── capacity-development.jpg
    ├── management-development.jpg
    ├── transformation-hub.jpg
    ├── aisha-yusuf.png
    ├── john-davies.png
    ├── chinonso-nwankwo.png
    └── sarah-johnson.png
```

## Reusable Button Component

The project includes a reusable `Button` component used across the page.

It supports:

- Primary variant
- Pink variant
- White variant
- Link buttons
- Standard buttons
- Submit buttons

Example:

```tsx
<Button href="#consultation">
  Book a Consultation
</Button>
```

Variant example:

```tsx
<Button href="#assessment" variant="pink">
  Take Assessment
</Button>
```

## Typography

The design uses Nunito Sans.

The font loads through `next/font/google` and applies across the application.

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

Tailwind CSS utility classes handle layout, spacing, typography, colors, borders, and responsive behavior.

## Responsive Design

The assessment requires the page to work at:

- 425px mobile
- 768px tablet
- 1280px and above desktop

Tailwind responsive utilities control:

- Layout changes
- Typography
- Spacing
- Image sizes
- Navigation visibility
- Content ordering
- Button sizing
- Section spacing

No custom media queries were used.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/onumaeleanyagift/tobams-frontend-intern-assessment.git
```

### 2. Move into the project directory

```bash
cd tobams-frontend-intern-assessment
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

https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=1-1404&t=cHv6xTBj9mzTd76w-0

## Live Website

https://tobams-frontend-intern-assessment-gamma.vercel.app/

## GitHub Repository

https://github.com/onumaeleanyagift/tobams-frontend-intern-assessment

## Design Decisions

- Used reusable components for repeated UI patterns.
- Used a data-driven approach for repeated training and testimonial content.
- Used Tailwind responsive utilities instead of custom media queries.
- Used `next/image` for image optimization.
- Used `next/font` for Nunito Sans.
- Used Lucide React for interface icons.
- Used React Icons for social media brand icons.
- Used CSS variables for repeated design colors.
- Used separate mobile and desktop image placements where the design changes content order.
- Matched image dimensions and individual corner radii from the Figma design where those values were available.
- Kept the testimonial controls visual because the assessment specifies a static page implementation.

## Technical Assumptions

- The assessment focuses on static page implementation and visual fidelity.
- Navigation links use page-section anchors or placeholder destinations where no destination page was provided in the assessment.
- The mobile menu button is implemented visually because the assessment does not require a working menu interaction.
- Testimonial previous and next controls are visual only because the assessment is a static page.
- Account, assessment, consultation, and Learn More actions use the reusable button component.
- Content and images come from the supplied Figma design and assets.

## Known Issues

- Some navigation and CTA links use section anchors or placeholder destinations because no additional pages were provided in the assessment.
- The mobile navigation menu does not open a separate menu.
- Testimonial controls do not change the displayed testimonial because no carousel functionality is required for the static page.

## AI Use Disclosure

ChatGPT was used as a development support tool during the implementation.

It assisted with:

- Code explanations
- Debugging
- Component structure
- Tailwind CSS guidance
- Responsive layout guidance
- README documentation

The implementation, Figma measurements, design decisions, assets, and final styling were reviewed and adjusted manually.

## License

This project was created for assessment purposes.