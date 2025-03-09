import { useState, useEffect } from 'react';
import TopMenu from '@/vistas/TopMenu/TopMenu';
import  FooterMenu from "@/vistas/FooterMenu/FooterMenu";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactDOM from 'react-dom/client';
import RendirEvaluacion from '../RendirEvaluacion/RendirEvaluacion';
import quiz1 from "@/jsonFiles/quiz1.json";
import quiz2 from "@/jsonFiles/quiz2.json";
import quiz3 from "@/jsonFiles/quiz3.json";
import quiz4 from "@/jsonFiles/quiz4.json";
import quiz5 from "@/jsonFiles/quiz5.json";
import { ThemeProvider, useTheme } from '@/vistas/ThemeContext/ThemeContext';

const archivos = [quiz1, quiz2, quiz3, quiz4, quiz5];

// Función para mostrar alerta cuando no se selecciona una unidad
function mostrarAlertaUnidad() {
  if (!document.getElementById("alerta-unidad")) {
    const alerta = document.createElement("div");
    alerta.id = "alerta-unidad";
    alerta.className = "alert alert-warning alert-dismissible fade show position-fixed bottom-0 end-0 m-3";
    alerta.role = "alert";
    alerta.innerHTML = `
      <strong>No ha seleccionado una unidad.</strong> Por favor, seleccione una unidad válida.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(alerta);

    alerta.querySelector(".btn-close").addEventListener("click", () => {
      alerta.remove();
    });
  }
}

// Función para mostrar alerta cuando no se selecciona un tipo de pregunta
function mostrarAlertaTipoPregunta() {
  if (!document.getElementById("alerta-tipo-pregunta")) {
    const alerta = document.createElement("div");
    alerta.id = "alerta-tipo-pregunta";
    alerta.className = "alert alert-warning alert-dismissible fade show position-fixed bottom-0 end-0 m-3";
    alerta.role = "alert";
    alerta.innerHTML = `
      <strong>No ha seleccionado un tipo de pregunta.</strong> Por favor, seleccione un tipo válido de pregunta.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(alerta);

    alerta.querySelector(".btn-close").addEventListener("click", () => {
      alerta.remove();
    });
  }
}


async function obtenerPreguntas(cantidadPreguntas, seccion) {
  try {
    // Extrae las preguntas de cada JSON
    const todasLasPreguntas = archivos.flatMap(data => data[seccion] || []);

    // Mezcla aleatoriamente y selecciona la cantidad deseada
    const preguntasAleatorias = todasLasPreguntas
      .sort(() => Math.random() - 0.5)
      .slice(0, cantidadPreguntas);

    console.log(preguntasAleatorias);
    return preguntasAleatorias;
  } catch (error) {
    console.error("Error al obtener las preguntas:", error);
  }
}

