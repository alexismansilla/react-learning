import { Link, useLocation } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';
import MindMap from '../components/MindMap.jsx';
import { findResource } from '../data/resources.js';
import { resourceDecks } from '../data/resourceDecks.js';

const intermediateNotes = {
  state: 'Evita guardar valores que puedes calcular desde otros datos. Cuando el nuevo valor depende del anterior, usa el actualizador funcional: setCount((count) => count + 1).',
  jsx: 'Cuando renderices listas, cada elemento necesita una key estable. También separa condiciones complejas antes del return para que el JSX siga siendo legible.',
  props: 'Las props son de solo lectura. Para que un hijo provoque un cambio, recibe una función callback y deja el estado en el componente que realmente lo necesita.',
  'components-props': 'Prefiere composición antes que componentes demasiado configurables: children y callbacks suelen comunicar mejor la intención que una lista larga de props booleanas.',
  'layouts-router': 'El layout debe ser responsable de la estructura compartida, no de los datos de cada página. Outlet reduce duplicación y las rutas hijas mantienen el cambio de contenido explícito.',
  vitest: 'Un test útil cubre comportamiento y bordes: el caso esperado, una entrada límite y el error relevante. Evita probar detalles internos de implementación.',
  forms: 'Valida al enviar, muestra el error junto al campo y controla el estado de envío. Así evitas dobles envíos y mensajes que no explican cómo corregirse.',
  responsive: 'Diseña con límites, no con tamaños fijos: usa minmax(), clamp() y contenedores fluidos para que el layout responda a su contenido, no sólo a un breakpoint.',
};

const finalChallenges = {
  state: 'Crea un contador con +1, −1 y Reiniciar. Usa actualizadores funcionales y no guardes valores derivados en el estado.',
  jsx: 'Renderiza una lista de tres cursos desde un arreglo. Cada tarjeta debe tener una key estable y mostrar un mensaje cuando la lista esté vacía.',
  props: 'Construye una tarjeta reutilizable que reciba título, nivel y una función onSelect. El componente padre debe decidir qué curso quedó seleccionado.',
  'components-props': 'Separa una página de perfil en Header, ProfileCard y ActionButton. Usa children o composición antes de agregar props booleanas.',
  vitest: 'Implementa una función normalizarEmail y escribe tests para espacios, mayúsculas y una entrada vacía.',
  forms: 'Crea un formulario de contacto con nombre y correo. Muestra errores junto a cada campo y bloquea el envío mientras la validación falla.',
  responsive: 'Diseña una grilla de tarjetas que use una columna en móvil, dos en tablet y columnas fluidas con minmax() en escritorio.',
  'layouts-router': 'Crea AppLayout con Navbar, Sidebar y Footer. Agrega Inicio y Contacto como rutas hijas y verifica que sólo Outlet cambie al navegar.',
};

const ResourceDeckPage = () => {
  const { pathname } = useLocation();
  const resource = findResource(pathname);
  const slides = resourceDecks[resource.id];
  const requestedSlide = Number(pathname.split('/')[2] || 1);
  const slideIndex = Math.min(Math.max(requestedSlide, 1), slides.length) - 1;
  const [title, description, code] = slides[slideIndex];
  const currentTopic = resource.topics[Math.min(slideIndex, resource.topics.length - 1)];
  const exampleFile = resource.id === 'responsive'
    ? (slideIndex === 1 ? 'index.html' : 'src/App.css')
    : resource.id === 'forms'
    ? 'src/pages/ContactoPage.jsx'
    : resource.id === 'vitest'
    ? (slideIndex === 1 || slideIndex === 4 ? 'Terminal (raíz del proyecto)' : slideIndex === 3 ? 'src/sumar.test.js' : 'src/sumar.js')
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
      <aside className="deepen-card">
        <span>Para profundizar · {currentTopic}</span>
        <p>{intermediateNotes[resource.id]}</p>
      </aside>
      <div className="deck-callout"><b>Explícalo así:</b> {slideIndex === 4 ? 'Ahora cambia una palabra del ejemplo y mira qué ocurre.' : `Esta parte enseña: ${resource.topics[slideIndex] ?? resource.topics[0]}. Lee el código de arriba hacia abajo y relaciónalo con la idea.`}</div>
      {slideIndex === slides.length - 1 && resource.id !== 'layouts-router' && <aside className="deck-callout"><b>Reto final:</b> {finalChallenges[resource.id]}</aside>}
      <div className="navigation">
        <Link to={previous}>{slideIndex ? '← Parte anterior' : '← Recursos'}</Link>
        <Link to={next}>{slideIndex < slides.length - 1 ? 'Siguiente parte →' : 'Terminar presentación →'}</Link>
      </div>
    </div>
  );
};

export default ResourceDeckPage;
