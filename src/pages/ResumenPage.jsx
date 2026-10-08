import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';

const ResumenPage = () => {
  return (
    <div className="page">
      <span className="lesson-label">Resumen</span>
      <h1>Las 4 piezas<br />del puzzle.</h1>
      
      <p>Si entiendes estas cuatro piezas, ya puedes crear tu primer sitio con páginas.</p>
      <div className="term-grid term-grid--large"><span><b>BrowserRouter</b> activa las rutas</span><span><b>Routes</b> reúne las reglas</span><span><b>Route</b> une URL y página</span><span><b>Link</b> permite viajar</span></div>
      <CodeBlock file="src/App.jsx">{`<Route path="/contact" element={<ContactPage />} />`}</CodeBlock>

      <div className="navigation">
        <Link to="/implementacion">← Anterior: Implementación</Link>
        <Link to="/desafios">Siguiente: Desafíos Prácticos →</Link>
      </div>
    </div>
  );
};

export default ResumenPage;
