import { useState, useEffect } from 'react';
import TopMenu from '@/vistas/TopMenu/TopMenu';
import BarraDeProgreso from './BarraDeProgreso';
import VisualizadorDePregunta from './VisualizadorDePregunta';


function RendirEvaluacion({ datosEvaluacion }) {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pregunta, setPregunta] = useState(datosEvaluacion.preguntas[0]);

  // Aseguramos que la pregunta actual esté actualizada cuando cambie el índice
  useEffect(() => {
    setPregunta(datosEvaluacion.preguntas[currentQuestionIndex]);
  }, [currentQuestionIndex, datosEvaluacion.preguntas]);

  let avancePregunta = 0

  //Aqui revisamos los props y hacemos los ajustes 
  if(datosEvaluacion.type == "Certamen"){
    avancePregunta = Math.round(100 / 35) 
  }
  if(datosEvaluacion.type == "quiz"){
    avancePregunta = Math.round(100 / 15) 
  }
  
  const [puntaje, setPuntaje] = useState(0);
  const [calificacion, setCalificacion] = useState(0);
  const [tiempo, setTiempo] = useState(0);

  const [progress, setProgress] = useState(0); // Inicializa con 0% de progreso



  const increaseProgress = () => {
    setProgress(prevProgress => {
        const nuevoProgreso = prevProgress + avancePregunta;
        return nuevoProgreso > 100 ? 100 : nuevoProgreso;
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1); // Avanza la pregunta
  };


  const decreaseProgress = () => {
    if (progress > 0) setProgress(progress - avancePregunta);
    setCurrentQuestionIndex(currentQuestionIndex - 1); // Retrocede la pregunta
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
        <VisualizadorDePregunta pregunta={pregunta} numeroPregunta={currentQuestionIndex}/>
      </div>
    </>
  );
};

export default RendirEvaluacion;
