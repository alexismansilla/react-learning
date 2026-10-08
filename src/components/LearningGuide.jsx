const LearningGuide = ({ topics, guide }) => (
  <section className="learning-guide" aria-label="Guía de aprendizaje">
    <div>
      <span className="learning-guide__label">Temas para profundizar</span>
      <div className="learning-guide__topics">
        {topics.map((topic) => <span key={topic}>{topic}</span>)}
      </div>
    </div>
    <div>
      <span className="learning-guide__label">Cómo funciona</span>
      <ol className="learning-guide__steps">
        {guide.map((step, index) => <li key={step}><b>{index + 1}</b>{step}</li>)}
      </ol>
    </div>
  </section>
);

export default LearningGuide;
