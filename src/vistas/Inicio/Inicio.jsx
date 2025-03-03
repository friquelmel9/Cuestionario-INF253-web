import { useState } from 'react';
import TopMenu from "@/vistas/TopMenu/TopMenu";

function Inicio() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopMenu text='' link='' inicio={true}/>  

      {/* Material de estudio Personal */}
      <div className='container mt-4'>
      <h3>Material de Estudio Personal</h3>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '25px'}}>

          {/* Practica */}
          <div className='border p-4 rounded' style={{width: '80%', display: 'flex', flexDirection: 'column'}}>
            <h4> Practicar </h4>
            <p style={{textAlign: 'justify'}}>
              Aquí podras realizar <strong>quices</strong> y <strong>certamenes</strong> de 
              prueba para practicar tus habilidades y conocimientos adquiridos en las clases 
              de <strong>Lenguajes de Programación</strong>, ademas de poder seleccionar los 
              contenidos a estudiar y el tipo de preguntas que desees practicar.
            </p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button
                className="btn btn-primary w-80"
                type="button" 
                onClick={() => window.location.href = `${import.meta.env.BASE_URL}ConfigurarEvaluacion`}>
                Simulacion de Cuestionario
              </button>
            </div>

          </div>
          {/* FIN Practica */}



          {/* Documentacion */}
          <div className='border p-4 rounded' style={{width: '80%', display: 'flex', flexDirection: 'column'}}>
            <h4> Revisar Documentación </h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
              <p style={{textAlign: 'justify'}}>
                Aquí podras revisar las preguntas que se encuentran en el material del curso, 
                ademas podras encontrar sus respectivas respuestas y su explicación para mejorar 
                tu estudio y preparación.
              </p>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <button
                  className="btn btn-primary w-80"
                  type="button"
                  onClick={() => window.location.href = `${import.meta.env.BASE_URL}Documentacion`}>
                  Documentación
                </button>
              </div>
            </div>
          </div>
          {/* FIN Documentacion */}



        </div>
      </div>
      {/* FIN Material de estudio Personal */}
    </>
  );
};

export default Inicio;