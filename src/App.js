import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FundamentosPage from './pages/FundamentosPage';
import InstalacionPage from './pages/InstalacionPage';
import EstructuraPage from './pages/EstructuraPage';
import ImplementacionPage from './pages/ImplementacionPage';
import ResumenPage from './pages/ResumenPage';
import DesafiosPage from './pages/DesafiosPage';

function App() {
  return (
    <Router>
      <div className="App" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fundamentos" element={<FundamentosPage />} />
          <Route path="/instalacion" element={<InstalacionPage />} />
          <Route path="/estructura" element={<EstructuraPage />} />
          <Route path="/implementacion" element={<ImplementacionPage />} />
          <Route path="/resumen" element={<ResumenPage />} />
          <Route path="/desafios" element={<DesafiosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;