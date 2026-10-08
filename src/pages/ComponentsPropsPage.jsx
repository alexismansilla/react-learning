import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';
import ConceptMap from '../components/ConceptMap.jsx';
import LearningGuide from '../components/LearningGuide.jsx';
import { findResource } from '../data/resources.js';

const ComponentsPropsPage = () => (
  <div className="page components-props-lesson">
    <span className="lesson-label">Recurso 05 · Bases de React</span>
    <h1>Componentes y Props:<br />piezas que conversan.</h1>
    <p>Un componente es una pieza reutilizable. Las props son los datos que le enviamos.</p>
    <LearningGuide {...findResource('/componentes-props')} />

    <ConceptMap title="El viaje de un dato" steps={['App envía un nombre', 'Saludo recibe una prop', 'Saludo muestra el nombre']} />

    <h2>1. Creamos un componente</h2>
    <CodeBlock>{`function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}`}</CodeBlock>

    <h2>2. Le enviamos una prop</h2>
    <CodeBlock>{`<Saludo nombre="Antonia" />`}</CodeBlock>
    <div className="tip"><b>nombre</b> es la prop. Su valor es <b>"Antonia"</b>. Piensa en ella como una etiqueta en una caja.</div>

    <h2>3. Destructuring: una forma más corta</h2>
    <p>En lugar de escribir <code>props.nombre</code>, sacamos <code>nombre</code> directamente.</p>
    <CodeBlock>{`function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}`}</CodeBlock>
    <div className="compare-card"><span>Antes</span><code>props.nombre</code><b>→</b><span>Con destructuring</span><code>nombre</code></div>

    <div className="navigation"><Link to="/">← Volver a los recursos</Link></div>
  </div>
);

export default ComponentsPropsPage;
