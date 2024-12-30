import { useState } from 'react';
import TopMenu from '/src/componentes/TopMenu';

function RendirEvaluacion(props) {
  const [puntaje, setPuntaje] = useState(0);
  const [calificacion, setCalificacion] = useState(0);
  const [tiempo, setTiempo] = useState(0);

  //Revisamos si se le dijo que pasara tiempo

  return (
    <>
        <TopMenu text='Ir a configurar evaluacion' link={`${import.meta.env.BASE_URL}ConfigurarEvaluacion`} />
        <h5>
            Rendir Evaluacion
        </h5>
    </>
  );
};

export default RendirEvaluacion;
