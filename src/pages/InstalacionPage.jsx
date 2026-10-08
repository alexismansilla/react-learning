import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';

const InstalacionPage = () => {
  return (
    <div className="page">
      <span className="lesson-label">Idea 02 · Instalar</span>
      <h1>Primero, agregamos<br />la herramienta.</h1>
      <p>En la terminal del proyecto escribe un solo comando.</p>
      <CodeBlock file="Terminal (raíz del proyecto)">npm install react-router-dom</CodeBlock>
      <div className="tip"><b>¿Terminal?</b> Es la ventana donde escribimos instrucciones para el computador.</div>
      <h2>Después importa lo que usarás</h2>
      <CodeBlock file="src/App.jsx">{`import { BrowserRouter, Routes, Route } from 'react-router-dom';`}</CodeBlock>
      <p><code>BrowserRouter</code> debe envolver la aplicación una sola vez. Desde ahí, <code>Routes</code> elige la coincidencia más específica y <code>Route</code> define qué pantalla se renderiza.</p>

      <div className="navigation">
        <Link to="/mapa-router">← Anterior: Mapa mental</Link>
        <Link to="/estructura">Siguiente: Estructura del Proyecto →</Link>
      </div>
    </div>
  );
};

export default InstalacionPage;
