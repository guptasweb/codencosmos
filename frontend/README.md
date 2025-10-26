# Shivani Gupta Portfolio Frontend

This is the React TypeScript frontend for Shivani Gupta's portfolio website.

## Features

- Modern React 18 with TypeScript
- Responsive design with mobile-first approach
- Beautiful gradient backgrounds and animations
- Contact form with backend integration
- Router-based navigation
- Component-based architecture

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Main hero section
│   ├── ExpertiseSection.tsx # Skills and expertise cards
│   ├── DualIdentitySection.tsx # Split-screen identity sections
│   ├── CallToActionSection.tsx # CTA with gradient background
│   ├── Footer.tsx      # Footer with social links
│   └── ContactForm.tsx # Contact form component
├── pages/              # Page components
│   └── ContactPage.tsx # Contact page
├── App.tsx            # Main app component with routing
├── index.tsx          # App entry point
└── index.css          # Global styles
```

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Backend Integration

The frontend connects to a Python FastAPI backend running on `http://localhost:8000`. Make sure the backend is running for full functionality.
