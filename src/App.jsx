import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import B2BPage from './pages/B2BPage';
import RenderArchitectsPage from './pages/RenderArchitectsPage';
import RenderLaunchesPage from './pages/RenderLaunchesPage';

const HomePage = () => (
  <>
    <div className="pt-20">
      <h1 className="text-center text-4xl mt-20">Home Page Placeholder</h1>
      <p className="text-center text-gray-500 mt-4">Redirecionando para as novas páginas...</p>
    </div>
  </>
);

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
