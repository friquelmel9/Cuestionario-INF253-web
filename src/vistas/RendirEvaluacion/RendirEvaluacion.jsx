import { useState } from 'react';
import TopMenu from '/src/componentes/TopMenu';
import BarraDeProgreso from './BarraDeProgreso';
import VisualizadorDePregunta from './VisualizadorDePregunta';

function RendirEvaluacion({ datosEvaluacion }) {
  
  console.log(datosEvaluacion)

  //Aqui revisamos los props y hacemos los ajustes 
  if(datosEvaluacion.type == "Certamen"){

  }
  
  const [puntaje, setPuntaje] = useState(0);
  const [calificacion, setCalificacion] = useState(0);
  const [tiempo, setTiempo] = useState(0);

  const [progress, setProgress] = useState(0); // Inicializa con 0% de progreso



  const increaseProgress = () => {
    if (progress < 100) setProgress(progress + 10);
  };

  const decreaseProgress = () => {
    if (progress > 0) setProgress(progress - 10);
  };

  const pregunta = {
    enunciado: '¿Cuál es la capital de Francia?',
    metadata: {
      autor: 'Profesor Juan',
      fecha: '02/02/2025',
      categoria: 'Geografía',
    },
    alternativas: ['Berlin', 'Madrid', 'París', 'Lisboa'],
    respuestaCorrecta: 'París',
  };




  return (
    <>
        <TopMenu text='Ir a configurar evaluacion' link={`${import.meta.env.BASE_URL}ConfigurarEvaluacion`} />
        <BarraDeProgreso
        progress={progress}
        onIncrease={increaseProgress}
        onDecrease={decreaseProgress}
        />
        <div>
      <VisualizadorDePregunta pregunta={pregunta} />
        </div>
    </>
  );
};

export default RendirEvaluacion;
