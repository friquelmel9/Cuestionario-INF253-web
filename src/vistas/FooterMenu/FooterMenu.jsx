import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/vistas/ThemeContext/ThemeContext';

//Menu inferior
const FooterMenu = ({inicio = false }) => {

  const { isDarkTheme, toggleTheme } = useTheme(); // Usar el tema global

  return (
    <>
        {inicio ? 
            /* FOOTER PARA EL INICIO */
            (
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    padding: '20px', 
                    alignItems: 'center', 
                    marginTop: 'auto',
                    width: '100%'
                }}>
                    {/* Footer diferenciador */}
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'space-evenly', 
                        flexWrap: 'wrap', 
                        gap: '20px',
                        width: '100%'
                    }}>
                        {/* Imagen */}
                        <div style={{
                            width: '100%', 
                            maxWidth: '400px', 
                            display: 'flex', 
                            justifyContent: 'center'
                        }}>
                            <img src={`${import.meta.env.BASE_URL}gato.jpg`} 
                                 style={{ width: '80%', maxWidth: '300px', height: 'auto' }} 
                            />
                        </div>
                
                        {/* Vinculos */}
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            gap: '40px', 
                            justifyContent: 'center', 
                            flexWrap: 'wrap',
                            textAlign: 'center'
                        }}>
                            <a href="">Repositorio</a>
                            <a href={`${import.meta.env.BASE_URL}#/Agradecimientos`}>Agradecimientos</a>
                            <a href="https://forms.gle/aLEkB8RaE66xFNwc8">Contacto</a>
                        </div>
                
                        {/* Developers */}
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            gap: '10px', 
                            width: '100%', 
                            maxWidth: '400px'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap' }}>
                                <a href="https://github.com/friquelmel9">
                                    <img src="https://avatars.githubusercontent.com/u/182704896?v=4" 
                                         style={{ width: '60px', height: '60px', borderRadius: '50%' }} 
                                    />
                                </a>
                                <a href="https://github.com/cristobalonz">
                                    <img src="https://avatars.githubusercontent.com/u/17364631?v=4" 
                                         style={{ width: '60px', height: '60px', borderRadius: '50%' }} 
                                    />
                                </a>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap' }}>
                                <a href="https://github.com/AyuJohn">
                                    <img src="https://avatars.githubusercontent.com/u/143657122?v=4" 
                                         style={{ width: '60px', height: '60px', borderRadius: '50%' }} 
                                    />
                                </a>
                                <a href="https://github.com/bumch1e">
                                    <img src="https://avatars.githubusercontent.com/u/186194976?v=4" 
                                         style={{ width: '60px', height: '60px', borderRadius: '50%' }} 
                                    />
                                </a>
                            </div>
                            <h6 style={{ textAlign: 'center', marginTop: '10px' }}>Devs</h6>
                        </div>
                    </div>
                
                    {/* Footer igual */}
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: '5px', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginTop: '20px'
                    }}>
                        <a href={`${import.meta.env.BASE_URL}Inicio`}>
                            <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="Icono" style={{ width: '30px', height: '30px' }} />
                        </a>
                        <p style={{ textAlign: 'center', fontSize: '14px' }}>
                            © 2025 Cuestionario INF253-web | Derechos Reservados | 
                            <a href="https://forms.gle/aLEkB8RaE66xFNwc8"> Contacto</a>
                        </p>
                    </div>
                </div>
                

            ):
            /* FOOTER PARA LO DEMAS */
            (
                <div style={{display: 'flex', flexDirection: 'column', padding: '20px', height: '100%', alignItems:'center', marginTop: 'auto',}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                        <a href= {`${import.meta.env.BASE_URL}Inicio`}>
                            <img src={`${import.meta.env.BASE_URL}icon.svg`}  alt="Icono" width="30px" height="30px"/>
                        </a>
                        <p>
                            © 2025 Cuestionario INF253-web 
                            <span> | </span>
                             Derechos Reservados
                            <span> | </span>
                            <a href="https://forms.gle/aLEkB8RaE66xFNwc8"> Contacto</a>
                        </p>
                    </div>
                </div>
            )
        }
    </>
  );
};


export default FooterMenu;
