import { useState } from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';
import ConceptMap from '../components/ConceptMap.jsx';
import LearningGuide from '../components/LearningGuide.jsx';
import { findResource } from '../data/resources.js';

const UseStatePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="page state-lesson">
      <span className="lesson-label">Recurso 02 · React</span>
      <h1>useState ayuda a<br />recordar datos.</h1>
      <p>Por ejemplo: cuántas veces hicimos clic. Prueba los botones.</p>
      <LearningGuide {...findResource('/usestate')} />

      <div className="state-demo">
        <span className="state-demo__label">El número que React recuerda</span>
        <strong>{count}</strong>
        <div>
          <button onClick={() => setCount(count - 1)} aria-label="Restar uno">−</button>
          <button className="state-demo__reset" onClick={() => setCount(0)}>Reiniciar</button>
          <button onClick={() => setCount(count + 1)} aria-label="Sumar uno">+</button>
        </div>
      </div>

      <ConceptMap title="Cuando haces clic" steps={['El botón llama a setCount', 'El dato cambia', 'React actualiza la pantalla']} />
      <h2>El código mínimo</h2>
      <CodeBlock>{`import { useState } from 'react';

const [count, setCount] = useState(0);`}</CodeBlock>
      <div className="tip"><b>count</b> es el dato. <b>setCount</b> es la función que lo cambia. El <b>0</b> es el valor inicial.</div>
      <div className="navigation"><Link to="/">← Volver a los recursos</Link></div>
    </div>
  );
};

export default UseStatePage;
