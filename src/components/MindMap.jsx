const MindMap = ({ title, purpose, guide }) => (
  <section className="mind-map" aria-label={`Mapa mental de ${title}`}>
    <span className="mind-map__heading">Mapa mental · {title}</span>
    <div className="mind-map__content">
      <div className="mind-map__branch mind-map__branch--purpose">
        <small>¿Para qué sirve?</small>
        <strong>{purpose}</strong>
      </div>
      <div className="mind-map__core">{title}</div>
      <div className="mind-map__branch mind-map__branch--works">
        <small>¿Cómo funciona?</small>
        {guide.map((item, index) => <span key={item}><b>{index + 1}</b>{item}</span>)}
      </div>
    </div>
  </section>
);

export default MindMap;
