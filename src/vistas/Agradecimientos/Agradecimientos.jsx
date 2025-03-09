import TopMenu from "@/vistas/TopMenu/TopMenu";
import { useTheme } from '@/vistas/ThemeContext/ThemeContext';
import  FooterMenu from "@/vistas/FooterMenu/FooterMenu";

function Agradecimientos(){
    const { isDarkTheme } = useTheme();
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', minHeight:'100vh'}}>
                <TopMenu text='' link='' inicio={true}/> 
            </div>
            <FooterMenu inicio={false}/> 
        </>
    )
}

export default Agradecimientos