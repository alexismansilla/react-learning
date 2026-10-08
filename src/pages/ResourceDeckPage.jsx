import { Link, useLocation } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';
import MindMap from '../components/MindMap.jsx';
import { findResource } from '../data/resources.js';
import { resourceDecks } from '../data/resourceDecks.js';

const ResourceDeckPage = () => {
  const { pathname } = useLocation();
  const resource = findResource(pathname);
  const slides = resourceDecks[resource.id];
  const requestedSlide = Number(pathname.split('/')[2] || 1);
  const slideIndex = Math.min(Math.max(requestedSlide, 1), slides.length) - 1;
  const [title, description, code] = slides[slideIndex];
  const exampleFile = resource.id === 'components-props'
    ? (slideIndex === 0 || slideIndex === 3 ? 'src/components/Boton.jsx' : 'src/App.jsx')
    : resource.id === 'props' && slideIndex === 2
      ? 'src/components/Saludo.jsx'
      : 'src/App.jsx';
  const previous = slideIndex ? `${resource.to}/${slideIndex}` : '/';
  const next = slideIndex < slides.length - 1 ? `${resource.to}/${slideIndex + 2}` : '/';

  return (
    <div className="page resource-deck">
      <span className="lesson-label">{resource.title} · Parte {slideIndex + 1} de {slides.length}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      {slideIndex === 0 && <MindMap title={resource.title} purpose={resource.purpose} guide={resource.guide} />}
      <div className="deck-dots" aria-label="Partes de la presentación">
        {slides.map((_, index) => <Link className={index === slideIndex ? 'deck-dots__active' : ''} to={index ? `${resource.to}/${index + 1}` : resource.to} key={index}>{index + 1}</Link>)}
      </div>
      <CodeBlock file={exampleFile}>{code}</CodeBlock>
      <div className="deck-callout"><b>Explícalo así:</b> {slideIndex === 4 ? 'Ahora cambia una palabra del ejemplo y mira qué ocurre.' : `Esta parte enseña: ${resource.topics[slideIndex] ?? resource.topics[0]}. Lee el código de arriba hacia abajo y relaciónalo con la idea.`}</div>
      <div className="navigation">
        <Link to={previous}>{slideIndex ? '← Parte anterior' : '← Recursos'}</Link>
        <Link to={next}>{slideIndex < slides.length - 1 ? 'Siguiente parte →' : 'Terminar presentación →'}</Link>
      </div>
    </div>
  );
};

export default ResourceDeckPage;
