import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';

const ImplementacionPage = () => {
  return (
    <div className="page">
      <span className="lesson-label">Idea 04 · Crear rutas</span>
      <h1>Conectamos una URL<br />con una página.</h1>
      
      <p>Lee cada línea de arriba hacia abajo. No necesitas memorizarla todavía.</p>

      <h2>La receta completa</h2>
      <CodeBlock file="src/App.jsx">{`import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}</CodeBlock>

      <h2>El enlace que cambia de página</h2>
      <CodeBlock file="src/pages/HomePage.jsx">{`import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main>
      <h1>Inicio</h1>
      <Link to="/contact">Ir a contacto</Link>
    </main>
  );
}

export default HomePage;`}</CodeBlock>
      <p><code>Link</code> cambia la URL sin recargar toda la aplicación. Para moverte entre páginas de React usa <code>Link</code>; reserva <code>&lt;a href&gt;</code> para sitios externos.</p>

      <div className="navigation">
        <Link to="/estructura">← Anterior: Estructura del Proyecto</Link>
        <Link to="/resumen">Siguiente: Resumen →</Link>
      </div>
    </div>
  );
};

export default ImplementacionPage;
