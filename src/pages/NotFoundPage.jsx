import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="page">
    <span className="lesson-label">404 · Ruta no encontrada</span>
    <h1>Esta página no<br />existe todavía.</h1>
    <p>La URL no coincide con ninguna <code>Route</code>. La ruta con <code>path="*"</code> nos permite orientar a quien llegó aquí.</p>
    <div className="navigation">
      <Link to="/">Volver al inicio</Link>
    </div>
  </div>
);

export default NotFoundPage;
