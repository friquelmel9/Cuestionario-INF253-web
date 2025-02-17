import { useState } from 'react';
import TopMenu from '/src/componentes/TopMenu';
function Inicio() {
  const [count, setCount] = useState(0);

  return (
    <>
        <TopMenu text='' link='' inicio={true}/>  
        <h5>
            <a href={`${import.meta.env.BASE_URL}ConfigurarEvaluacion`} className="text-decoration-none">
            Configurar una evaluación
            </a>
        </h5>
        <h5>
            <a href={`${import.meta.env.BASE_URL}Documentacion`} className="text-decoration-none">
            Documentacion
            </a>
        </h5>
    </>
  );
};

export default Inicio;