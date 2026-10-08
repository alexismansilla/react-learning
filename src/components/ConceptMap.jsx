const ConceptMap = ({ title, steps }) => (
  <div className="concept-map" aria-label={title}>
    <span className="concept-map__title">{title}</span>
    <div className="concept-map__steps">
      {steps.map((step, index) => (
        <div className="concept-map__step" key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  </div>
);

export default ConceptMap;
