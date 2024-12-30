import { useState } from 'react';
import TopMenu from '/src/componentes/TopMenu';

function ConfigurarEvaluacion() {
  const [count, setCount] = useState(0);

  return (
    <>
        <TopMenu text='Ir al Inicio' link={`${import.meta.env.BASE_URL}Inicio`} />
        <h5>
            <a href={`${import.meta.env.BASE_URL}RendirEvaluacion`} className="text-decoration-none">
            Rendir una evaluación
            </a>
        </h5>
    </>
  );
};

export default ConfigurarEvaluacion;
