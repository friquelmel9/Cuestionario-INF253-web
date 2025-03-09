import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/vistas/ThemeContext/ThemeContext';


const FooterMenu = ({inicio = false }) => {

  const { isDarkTheme, toggleTheme } = useTheme(); // Usar el tema global

  return (
    <>
    {inicio ? (
        <div 
            className='border-top'
            style={{
                padding: '20px', 
                height: '200px', 
                marginTop: 'auto',}}>
            aqui va el footer estoy probando que funciones        
        </div>
    ):
    (
        <div 
            className='border-top'
            style={{
                padding: '20px', 
                height: '150px', 
                marginTop: 'auto',}}>

        </div>
    )}
    </>
  );
};


export default FooterMenu;
