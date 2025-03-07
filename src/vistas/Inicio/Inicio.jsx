import TopMenu from "@/vistas/TopMenu/TopMenu";
import { useTheme } from '@/vistas/ThemeContext/ThemeContext';

function Inicio() {
  const { isDarkTheme } = useTheme(); // Acceder al tema global

  return (
    <>
      <TopMenu text='' link='' inicio={true}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>  
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1><strong>Cuestionario INF-253</strong></h1>
        </div>
  
        {/* Material de estudio Personal */}
        <div 
          className={`container mt-4 ${isDarkTheme ? 'bg-dark text-white border border-white' : 'bg-light text-black shadow'}`} 
          style={{ padding: '20px', borderRadius: '10px' }}
        >
          <h3>Material de Estudio Personal</h3>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '25px'}}>
  
            {/* Practica */}
            <div className={`border p-4 rounded ${isDarkTheme ? 'border-white' : 'border-black'}`} style={{width: '80%', display: 'flex', flexDirection: 'column'}}>
              <h4> Practicar </h4>
              <p style={{textAlign: 'justify'}}>
                Aquí podras realizar <strong>quices</strong> y <strong>certamenes</strong> de 
                prueba para practicar tus habilidades y conocimientos adquiridos en las clases 
                de <strong>Lenguajes de Programación</strong>, ademas de poder seleccionar los 
                contenidos a estudiar y el tipo de preguntas que desees practicar.
              </p>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <a 
                  href={`${import.meta.env.BASE_URL}SimularEvaluacion`} 
                  className="btn btn-primary w-80">
                    Simulacion de Cuestionario
                </a>
              </div>
            </div>
  
            {/* Documentacion */}
            <div className={`border p-4 rounded ${isDarkTheme ? 'border-white' : 'border-black'}`} style={{width: '80%', display: 'flex', flexDirection: 'column'}}>
              <h4> Revisar Documentación </h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                <p style={{textAlign: 'justify'}}>
                  Aquí podras revisar las preguntas que se encuentran en el material del curso, 
                  ademas podras encontrar sus respectivas respuestas y su explicación para mejorar 
                  tu estudio y preparación.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <a
                    href={`${import.meta.env.BASE_URL}Documentacion`} 
                    className="btn btn-primary w-80">
                    Documentación  
                  </a>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;