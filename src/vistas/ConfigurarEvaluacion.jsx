import { useState } from 'react';
import TopMenu from '/src/componentes/TopMenu';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactDOM from 'react-dom/client'; 
import RendirEvaluacion from './RendirEvaluacion/RendirEvaluacion';

async function obtenerPreguntas(cantidadPreguntas, seccion) {
  // Genera las URLs dinámicamente usando import.meta.env.BASE_URL
  const urls = Array.from({ length: 5 }, (_, i) => 
    `${import.meta.env.BASE_URL}jsonFiles/quiz${i + 1}.json`
  );

  try {
    // Obtiene todas las preguntas de cada archivo
    const respuestas = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
    
    // Combina todas las preguntas de la sección especificada ("vf" o "alt")
    const todasLasPreguntas = respuestas.flatMap(data => data[seccion] || []);

    // Mezcla las preguntas aleatoriamente y selecciona la cantidad deseada
    const preguntasAleatorias = todasLasPreguntas
      .sort(() => Math.random() - 0.5)
      .slice(0, cantidadPreguntas);

    console.log(preguntasAleatorias);
    return preguntasAleatorias;
  } catch (error) {
    console.error("Error al obtener las preguntas:", error);
  }
}



function ConfigurarEvaluacion() {


  const [DatosDelCertamen, setDatosDelCertamen] = useState({
    type: "Certamen",
    agregarTiempo: false,
    preguntas: []
  });


  const [DatosDelQuiz, setDatosDelQuiz] = useState({
    type: "Quiz",
    agregarTiempo: false,
    unidad: 1,
    tipoPregunta: {},
    preguntasVF: [],
    preguntasAlt: []
  });

  //const root = ReactDOM.createRoot(document.getElementById('root'));

  return (
    <>
      <TopMenu text="Ir al Inicio" link={`${import.meta.env.BASE_URL}Inicio`} />

      <h2 className="mt-4 ms-3">
        Configurar una evaluación
      </h2>

      <div className="container mt-4">
        <div className="row justify-content-center">
          {/* Cuadro para Quiz */}
          <div className="col-12 col-md-5 mb-4">
            <div className="border p-4 rounded" style={{ minHeight: '490px', position: 'relative' }}>
              <h4>Quiz</h4>
              <p style={{ textAlign: 'justify' }}>
                Evaluacion que se debe realizar al final
                de cada  unidad  de manera   obligatoria
                para evaluar los  contenidos adquiridos,
                son  10 preguntas  de verdadero y  falso
                y 5 preguntas de alternativas.
              </p>

              <div style={{ position: 'absolute', bottom: '130px', width: '80%' }}>

              {/* Dropdown unidad */}
              <div className="dropdown mt-4">
                <button
                  className="btn btn-primary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Elige la unidad
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {[1, 2, 3, 4, 5].map((unidad) => (
                    <li key={unidad}>
                      <a
                        className="dropdown-item"
                        onClick={() => setDatosDelQuiz((prev) => {
                          const updatedQuiz = { ...prev };
                          updatedQuiz.unidad = unidad;
                          return updatedQuiz;
                        })}
                      >
                        Unidad {unidad}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dropdown Tipo de pregunta */}
              <div className="dropdown mt-4">
                <button
                  className="btn btn-primary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  Tipo de pregunta
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {[{tipo: 1, texto: "De evaluaciones pasadas"}, 
                    {tipo: 2, texto: "Inventadas por la comunidad"},
                    {tipo: 3, texto: "Ambas"}].map((tipoPregunta) => (
                    <li key={tipoPregunta.tipo}>
                      <a
                        className="dropdown-item"
                        onClick={() => setDatosDelQuiz((prev) => {
                          const updatedQuiz = { ...prev };
                          updatedQuiz.tipoPregunta = tipoPregunta;
                          return updatedQuiz;
                        })}
                      >
                        {tipoPregunta.texto}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              </div>

              <div style={{ position: 'absolute', bottom: '30px', width: '80%' }}>
                {/* Checkbox tiempo quiz */}
                <div className="form-check mt-4">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={DatosDelQuiz.agregarTiempo} onChange={() => {
                      setDatosDelQuiz((prev) => {
                        const updatedQuiz = { ...prev };
                        updatedQuiz.agregarTiempo = !updatedQuiz.agregarTiempo;
                        return updatedQuiz;
                      }
                    )}}/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                    Agregar tiempo (15 min)
                    </label>
                </div>
                {/* Botón para realizar el quiz */}
                <button className="btn btn-primary mt-3 w-100" onClick={() => {ReactDOM.createRoot(document.getElementById('root')).render(<RendirEvaluacion datosEvaluacion={DatosDelQuiz} />)}}>Realizar quiz</button>
              </div>
            </div>
          </div>

          {/* Cuadro para Certamen */}
          <div className="col-12 col-md-5 mb-4" >
            <div className="border p-4 rounded" style={{ minHeight: '490px', position: 'relative' }}>
              <h4>Certamen</h4>
              <p style={{ textAlign: 'justify' }}>
                La  evaluación final  del curso,  donde se
                mezclan todas las unidades en un  certamen
                de 35 preguntas con una mezcla variable de
                preguntas de  verdadero y falso  junto con
                alternativas.
              </p>

              <div style={{ position: 'absolute', bottom: '30px', width: '80%' }}>
                {/* Checkbox tiempo certamen */}
                <div className="form-check mt-4">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" checked={DatosDelCertamen.agregarTiempo} onChange={() => {
                      setDatosDelCertamen((prev) => {
                        const updatedCertamen = { ...prev };
                        updatedCertamen.agregarTiempo = !updatedCertamen.agregarTiempo;
                        return updatedCertamen;
                      })
                    }}/>
                    <label className="form-check-label" htmlFor="defaultCheck2">
                    Agregar tiempo (70 min)
                    </label>
                </div>
                {/* Botón para realizar el certamen */}
                <button className="btn btn-primary mt-3 w-100" onClick={async () => {
                  

                  try {
                    // Obtiene las preguntas de forma asíncrona
                    const preguntasVF = await obtenerPreguntas(15, "vf");
                    const nuevasPreguntas = await obtenerPreguntas(20, "alt");

                    // Combina y actualiza el estado en una sola llamada
                    setDatosDelCertamen((prev) => {
                      const updatedCertamen = { ...prev };
                      updatedCertamen.preguntas = [...preguntasVF, ...nuevasPreguntas];
                    
                      // Desordena el arreglo aleatoriamente
                      updatedCertamen.preguntas.sort(() => Math.random() - 0.5);
                    
                      return updatedCertamen;
                    });

                    ReactDOM.createRoot(document.getElementById('root')).render(<RendirEvaluacion datosEvaluacion={DatosDelCertamen} />)
                  } catch (error) {
                    
                    console.error("Error al obtener las preguntas:", error);
                  
                  }

                  
                  }}>Realizar Certamen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfigurarEvaluacion;
