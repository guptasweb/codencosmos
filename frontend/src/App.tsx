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
import MatrixPortfolioPage from './pages/MatrixPortfolioPage';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Matrix Portfolio - Main Page */}
          <Route path="/" element={<MatrixPortfolioPage />} />
          
          {/* Legacy pages - keeping for reference */}
          <Route path="/legacy" element={
            <div className="flex flex-col min-h-screen bg-background">
              <Header />
              <main className="flex-grow">
                <DualIdentitySection />
              </main>
              <InfoFooter />
            </div>
          } />
          <Route path="/contact" element={
            <div className="flex flex-col min-h-screen bg-background">
              <Header />
              <main className="flex-grow">
                <ContactPage />
              </main>
              <InfoFooter />
            </div>
          } />
          <Route path="/tech-portfolio" element={
            <div className="flex flex-col min-h-screen bg-background">
              <Header />
              <main className="flex-grow">
                <TechPortfolioPage />
              </main>
              <InfoFooter />
            </div>
          } />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
