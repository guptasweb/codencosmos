import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import DualIdentitySection from './components/DualIdentitySection';
import CallToActionSection from './components/CallToActionSection';
import InfoFooter from './components/InfoFooter';
import ContactPage from './pages/ContactPage';
import TechPortfolioPage from './pages/TechPortfolioPage';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={
              <main className="flex-grow">
                <DualIdentitySection />
              </main>
            } />
            <Route path="/contact" element={
              <main className="flex-grow">
                <ContactPage />
              </main>
            } />
            <Route path="/tech-portfolio" element={
              <main className="flex-grow">
                <TechPortfolioPage />
              </main>
            } />
          </Routes>
          <InfoFooter />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
