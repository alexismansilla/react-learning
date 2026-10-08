import { Link, useLocation } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';
import ConceptMap from '../components/ConceptMap.jsx';
import LearningGuide from '../components/LearningGuide.jsx';
import { findResource } from '../data/resources.js';

const lessons = {
  '/jsx': {
    label: 'Recurso 03 · Bases de React',
    title: <>JSX: escribir<br />lo que veremos.</>,
    intro: 'JSX parece HTML, pero vive dentro de un archivo JavaScript.',
    map: ['Escribimos una etiqueta', 'React la lee', 'Aparece en la pantalla'],
    code: `<h1>Hola, curso</h1>\n<p>Estoy aprendiendo React.</p>`,
    note: <>Usa <b>className</b> en vez de <b>class</b> para agregar estilos.</>,
  },
  '/props': {
    label: 'Recurso 04 · Bases de React',
    title: <>Props: enviar<br />datos a un componente.</>,
    intro: 'Una prop es un dato que un componente recibe, como un regalo con una etiqueta.',
    map: ['App envía un nombre', 'Saludo recibe la prop', 'Saludo muestra el nombre'],
    code: `function Saludo({ nombre }) {\n  return <h1>Hola, {nombre}</h1>;\n}\n\n<Saludo nombre="Camila" />`,
    note: <><b>nombre</b> puede cambiar. El mismo componente sirve para muchas personas.</>,
  },
};

const ConceptResourcePage = () => {
  const lesson = lessons[useLocation().pathname];
  const resource = findResource(useLocation().pathname);
  return (
    <div className="page concept-resource">
      <span className="lesson-label">{lesson.label}</span>
      <h1>{lesson.title}</h1>
      <p>{lesson.intro}</p>
      <LearningGuide {...resource} />
      <ConceptMap title="La idea en tres pasos" steps={lesson.map} />
      <h2>Ejemplo pequeño</h2>
      <CodeBlock>{lesson.code}</CodeBlock>
      <div className="tip">{lesson.note}</div>
      <div className="navigation"><Link to="/">← Volver a los recursos</Link></div>
    </div>
  );
};

export default ConceptResourcePage;
