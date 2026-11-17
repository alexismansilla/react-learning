import { Link, useLocation } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';
import MindMap from '../components/MindMap.jsx';
import { findResource } from '../data/resources.js';
import { resourceDecks } from '../data/resourceDecks.js';

const finalChallenges = {
  state: 'Crea un contador con +1, −1 y Reiniciar. Usa actualizadores funcionales y no guardes valores derivados en el estado.',
  jsx: 'Renderiza una lista de tres cursos desde un arreglo. Cada tarjeta debe tener una key estable y mostrar un mensaje cuando la lista esté vacía.',
  props: 'Construye una tarjeta reutilizable que reciba título, nivel y una función onSelect. El componente padre debe decidir qué curso quedó seleccionado.',
  'components-props': 'Separa una página de perfil en Header, ProfileCard y ActionButton. Usa children o composición antes de agregar props booleanas.',
  vitest: 'Implementa una función normalizarEmail y escribe tests para espacios, mayúsculas y una entrada vacía.',
  forms: 'Crea un formulario de contacto con nombre y correo. Muestra errores junto a cada campo y bloquea el envío mientras la validación falla.',
  responsive: 'Diseña una grilla de tarjetas que use una columna en móvil, dos en tablet y columnas fluidas con minmax() en escritorio.',
  'layouts-router': 'Crea AppLayout con Navbar, Sidebar y Footer. Agrega Inicio y Contacto como rutas hijas y verifica que sólo Outlet cambie al navegar.',
  'navbar-test': 'Agrega un tercer enlace a Navbar y actualiza el helper y los casos para comprobar su ruta y su estado activo.',
  resend: 'Modifica enviarPostulacion(datos) para recibir nombre, correo y cargo por parámetro desde un formulario en vez de usar datosFake fijos.',
};

const ResourceDeckPage = () => {
  const { pathname } = useLocation();
  const resource = findResource(pathname);
  const slides = resourceDecks[resource.id];
  const requestedSlide = Number(pathname.split('/')[2] || 1);
  const slideIndex = Math.min(Math.max(requestedSlide, 1), slides.length) - 1;
  const [title, description, code] = slides[slideIndex];
  const exampleFile = resource.id === 'responsive'
    ? (slideIndex === 1 ? 'index.html' : 'src/App.css')
    : resource.id === 'forms'
    ? 'src/pages/ContactoPage.jsx'
    : resource.id === 'vitest'
    ? (slideIndex === 1 || slideIndex === 4 ? 'Terminal (raíz del proyecto)' : slideIndex === 3 ? 'src/sumar.test.js' : 'src/sumar.js')
    : resource.id === 'navbar-test'
    ? (slideIndex === 0 ? 'src/components/navbar.jsx' : slideIndex === 1 || slideIndex === 7 ? 'Terminal (raíz del proyecto)' : 'src/components/navbar.test.jsx')
    : resource.id === 'resend'
    ? (slideIndex === 0 ? 'Estructura de archivos (AquaChile)' : slideIndex === 1 ? 'Terminal (raíz del proyecto)' : slideIndex === 2 ? '.env' : slideIndex === 3 ? 'vite.config.js' : slideIndex === 4 ? 'src/templates/index.js' : slideIndex === 6 || slideIndex === 7 ? 'src/pages/HomePage.jsx' : 'src/services/resendService.js')
    : resource.id === 'components-props'
    ? (slideIndex === 0 || slideIndex === 3 ? 'src/components/Boton.jsx' : 'src/App.jsx')
    : resource.id === 'layouts-router'
    ? (slideIndex === 0 ? 'Estructura de carpetas' : slideIndex === 1 || slideIndex >= 5 ? 'src/App.jsx' : slideIndex === 2 ? 'src/layouts/AppLayout.jsx' : slideIndex === 3 ? 'src/components/Sidebar.jsx' : 'src/layouts/AppLayout.css')
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
      <CodeBlock file={exampleFile}>{code}</CodeBlock>
      <div className="deck-callout"><b>Explícalo así:</b> {slideIndex === 4 ? 'Ahora cambia una palabra del ejemplo y mira qué ocurre.' : `Esta parte enseña: ${resource.topics[slideIndex] ?? resource.topics[0]}. Lee el código de arriba hacia abajo y relaciónalo con la idea.`}</div>
      {slideIndex === slides.length - 1 && resource.links && <ul aria-label="Recursos oficiales">
        {resource.links.map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noreferrer">{link.label}</a></li>)}
      </ul>}
      {slideIndex === slides.length - 1 && resource.id !== 'layouts-router' && <aside className="deck-callout"><b>Reto final:</b> {finalChallenges[resource.id]}</aside>}
      <div className="navigation">
        <Link to={previous}>{slideIndex ? '← Parte anterior' : '← Recursos'}</Link>
        <Link to={next}>{slideIndex < slides.length - 1 ? 'Siguiente parte →' : 'Terminar presentación →'}</Link>
      </div>
    </div>
  );
};

export default ResourceDeckPage;
