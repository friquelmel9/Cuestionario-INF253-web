import React, { useState } from 'react';
import { useTheme } from '@/vistas/ThemeContext/ThemeContext';
const BarraDeProgreso = ({ progress, onIncrease, onDecrease, mostrarBotones }) => {
  const { isDarkTheme } = useTheme(); // Acceder al tema global  
  const containerStyle = {
        width: '95%',
        height: '30px',
        backgroundColor: '#f3f3f3',
        borderRadius: '5px',
        marginTop: '10px', // Margen superior
        marginBottom: '10px', // Margen inferior
        position: 'relative',
        marginLeft: 'auto', // Alineación centrada
        marginRight: 'auto', // Alineación centrada
    };

  const fillerStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#4caf50',
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'width 0.2s ease-in-out',
  };

  const labelStyle = {
    color: 'white',
    fontWeight: 'bold',
    padding: '0 5px',
    fontSize: '14px',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  };

  return (
    <div style={{ 
      ...containerStyle, 
      backgroundColor: isDarkTheme ? '#333' : '#f4f4f4', 
      border: isDarkTheme ? '2px solid white' : 'none', 
      boxShadow: isDarkTheme ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.1)', // Sombra en modo claro
      borderRadius: '8px', // Bordes redondeados para mejor apariencia
      padding: '0px' // Espaciado para que el borde no quede pegado al contenido
    }}>
      <div style={{ 
        ...fillerStyle, 
        backgroundColor: '#4caf50' 
      }}>
        <span style={{ 
          ...labelStyle, 
          color: isDarkTheme ? 'white' : 'black' 
        }}>
          {`${progress}%`}
        </span>
      </div>
    
      {/* Mostrar el botón de disminuir */}
      {mostrarBotones.botonDisminuir && (
        <button
          style={{ 
            ...buttonStyle, 
            left: '10px',
            backgroundColor: 'transparent',  // Fondo transparente
          }}
          onClick={onDecrease}
        >
          &lt;
        </button>
      )}
    
      {/* Mostrar el botón de aumentar */}
      {mostrarBotones.botonAumentar && (
        <button
          style={{ 
            ...buttonStyle, 
            right: '10px',
            backgroundColor: 'transparent',  // Fondo transparente
          }}
          onClick={onIncrease}
        >
          &gt;
        </button>
      )}
    </div>
    
    
  );
};

export default BarraDeProgreso;
