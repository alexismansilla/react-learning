import { Link } from 'react-router-dom';
import MindMap from '../components/MindMap.jsx';
import ConceptMap from '../components/ConceptMap.jsx';
import { findResource } from '../data/resources.js';

const MapaRouterPage = () => {
  const router = findResource('/fundamentos');
  return (
    <div className="page page--router-map">
      <span className="lesson-label">Idea 02 · Entender</span>
      <h1>El mapa de<br />react-router-dom.</h1>
      <p>Ahora unimos el propósito del tema con los pasos que realiza React.</p>
      <MindMap {...router} />
      <ConceptMap title="La regla que debes recordar" steps={['Una URL', 'Una Route', 'Una página']} />
      <div className="navigation">
        <Link to="/fundamentos">← Anterior: Fundamentos</Link>
        <Link to="/instalacion">Siguiente: Instalación →</Link>
      </div>
    </div>
  );
};

export default MapaRouterPage;
