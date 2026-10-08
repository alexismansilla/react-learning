import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';

const DesafiosPage = () => {
  return (
    <div className="page">
      <span className="lesson-label">Ahora tú</span>
      <h1>Reto: crea una<br />segunda página.</h1>
      <p>Solo necesitamos una página, una ruta y un enlace.</p>
      <div className="term-grid"><span><b>1. Crea</b> ContactPage.jsx</span><span><b>2. Agrega</b> una Route</span><span><b>3. Escribe</b> un Link</span><span><b>4. Prueba</b> el clic</span></div>
      <h2>Pista</h2>
      <CodeBlock file="src/App.jsx">{`<Route path="/contact" element={<ContactPage />} />`}</CodeBlock>

      <div className="navigation">
        <Link to="/resumen">← Anterior: Resumen</Link>
        <Link to="/">Volver a la página principal</Link>
      </div>
    </div>
  );
};

export default DesafiosPage;
