import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';

const ImplementacionPage = () => {
  return (
    <div className="page">
      <span className="lesson-label">Idea 04 · Crear rutas</span>
      <h1>Conectamos una URL<br />con una página.</h1>
      
      <p>Lee cada línea de arriba hacia abajo. No necesitas memorizarla todavía.</p>

      <h2>La receta mínima</h2>
      <CodeBlock file="src/App.jsx">{`import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}</CodeBlock>

      <h2>Una ruta nueva</h2>
      <CodeBlock file="src/pages/HomePage.jsx">{`import { Link } from 'react-router-dom';

<Link to="/contact">Ir a contacto</Link>`}</CodeBlock>

      <div className="navigation">
        <Link to="/estructura">← Anterior: Estructura del Proyecto</Link>
        <Link to="/resumen">Siguiente: Resumen →</Link>
      </div>
    </div>
  );
};

export default ImplementacionPage;
