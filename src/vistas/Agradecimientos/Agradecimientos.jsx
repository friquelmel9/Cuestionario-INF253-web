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
            </div>
            <FooterMenu inicio={false}/> 
        </>
    )
}

export default Agradecimientos