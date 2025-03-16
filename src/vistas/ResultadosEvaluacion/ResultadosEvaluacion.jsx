import React from "react";
import TopMenu from '@/vistas/TopMenu/TopMenu';
import { useTheme } from '@/vistas/ThemeContext/ThemeContext';
import './styles.css';  // Importa el archivo CSS
import  FooterMenu from "@/vistas/FooterMenu/FooterMenu";

const ResultadosEvaluacion = ({ resultadosEvaluacion }) => {
   const { isDarkTheme } = useTheme();
  // Accede al arreglo de preguntas dentro de la estructura de datos
  const preguntas = resultadosEvaluacion.preguntas || [];
  const tipoEvaluacion = resultadosEvaluacion.type; // Puede ser "Quiz" o "Certamen"

  // Calcula las respuestas correctas
  const respuestasCorrectas = preguntas.filter(
    (resultado) => resultado.respuesta === resultado.respuestaIngresada
  ).length;

  // Calcula el puntaje total
  let puntajeTotal = 0;

  preguntas.forEach((pregunta) => {
    let puntos = 0;

    // Solo sumamos puntos si la respuesta es correcta
    if (pregunta.respuesta === pregunta.respuestaIngresada) {
      if (tipoEvaluacion === "Quiz") {
        // Si es un Quiz, sumamos puntos según el tipo de pregunta
        if (pregunta.intAnswers !== undefined) {
          // Pregunta de alternativas
          puntos = 10;
        } else {
          // Pregunta de verdadero/falso
          puntos = 5;
        }
      } else if (tipoEvaluacion === "Certamen") {
        // Si es un Certamen, la pregunta vale 4 puntos si tiene intAnswers, 2 si no
        puntos = pregunta.intAnswers !== undefined ? 4 : 2;
      }

      // Sumamos el puntaje solo si la respuesta es correcta
      puntajeTotal += puntos;
    }
  });

  // Si es un Certamen, normaliza la nota a una escala de 0 a 100
  if (tipoEvaluacion === "Certamen") {
    const maxPuntaje = preguntas.reduce((total, pregunta) => {
      return total + (pregunta.intAnswers !== undefined ? 4 : 2);
    }, 0);
    puntajeTotal = (puntajeTotal / maxPuntaje) * 100;
  }

  return (
    <>
  <TopMenu text="Ir a inicio" link={`${import.meta.env.BASE_URL}`} />
  <div
    className={`container mt-5 ${isDarkTheme ? "bg-dark text-white" : "bg-light text-black"}`}
    style={{
      border: isDarkTheme ? "2px solid white" : "none",
      boxShadow: isDarkTheme ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      padding: "20px",
    }}
  >
    <h3 className="text-center mb-4">Resultados de la Evaluación</h3>

    {/* Tabla de resultados */}
    <div
      className="table-responsive"
      style={{
        border: isDarkTheme ? "2px solid white" : "none",
        boxShadow: isDarkTheme ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >

<table className={`mi-tabla ${isDarkTheme ? 'mi-tabla-dark' : ''} table-striped table-bordered border-dark`}>
<thead>
        <tr>
          <th>#</th>
          <th>Id de la pregunta</th>
          <th>Respuesta Correcta</th>
          <th>Respuesta Ingresada</th>
        </tr>
      </thead>
      <tbody>
        {preguntas.map((resultado, index) => {
          // Verificar si la respuesta es correcta
          const isCorrect = resultado.respuesta === resultado.respuestaIngresada;
          return (
            <tr
              key={index}
              className={isCorrect ? 'fila-correcta' : ''} // Aplica la clase fila-correcta si es correcta
            >
              <td>{index + 1}</td>
              <td>{resultado.id}</td>
              <td>{resultado.respuesta}</td>
              <td>{resultado.respuestaIngresada || "No ingresada"}</td>
            </tr>
          );
        })}
      </tbody>
</table>

    </div>

    {/* Estadísticas al final */}
    <div
      className="mt-4 text-center"
      style={{
        border: isDarkTheme ? "2px solid white" : "none",
        boxShadow: isDarkTheme ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "15px",
      }}
    >
      <h4>Respuestas Correctas: {respuestasCorrectas} de {preguntas.length}</h4>
      <h5>Puntaje Obtenido: {puntajeTotal.toFixed(2)} {tipoEvaluacion === "Certamen" ? "%" : "puntos"}</h5>
    </div>
  </div>
  <FooterMenu inicio={false}/> 
</>

  );
};

export default ResultadosEvaluacion;
