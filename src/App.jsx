import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import B2BPage from './pages/B2BPage';
import RenderArchitectsPage from './pages/RenderArchitectsPage';
import RenderLaunchesPage from './pages/RenderLaunchesPage';
import HomePage from './pages/HomePage';
import DesignSystemPage from './pages/DesignSystemPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/para-arquitetos" element={<B2BPage />} />
          <Route path="/render-arquitetos" element={<RenderArchitectsPage />} />
          <Route path="/render-lancamentos" element={<RenderLaunchesPage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
