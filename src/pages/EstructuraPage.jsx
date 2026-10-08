import React from 'react';
import { Link } from 'react-router-dom';
import ConceptMap from '../components/ConceptMap.jsx';
import CodeBlock from '../components/CodeBlock.jsx';

const EstructuraPage = () => {
  return (
    <div className="page">
      <span className="lesson-label">Idea 03 · Ordenar</span>
      <h1>Cada página es<br />un archivo.</h1>
      <p>Guardamos las pantallas dentro de la carpeta <code>pages</code>.</p>
      <CodeBlock>{`src/
├── pages/
│   ├── HomePage.jsx
│   └── ContactPage.jsx
└── App.jsx`}</CodeBlock>
      <ConceptMap title="Relación entre archivos" steps={['App.jsx organiza', 'pages/ guarda pantallas', 'Cada pantalla se muestra en una URL']} />

      <div className="navigation">
        <Link to="/instalacion">← Anterior: Instalación</Link>
        <Link to="/implementacion">Siguiente: Implementación →</Link>
      </div>
    </div>
  );
};

export default EstructuraPage;
