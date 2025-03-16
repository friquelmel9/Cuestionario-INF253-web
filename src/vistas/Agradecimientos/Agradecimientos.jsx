import TopMenu from "@/vistas/TopMenu/TopMenu";
import { useTheme } from '@/vistas/ThemeContext/ThemeContext';
import  FooterMenu from "@/vistas/FooterMenu/FooterMenu";

function Agradecimientos(){
    const { isDarkTheme } = useTheme();
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', minHeight:'100vh'}}>
                <TopMenu text="Ir al Inicio" link={`${import.meta.env.BASE_URL}Inicio`} />
                <h1 style={{textAlign: 'center'}} > Agradecimientos</h1>
                <div 
                    className={`container mt-4 ${isDarkTheme ? 'bg-dark border border-white' : 'bg-light shadow'}`} 
                    style={{display: 'flex', flexFlow: 'column', justifyContent:'space-evenly'}}>
                    {/* Espacio para la persona */}
                    <div 
                        className={`border p-4 rounded ${isDarkTheme ? 'border-white' : 'border-black'}`}
                        style={{display: 'flex', flexFlow: 'column', justifyContent:'space-evenly', minHeight:'200px'}}>
                        
                    </div>
                    {/* Espacio para la persona es copiar y pegar para mas agradecimientos */}

                </div>
                <div 
                    className={`container mt-4 ${isDarkTheme ? 'bg-dark border border-white' : 'bg-light shadow'}`} 
                    style={{display: 'flex', flexFlow: 'column', justifyContent:'space-evenly'}}>
                    {/* Espacio para la persona */}
                    <div
                      className={`border p-4 rounded ${isDarkTheme ? 'border-white' : 'border-black'}`}
                      style={{
                        display: 'flex',
                        flexFlow: 'row', // Cambié a 'row' para alinear imagen y texto horizontalmente
                        justifyContent: 'flex-start',
                        alignItems: 'center', // Alinea el contenido verticalmente al centro
                        minHeight: '200px'
                      }}
                    >
                      <img 
                        src="https://cdn.discordapp.com/avatars/692094373026070550/de560c7c805c7159ade075d1339597ee.webp?size=240" 
                        alt="Avatar" 
                        style={{
                          width: '150px', // Ajusta el tamaño de la imagen
                          height: 'auto',
                          marginRight: '20px' // Espacio entre la imagen y el texto
                        }} 
                      />
                      <div>
                        <h2>Kriptobal (Cristobal Cordova)</h2>
                        <p>
                        Soy un estudiante apasionado por la la seguridad informática sobretodo la criptografia y hardware hacking. Mi objetivo es 
                        convertirme en un experto en seguridad y trabajar en proyectos innovadores que 
                        impacten el mundo de la tecnología. Siempre estoy aprendiendo nuevas tecnologías y mejorando 
                        mis habilidades para estar al día en este campo tan dinámico. He escrito algunas cosas en <a href="https://cristobalonz.github.io/">mi blog </a>
                        y estoy abierto a colaborar en proyectos informaticos de estudiantes o de codigo abierto.
                        </p>
                      </div>
                    </div>
                    {/* Espacio para la persona es copiar y pegar para mas agradecimientos */}

                </div>
                <div 
                    className={`container mt-4 ${isDarkTheme ? 'bg-dark border border-white' : 'bg-light shadow'}`} 
                    style={{display: 'flex', flexFlow: 'column', justifyContent:'space-evenly'}}>
                    {/* Espacio para la persona */}
                    <div 
                        className={`border p-4 rounded ${isDarkTheme ? 'border-white' : 'border-black'}`}
                        style={{display: 'flex', flexFlow: 'column', justifyContent:'space-evenly', minHeight:'200px'}}>
                        
                    </div>
                    {/* Espacio para la persona es copiar y pegar para mas agradecimientos */}

                </div>
                <div 
                    className={`container mt-4 ${isDarkTheme ? 'bg-dark border border-white' : 'bg-light shadow'}`} 
                    style={{display: 'flex', flexFlow: 'column', justifyContent:'space-evenly'}}>
                    {/* Espacio para la persona */}
                    <div 
                        className={`border p-4 rounded ${isDarkTheme ? 'border-white' : 'border-black'}`}
                        style={{display: 'flex', flexFlow: 'column', justifyContent:'space-evenly', minHeight:'200px'}}>
                        
                    </div>
                    {/* Espacio para la persona es copiar y pegar para mas agradecimientos */}

                </div>
            </div>
            <FooterMenu inicio={false}/> 
        </>
    )
}

export default Agradecimientos