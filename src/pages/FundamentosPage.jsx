import React from 'react';
import { Link } from 'react-router-dom';
import ConceptMap from '../components/ConceptMap.jsx';
import LearningGuide from '../components/LearningGuide.jsx';
import { findResource } from '../data/resources.js';

const FundamentosPage = () => {
  return (
    <div className="page page--fundamentos">
      <span className="lesson-label">Idea 01 · Navegar</span>
      <h1>Una URL puede<br />mostrar una página.</h1>
      <p>React Router interpreta la URL, muestra el componente correspondiente y conserva el historial del navegador para avanzar y retroceder sin recargar toda la aplicación.</p>
      <LearningGuide {...findResource('/fundamentos')} />
      <ConceptMap title="¿Qué ocurre al hacer clic?" steps={['El estudiante hace clic', 'La URL cambia', 'React muestra una página']} />
      <h2>Cuatro palabras que usaremos</h2>
      <div className="term-grid">
        <span><b>URL</b> la dirección y el estado navegable</span><span><b>Ruta</b> una regla de coincidencia</span>
        <span><b>Página</b> un componente de pantalla</span><span><b>Link</b> cambia de ruta sin recargar</span>
      </div>

      <div className="navigation">
        <Link to="/">← Volver a la página principal</Link>
        <Link to="/mapa-router">Siguiente: Mapa mental →</Link>
      </div>
    </div>
  );
};

export default FundamentosPage;
