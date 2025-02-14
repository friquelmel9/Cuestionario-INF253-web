import React from 'react';

const VisualizadorDePregunta = ({ pregunta }) => {
  const { enunciado, metadata, alternativas, respuestaCorrecta } = pregunta;

  return (
    <div style={styles.container}>
      {/* Metadata */}
      <div style={styles.metadata}>
        <span style={styles.metadataItem}>Numero de pregunta: 1</span>
        <span style={styles.metadataItem}>Estado: sin responder</span>
        <span style={styles.metadataItem}>Fuentes: W.Ormazabal 2024 quiz 1</span>
        <span style={styles.metadataItem}>Id pregunta: 678</span>
      </div>

      {/* Enunciado de la pregunta */}
      <h3 style={styles.enunciado}>{enunciado}</h3>
      <p style={styles.parrafo}>
        Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu.
      </p>

      {/* Alternativas */}
      <div style={styles.alternativasContainer}>
        {alternativas.map((alternativa, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => alert(`Respuesta seleccionada: ${alternativa}`)}
          >
            {alternativa}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '95%',  // Ancho del 95%
    margin: '0 auto', // Centrado del contenedor
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box', // Asegura que el padding no afecte al ancho
  },
  metadata: {
    display: 'flex',
    flexWrap: 'wrap', // Permite que los items se ajusten en pantallas pequeñas
    justifyContent: 'space-between',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    color: '#555',
  },
  metadataItem: {
    marginRight: '1rem',
    marginBottom: '0.5rem', // Espaciado en pantallas pequeñas
  },
  enunciado: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
  },
  parrafo: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#666',
  },
  alternativasContainer: {
    display: 'flex',
    flexWrap: 'wrap',  // Permite que los botones se ajusten
    justifyContent: 'center', // Centra los botones
    gap: '1rem', // Espaciado entre botones
    marginTop: '2rem',
    alignItems: 'center',
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: 'auto',  // Botones con ancho automático hasta que sean muy pequeños
    minWidth: '150px',  // Añadimos un ancho mínimo
  },

  // Media query para pantallas pequeñas
  '@media (max-width: 768px)': {
    container: {
      padding: '1.5rem', // Reduce el padding en pantallas pequeñas
    },
    enunciado: {
      fontSize: '1rem', // Reduce el tamaño del texto
    },
    alternativasContainer: {
      flexDirection: 'column', // Los botones se apilan en pantallas pequeñas
      gap: '1rem',  // Espaciado entre los botones
    },
    button: {
      width: '100%', // Los botones ocupan el 100% del ancho disponible
      maxWidth: 'none',  // Elimina el límite máximo del ancho en pantallas pequeñas
    },
  },
};

export default VisualizadorDePregunta;
