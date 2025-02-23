import React from 'react';

const VisualizadorDePregunta = ({ pregunta, numeroPregunta }) => {
  const {
    pregunta: enunciado,
    respuesta,
    explicacion,
    referencia,
    respuestas, // Solo estará en las preguntas de alternativas
    intAnswers, // Solo estará en las preguntas de alternativas
    id
  } = pregunta;

  console.log(pregunta)

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


  const generarAlternativas = (cantidad) => {
    console.log(1);
    const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; // Letras para las alternativas
    return letras.slice(0, cantidad).map((letra, index) => (
      <button
        key={index}
        style={styles.button}
        onClick={() => alert(`Respuesta seleccionada: ${letra}`)}
      >
        {letra}
      </button>
    ));
  }

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
      {!intAnswers && (
        <div style={styles.vfContainer}>
          <button
            style={styles.button}
            onClick={() => alert('Respuesta seleccionada: Verdadero')}
          >
            Verdadero
          </button>
          <button
            style={styles.button}
            onClick={() => alert('Respuesta seleccionada: Falso')}
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
