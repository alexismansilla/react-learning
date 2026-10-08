import React from 'react';
import { Link } from 'react-router-dom';
import { learningResources } from '../data/resources.js';

const HomePage = () => {
  return (
    <div className="catalog">
      <span className="catalog__eyebrow">Biblioteca de aprendizaje</span>
      <h1>Elige un tema<br />para comenzar.</h1>
      <p>Explora guías visuales y prácticas sobre herramientas del ecosistema React.</p>

      <div className="topic-grid">
        {learningResources.map((resource) => (
          <Link className={`topic-card topic-card--${resource.accent}`} to={resource.to} key={resource.id}>
            <div className="topic-card__icon">{resource.icon}</div>
            <div>
              <span className="topic-card__tag">{resource.category}</span>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <small>{resource.topics.length} temas para profundizar</small>
            </div>
            <span className="topic-card__action">Comenzar <b>→</b></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
