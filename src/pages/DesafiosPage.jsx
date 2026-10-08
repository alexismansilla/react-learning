import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';

const DesafiosPage = () => {
  return (
    <div className="page">
      <span className="lesson-label">Reto final</span>
      <h1>Reto: crea una<br />segunda página.</h1>
      <p>Solo necesitamos una página, una ruta y un enlace. Repite la receta sin copiar a ciegas.</p>
      <div className="term-grid"><span><b>1. Crea</b> ContactPage.jsx</span><span><b>2. Agrega</b> una Route</span><span><b>3. Escribe</b> un Link</span><span><b>4. Prueba</b> el clic y escribe una URL inventada</span></div>
      <h2>Pista</h2>
      <CodeBlock file="src/App.jsx">{`<Route path="/contact" element={<ContactPage />} />`}</CodeBlock>
      <p>Para completar el reto, prueba el enlace, escribe <code>/contact</code> directamente en la URL y visita una dirección inventada. Debes poder volver al inicio desde la página 404.</p>

      <div className="navigation">
        <Link to="/resumen">← Anterior: Resumen</Link>
        <Link to="/">Volver a la página principal</Link>
      </div>
    </div>
  );
};

export default DesafiosPage;
