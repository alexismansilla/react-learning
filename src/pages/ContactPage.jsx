import { Link } from 'react-router-dom';

const ContactPage = () => (
  <div className="page">
    <span className="lesson-label">Ejemplo de ruta</span>
    <h1>Esta es la página<br />de contacto.</h1>
    <p>La URL <code>/contact</code> coincide con una <code>Route</code> y muestra este componente.</p>
    <div className="navigation">
      <Link to="/implementacion">← Volver a la lección</Link>
      <Link to="/">Ir al inicio</Link>
    </div>
  </div>
);

export default ContactPage;
