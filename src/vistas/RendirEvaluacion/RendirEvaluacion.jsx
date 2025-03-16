import { useState, useEffect } from 'react';
import TopMenu from '@/vistas/TopMenu/TopMenu';
import BarraDeProgreso from './BarraDeProgreso';
import VisualizadorDePregunta from './VisualizadorDePregunta';
import ControlEvaluacion from "./ControlEvaluacion";
import ReactDOM from 'react-dom/client'; 
import ResultadosEvaluacion from "@/vistas/ResultadosEvaluacion/ResultadosEvaluacion";
import { ThemeProvider, useTheme } from '@/vistas/ThemeContext/ThemeContext';
import  FooterMenu from "@/vistas/FooterMenu/FooterMenu";
function RendirEvaluacion({ datosEvaluacion }) {
  const { isDarkTheme } = useTheme(); // Acceder al tema global
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pregunta, setPregunta] = useState(datosEvaluacion.preguntas[0]);

  const [animating, setAnimating] = useState(false); // Estado para controlar la animación

  //Eliminamos cualquier alerta que haya quedado 
  //de la interfaz de Configurar Evaluacion
  if (document.getElementById("alerta-unidad")) document.getElementById("alerta-unidad").remove();
  if (document.getElementById("alerta-tipo-pregunta")) document.getElementById("alerta-tipo-pregunta").remove();
  if (document.getElementById("alerta-vf")) document.getElementById("alerta-vf").remove();
  if (document.getElementById("alerta-alt")) document.getElementById("alerta-alt").remove();
  // Aseguramos que la pregunta actual esté actualizada cuando cambie el índice
  useEffect(() => {
    // Iniciamos la animación antes de cambiar la pregunta
    setAnimating(true);

    // Usamos setTimeout para esperar a que termine la animación
    const animationTimeout = setTimeout(() => {
      setPregunta(datosEvaluacion.preguntas[currentQuestionIndex]);
      setAnimating(false); // Terminamos la animación
    }, 500); // Tiempo de animación, ajustable según sea necesario

    // Limpiamos el timeout para evitar fugas de memoria
    return () => clearTimeout(animationTimeout);
  }, [currentQuestionIndex, datosEvaluacion.preguntas]);

  let avancePregunta = 0

  
  //Aqui revisamos los props y hacemos los ajustes 
  if(datosEvaluacion.type == "Certamen"){
    avancePregunta = Math.round(100 / 35) 
  }

  if(datosEvaluacion.type == "Quiz"){
    avancePregunta = Math.round(100 / 15) 
  }
  
  
  const [tiempo, setTiempo] = useState(datosEvaluacion.type == "Quiz" ? 900 : 4200);

  const [progress, setProgress] = useState(0); // Inicializa con 0% de progreso



  const increaseProgress = () => {
    setProgress(prevProgress => {
        const nuevoProgreso = prevProgress + avancePregunta;
        return nuevoProgreso >= 100 || currentQuestionIndex + 1 == datosEvaluacion.preguntas.length - 1 ? 100 : nuevoProgreso;
    });
    datosEvaluacion.preguntas[currentQuestionIndex + 1] ? setCurrentQuestionIndex(currentQuestionIndex + 1) : false;
  };


  const decreaseProgress = () => {
    setProgress(prevProgress => {
      const nuevoProgreso = prevProgress - avancePregunta;
      return nuevoProgreso <= 0 || currentQuestionIndex - 1 == 0  ? 0 : nuevoProgreso;
  });
    datosEvaluacion.preguntas[currentQuestionIndex - 1] ? setCurrentQuestionIndex(currentQuestionIndex - 1) : false;
  };



  const manejarRespuestaSeleccionada = (respuesta) => {
    pregunta.respuestaIngresada = respuesta;

    console.log("respuesta guardada: " + pregunta.respuestaIngresada);
    if (pregunta.respuestaIngresada) increaseProgress();
  };

  const handleFinish = () => {
    alert("Tiempo agotado. Evaluación terminada.");
    setTiempo(0);
  };

  const handleGoResults = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
          <ThemeProvider>
            <ResultadosEvaluacion resultadosEvaluacion={datosEvaluacion} />
            </ThemeProvider>
          );
    setTiempo(0);
  };

  return (
    <>
    <TopMenu text='Ir a configurar evaluacion' link={`${import.meta.env.BASE_URL}#/SimularEvaluacion`} />
      <ControlEvaluacion addTime={datosEvaluacion.agregarTiempo} initialTime={tiempo} onFinish={handleFinish} onGoToResults={handleGoResults}/> 
      <BarraDeProgreso
        progress={progress}
        onIncrease={increaseProgress}
        onDecrease={decreaseProgress}
        mostrarBotones={{
          botonDisminuir: datosEvaluacion.preguntas[currentQuestionIndex - 1] ? true : false,
          botonAumentar: datosEvaluacion.preguntas[currentQuestionIndex + 1] ? true : false
        }}
      />
      <div 
  className={`container mt-4 ${isDarkTheme ? 'bg-dark text-white border border-white' : 'bg-light text-black shadow'}`} 
  style={{ padding: '20px', borderRadius: '10px' }}
>
  <VisualizadorDePregunta 
    pregunta={pregunta} 
    numeroPregunta={currentQuestionIndex} 
    manejadorRespuesta={manejarRespuestaSeleccionada} 
    tiempoCero={tiempo === 0}
  />
</div>
<FooterMenu inicio={false}/> 
    </>
  );
};

export default RendirEvaluacion;