async function obtenerPreguntasDeUnidad(cantidadPreguntas, seccion, unidad, tipoPregunta) {
  try {
    console.log(`Obteniendo preguntas para Unidad: ${unidad}, Sección: ${seccion}, Tipo: ${tipoPregunta}`);

    // Extrae las preguntas del JSON correspondiente
    const jsonSeleccionado = archivos[unidad - 1];
    if (!jsonSeleccionado) {
      mostrarAlertaUnidad();  // Muestra la alerta de unidad
      return [];  // Retorna un arreglo vacío
    }

    if (!tipoPregunta) {
      mostrarAlertaTipoPregunta();  // Muestra la alerta de tipo de pregunta
      return [];  // Retorna un arreglo vacío
    }

    let preguntas = jsonSeleccionado[seccion] || [];

    console.log(`Preguntas disponibles antes de filtrar:`, preguntas.length);

    // Aplicar filtro según el tipo de pregunta
    if (tipoPregunta === 1) {
      const regexReferencia = /\[20/; // Busca referencias con año
      preguntas = preguntas.filter(p => p.referencia && regexReferencia.test(p.referencia));
      console.log(`Preguntas de ${seccion} filtradas por referencia con [YYYY-S]:`, preguntas.length);
    } else if (tipoPregunta === 2) {
      preguntas = preguntas.filter(p => p.referencia && p.referencia.toLowerCase().includes("original"));
      console.log(`Preguntas de ${seccion} filtradas por referencia que contiene 'original':`, preguntas.length);
    }

    // Mezclar y seleccionar la cantidad deseada
    const preguntasAleatorias = preguntas.sort(() => Math.random() - 0.5).slice(0, cantidadPreguntas);

    console.log(`Preguntas seleccionadas de ${seccion}:`, preguntasAleatorias.length);
    return preguntasAleatorias;
  } catch (error) {
    console.error("Error al obtener las preguntas:", error);
    return [];
  }
}


// Función para mostrar la alerta de Verdadero y Falso
function mostrarAlertaVF() {
  const alertaExistente = document.getElementById("alerta-vf");
  if (!alertaExistente) {
    const alerta = document.createElement("div");
    alerta.id = "alerta-vf";
    alerta.className = "alert alert-warning alert-dismissible fade show position-fixed bottom-0 end-0 m-3";
    alerta.role = "alert";
    alerta.innerHTML = `
      <strong>No hay suficientes preguntas de Verdadero y Falso.</strong> Pruebe con otra opción.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(alerta);

    // Evento para eliminar la alerta al cerrarla manualmente
    alerta.querySelector(".btn-close").addEventListener("click", () => alerta.remove());

    // Opción: Eliminar la alerta automáticamente después de 5 segundos
    setTimeout(() => alerta.remove(), 5000);
  }
}

// Función para mostrar la alerta de Alternativas
function mostrarAlertaAlt() {
  const alertaExistente = document.getElementById("alerta-alt");
  if (!alertaExistente) {
    const alerta = document.createElement("div");
    alerta.id = "alerta-alt";
    alerta.className = "alert alert-warning alert-dismissible fade show position-fixed bottom-0 end-0 m-3";
    alerta.role = "alert";
    alerta.innerHTML = `
      <strong>No hay suficientes preguntas de Alternativas.</strong> Pruebe con otra opción.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(alerta);

    // Evento para eliminar la alerta al cerrarla manualmente
    alerta.querySelector(".btn-close").addEventListener("click", () => alerta.remove());

    // Opción: Eliminar la alerta automáticamente después de 5 segundos
    setTimeout(() => alerta.remove(), 5000);
  }
}










function ConfigurarEvaluacion() {

  const { isDarkTheme } = useTheme(); // Acceder al tema global
  const [DatosDelCertamen, setDatosDelCertamen] = useState({
    type: "Certamen",
    agregarTiempo: false,
    preguntas: []
  });


  const [DatosDelQuiz, setDatosDelQuiz] = useState({
    type: "Quiz",
    agregarTiempo: false,
    unidad: null,
    tipoPregunta: {},
    preguntas: []
  });



  useEffect(() => {
    if (DatosDelCertamen.preguntas.length > 0) {
      ReactDOM.createRoot(document.getElementById('root')).render(
        <ThemeProvider>
        <RendirEvaluacion datosEvaluacion={DatosDelCertamen} />
        </ThemeProvider>
      );
    }
  }, [DatosDelCertamen.preguntas]);

  useEffect(() => {
    if (DatosDelQuiz.preguntas.length > 0) {
      ReactDOM.createRoot(document.getElementById('root')).render(
        <ThemeProvider>
        <RendirEvaluacion datosEvaluacion={DatosDelQuiz} />
        </ThemeProvider>
      );
    }
  }, [DatosDelQuiz.preguntas]);

  return (
    <>
      <TopMenu text="Ir al Inicio" link={`${import.meta.env.BASE_URL}Inicio`} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', gap: '20px', minHeight:'100vh'}}>
        <h1 className={`title ${isDarkTheme ? 'bg-dark text-white' : 'bg-light'}`}>Configurar una evaluación</h1>
        <div className={`container mt-4 ${isDarkTheme ? 'bg-dark text-white border border-white' : 'bg-light text-black shadow'}`}>
          <div className="row justify-content-center">
            {/* Cuadro para Quiz */}
            <div className="col-12 col-md-5 mb-4">
              <div  className={`border p-4 rounded ${isDarkTheme ? 'bg-dark text-white border-white' : 'bg-light text-black  border-black'}`} 
                    style={{ minHeight: '500px', position: 'relative' }}>
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
                    {DatosDelQuiz.unidad ? "Unidad " + DatosDelQuiz.unidad : "Elige la unidad"}
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
                    {Object.keys(DatosDelQuiz.tipoPregunta).length === 0 ? "Tipo de pregunta" : DatosDelQuiz.tipoPregunta.texto}
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
                  <button className="btn btn-primary mt-3 w-100" onClick={async () => {
                    

                    try {
                      // Obtiene las preguntas de forma asíncrona
                      const preguntasVF = await obtenerPreguntasDeUnidad(10, "vf", DatosDelQuiz.unidad, DatosDelQuiz.tipoPregunta.tipo);
                      const nuevasPreguntas = await obtenerPreguntasDeUnidad(5, "alt", DatosDelQuiz.unidad, DatosDelQuiz.tipoPregunta.tipo);

                      //Revisamos que hay seleccionado las opciones
                      if (!DatosDelQuiz.unidad || !DatosDelQuiz.tipoPregunta.tipo) return;

                      
                      //Revisamos que hayan suficientes preguntas de VF y alternativas
                      if (preguntasVF.length < 10) {
                        mostrarAlertaVF();
                        return;
                      }

                      //Revisamos que hayan suficientes preguntas de VF y alternativas
                      if (nuevasPreguntas.length < 5) {
                        mostrarAlertaAlt();
                        return;
                      }

                      // Usar variables temporales para almacenar los cambios
                      const preguntasActualizadas = [...preguntasVF, ...nuevasPreguntas];


                      // Preparar el objeto actualizado de DatosDelCertamen
                      const updatedQuiz = {
                        ...DatosDelQuiz, // Mantén los datos previos
                        preguntas: preguntasActualizadas, // Actualiza solo el campo preguntas
                      };

                      // Finalmente, actualizar el estado con el objeto completo
                      setDatosDelQuiz(updatedQuiz);

                    } catch (error) {
                      
                      console.error("Error al obtener las preguntas:", error);
                    
                    }

                    
                    }}>Realizar quiz</button>
                </div>
              </div>
            </div>

            {/* Cuadro para Certamen */}
            <div className="col-12 col-md-5 mb-4" >
            <div  className={`border p-4 rounded ${isDarkTheme ? 'bg-dark text-white border-white' : 'bg-light text-black  border-black'}`} 
                  style={{ minHeight: '500px', position: 'relative' }}>
                <h4>Certamen</h4>
                <p style={{ textAlign: 'justify' }}>
                  La  evaluación final  del curso,  donde se
                  mezclan todas las unidades en un  certamen
                  de 35 preguntas con una mezcla de 15
                  preguntas de  verdadero y falso  junto con
                  20 preguntas de alternativas.
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

                      

                      // Usar variables temporales para almacenar los cambios
                      const preguntasActualizadas = [...preguntasVF, ...nuevasPreguntas];

                      // Desordenar las preguntas aleatoriamente
                      preguntasActualizadas.sort(() => Math.random() - 0.5);

                      // Preparar el objeto actualizado de DatosDelCertamen
                      const updatedCertamen = {
                        ...DatosDelCertamen, // Mantén los datos previos
                        preguntas: preguntasActualizadas, // Actualiza solo el campo preguntas
                      };

                      // Finalmente, actualizar el estado con el objeto completo
                      setDatosDelCertamen(updatedCertamen);

                    } catch (error) {
                      
                      console.error("Error al obtener las preguntas:", error);
                    
                    }

                    
                    }}>Realizar Certamen</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMenu inicio={false}/> 
    </>
  );
}

export default ConfigurarEvaluacion;
