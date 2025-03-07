import React from 'react';
import { useRef, useEffect } from "react";

const VisualizadorDePregunta = ({ pregunta, numeroPregunta, manejadorRespuesta, tiempoCero }) => {
  let {
    pregunta: enunciado,
    respuesta,
    explicacion,
    referencia,
    respuestas, // Solo estará en las preguntas de alternativas
    intAnswers, // Solo estará en las preguntas de alternativas
    id,
    respuestaIngresada
  } = pregunta;

  const botonSeleccionado = useRef(null); // Referencia al botón seleccionado

  function unicodeToChar(text) {
    // Decodificar las secuencias de escape Unicode y reemplazar los saltos de línea por <br />
    return text
        .replace(/\\u[\dA-F]{4}/gi, function (match) {
            return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
        })
        .replace(/\\u[\dA-F]{2}/gi, function (match) {
            // Para algunos casos de caracteres de dos bytes Unicode (por ejemplo, \u00e1)
            return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
        })
        .replace(/\n/g, '<br />');  // Reemplazar saltos de línea por <br />
}


const handleResponseClick = (event, respuesta) => {
  // ✅ Limpiamos el botón previamente seleccionado (si existe)
  if (botonSeleccionado.current) {
    botonSeleccionado.current.style.backgroundColor = styles.button.backgroundColor;
  }

  // ✅ Si la misma respuesta se selecciona, la deseleccionamos
  if (pregunta.respuestaIngresada === respuesta) {
    pregunta.respuestaIngresada = null;
    botonSeleccionado.current = null;
  } else {
    // ✅ Cambiamos el color del botón recién seleccionado
    event.target.style.backgroundColor = "blue";
    botonSeleccionado.current = event.target;
    pregunta.respuestaIngresada = respuesta;
  }

  manejadorRespuesta(pregunta.respuestaIngresada); // Notificamos el cambio
};

  

  const generarAlternativas = (cantidad) => {
    const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "f", "i"]; // Letras para las alternativas
    const botonesGenerados = letras.slice(0, cantidad).map((letra, index) => {
      const esSeleccionado = respuestaIngresada === letra;

      return (
        <button
          id={`btn-${letra}`}
          key={index}
          ref={(el) => {
            if (esSeleccionado) botonSeleccionado.current = el; // Guarda el botón seleccionado
          }}
          onClick={(event) => handleResponseClick(event, letra)}
          disabled={tiempoCero}
          style={{
            ...styles.button,
            backgroundColor: tiempoCero
              ? pregunta.respuestaIngresada !== letra 
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(0, 255, 255, 0.3)'
              : esSeleccionado
              ? "blue" // Resalta en azul si la respuesta ingresada es esta
              : styles.button.backgroundColor,
            pointerEvents: tiempoCero ? "none" : "auto",
            opacity: tiempoCero ? 0.5 : 1,
          }}
        >
          {letra}
        </button>
      );
    });

    return botonesGenerados;
  };

  

  return (
    <div style={styles.container}>
      {/* Metadata */}
      <div style={styles.metadata}>
        <span style={styles.metadataItem}>Numero de pregunta: {numeroPregunta}</span>
        <span style={styles.metadataItem}>Estado: sin responder</span>
        <span style={styles.metadataItem}>Id pregunta: {id}</span>
      </div>

      {/* Enunciado de la pregunta */}
      <h3
      style={styles.enunciado}
      dangerouslySetInnerHTML={{
        __html: 
          unicodeToChar(enunciado)
      }}
    />
    
      {/* Si es una pregunta de Verdadero/Falso */}
      { !intAnswers && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          id='btn-verdadero'
          ref={(el) => {
            if (respuestaIngresada === "V") botonSeleccionado.current = el; // Guarda el botón seleccionado
          }}
          style={{
            ...styles.button,
            backgroundColor: tiempoCero 
              ? pregunta.respuestaIngresada !== "V" 
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(0, 255, 255, 0.3)'
              : pregunta.respuestaIngresada === "V" 
                ? 'blue'  // Resalta en azul si la respuestaIngresada es "V"
                : styles.button.backgroundColor,  // De lo contrario, el estilo normal
            pointerEvents: tiempoCero ? 'none' : 'auto',
            opacity: tiempoCero ? 0.5 : 1,
          }}
          onClick={(event) => handleResponseClick(event, "V")}
          disabled={tiempoCero}
        >
          Verdadero
        </button>
        <button
          id='btn-falso'
          ref={(el) => {
            if (respuestaIngresada === "F") botonSeleccionado.current = el; // Guarda el botón seleccionado
          }}
          style={{
            ...styles.button,
            backgroundColor: tiempoCero 
              ? pregunta.respuestaIngresada !== "F" 
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(0, 255, 255, 0.3)'
              : pregunta.respuestaIngresada === "F" 
                ? 'blue'  // Resalta en azul si la respuestaIngresada es "F"
                : styles.button.backgroundColor,  // De lo contrario, el estilo normal
            pointerEvents: tiempoCero ? 'none' : 'auto',
            opacity: tiempoCero ? 0.5 : 1,
          }}
          onClick={(event) => handleResponseClick(event, "F")}
          disabled={tiempoCero}
        >
          Falso
        </button>
      </div>            
      )}


  
      {/* Si es una pregunta de alternativas */}
      {intAnswers && (
        <div style={styles.alternativasContainer}>
          {generarAlternativas(intAnswers)}
        </div>
      )}

      {/* Referencia de la pregunta */}
      <div style={styles.referencia}>
        <p>{referencia}</p>
      </div>
    </div>
  );
};

// Estilos (puedes modificar estos según tu preferencia)
const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: 'auto',
  },
  metadata: {
    marginBottom: '10px',
  },
  metadataItem: {
    display: 'block',
    margin: '5px 0',
  },
  enunciado: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  parrafo: {
    margin: '10px 0',
  },
  alternativasContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
  vfContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  button: {
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  respuestaContainer: {
    marginTop: '20px',
  },
  respuestaTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  respuesta: {
    margin: '5px 0',
    fontSize: '14px',
  },
  explicacion: {
    fontStyle: 'italic',
    fontSize: '12px',
    marginTop: '10px',
  },
  referencia: {
    marginTop: '20px',
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#777',
  },
};

export default VisualizadorDePregunta;
