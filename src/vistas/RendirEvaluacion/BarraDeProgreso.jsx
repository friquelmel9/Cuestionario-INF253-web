import React, { useState } from 'react';

const BarraDeProgreso = ({ progress, onIncrease, onDecrease }) => {
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
    <div style={containerStyle}>
        
      <div style={fillerStyle}>
        <span style={labelStyle}>{`${progress}%`}</span>
      </div>
      <button
        style={{ ...buttonStyle, left: '10px' }}
        onClick={onDecrease}
      >
        &lt;
      </button>
      <button
        style={{ ...buttonStyle, right: '10px' }}
        onClick={onIncrease}
      >
        &gt;
      </button>
    </div>
  );
};

export default BarraDeProgreso;
