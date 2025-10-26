import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-900">Shivani Gupta</h1>
          </div>
        </header>
        
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Where Code Meets Consciousness
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm Shivani, a software engineer who builds systems for both technology and humanity.
            </p>
          </div>
        </main>
        
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2025 Shivani Gupta. Built with intention.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
