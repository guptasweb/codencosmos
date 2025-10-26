import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import DualIdentitySection from './components/DualIdentitySection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ExpertiseSection />
                <DualIdentitySection />
                <CallToActionSection />
              </>
            } />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
