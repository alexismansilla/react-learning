import { BrowserRouter, NavLink, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import { findResource } from './data/resources.js';
import { resourceDecks } from './data/resourceDecks.js';
import HomePage from './pages/HomePage.jsx';
import FundamentosPage from './pages/FundamentosPage.jsx';
import MapaRouterPage from './pages/MapaRouterPage.jsx';
import InstalacionPage from './pages/InstalacionPage.jsx';
import EstructuraPage from './pages/EstructuraPage.jsx';
import ImplementacionPage from './pages/ImplementacionPage.jsx';
import ResumenPage from './pages/ResumenPage.jsx';
import DesafiosPage from './pages/DesafiosPage.jsx';
import ResourceDeckPage from './pages/ResourceDeckPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const sections = [
  { to: '/', label: 'Inicio', number: '01' },
  { to: '/fundamentos', label: 'Fundamentos', number: '02' },
  { to: '/mapa-router', label: 'Mapa mental', number: '03' },
  { to: '/instalacion', label: 'Instalación', number: '04' },
  { to: '/estructura', label: 'Estructura', number: '05' },
  { to: '/implementacion', label: 'Implementación', number: '06' },
  { to: '/resumen', label: 'Resumen', number: '07' },
  { to: '/desafios', label: 'Desafíos', number: '08' },
];

function Presentation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isProjecting, setIsProjecting] = useState(false);
  const current = sections.find((section) => section.to === pathname) ?? sections[0];
  const resource = findResource(pathname);
  const isCatalog = pathname === '/';
  const isRouterLesson = sections.some((section) => section.to === pathname);
  const isResourceDeck = Boolean(resourceDecks[resource?.id]);
  const requestedPart = Number(pathname.split('/')[2] || 1);
  const tutorialIndex = sections.findIndex((section) => section.to === pathname);
  const progressSteps = isResourceDeck ? resourceDecks[resource.id] : sections;
  const progressIndex = isResourceDeck
    ? Math.min(Math.max(requestedPart, 1), progressSteps.length) - 1
    : tutorialIndex >= 0 ? tutorialIndex : pathname === '/contact' ? 5 : 7;

  const movePresentation = (direction) => {
    if (isRouterLesson) {
      const position = sections.findIndex((section) => section.to === pathname);
      const target = sections[position + direction];
      if (target) navigate(target.to);
      return;
    }

    if (!resource) return;
    const slides = resourceDecks[resource.id];
    const part = Number(pathname.split('/')[2] || 1);
    const nextPart = part + direction;
    if (nextPart >= 1 && nextPart <= slides.length) navigate(nextPart === 1 ? resource.to : `${resource.to}/${nextPart}`);
  };

  useEffect(() => {
    if (!isProjecting) return undefined;
    const handleKeyDown = (event) => {
      if (event.target.matches('input, textarea, select')) return;
      if (event.key === 'ArrowRight') movePresentation(1);
      if (event.key === 'ArrowLeft') movePresentation(-1);
      if (event.key === 'Escape') setIsProjecting(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isProjecting, pathname]);

  return (
    <div className={`presentation${isProjecting ? ' presentation--projector' : ''}`}>
      <header className="presentation__header">
        <NavLink className="brand" to="/" aria-label="Ir al inicio">
          <span className="brand__mark">RR</span>
          <span>{isCatalog ? 'Recursos React' : (resource?.title ?? 'React Router')} <em>· guía visual</em></span>
        </NavLink>
        <div className="presentation__meta">
          <button className="projector-toggle" type="button" onClick={() => setIsProjecting((projecting) => !projecting)}>{isProjecting ? 'Salir de proyector' : 'Modo proyector'}</button>
          <span>{isRouterLesson ? `${current.number} / 08` : 'Recurso'}</span>
          <span className="presentation__topic">{isRouterLesson ? current.label : (resource?.category ?? 'Biblioteca')}</span>
        </div>
      </header>
      <div className="presentation__body">
        <main className="presentation__stage">
          {isProjecting && <button className="projector-exit" type="button" onClick={() => setIsProjecting(false)}>× Salir de proyector</button>}
          {isProjecting && <span className="projector-hint">← → cambiar parte · Esc salir</span>}
          <div className="slide-indicator" aria-hidden="true">
            <span style={{ width: isRouterLesson ? `${(Number(current.number) / sections.length) * 100}%` : '100%' }} />
          </div>
          <nav className="deck-dots deck-dots--top" aria-label="Partes de la presentación">
            {progressSteps.map((_, index) => {
              const to = isResourceDeck ? (index ? `${resource.to}/${index + 1}` : resource.to) : sections[index].to;
              return <NavLink className={index === progressIndex ? 'deck-dots__active' : ''} to={to} key={to}>{index + 1}</NavLink>;
            })}
          </nav>
          <section className="slide">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fundamentos" element={<FundamentosPage />} />
          <Route path="/mapa-router" element={<MapaRouterPage />} />
          <Route path="/instalacion" element={<InstalacionPage />} />
          <Route path="/estructura" element={<EstructuraPage />} />
          <Route path="/implementacion" element={<ImplementacionPage />} />
          <Route path="/resumen" element={<ResumenPage />} />
          <Route path="/desafios" element={<DesafiosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/usestate/*" element={<ResourceDeckPage />} />
          <Route path="/jsx/*" element={<ResourceDeckPage />} />
          <Route path="/props/*" element={<ResourceDeckPage />} />
          <Route path="/componentes-props/*" element={<ResourceDeckPage />} />
          <Route path="/layouts-router/*" element={<ResourceDeckPage />} />
          <Route path="/vitest/*" element={<ResourceDeckPage />} />
          <Route path="/formularios/*" element={<ResourceDeckPage />} />
          <Route path="/interfaces-responsivas/*" element={<ResourceDeckPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
          </section>
        </main>
      </div>
      <footer className="presentation__footer">
        <span>DUOC UC · Desarrollo Frontend</span>
        <span>Usa los enlaces para avanzar por la presentación</span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Presentation />
    </BrowserRouter>
  );
}

export default App;
