import { useState } from 'react';
import TopMenu from '/src/componentes/TopMenu';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ConfigurarEvaluacion() {


  const [DatosDelCertamen, setDatosDelCertamen] = useState({
    type: "",
    agregarTiempo: false
  });


  const [DatosDelQuiz, setDatosDelQuiz] = useState({
    type: "Certamen Quiz",
    agregarTiempo: false,
    unidad: 1,
    tipoPregunta: {},
  });

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
                {/* Botón para realizar el certamen */}
                <button className="btn btn-primary mt-3 w-100">Realizar quiz</button>
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
                <button className="btn btn-primary mt-3 w-100">Realizar Certamen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfigurarEvaluacion;
