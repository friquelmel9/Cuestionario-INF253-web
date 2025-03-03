import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSun, FaMoon } from 'react-icons/fa';

const TopMenu = ({ link, text, inicio }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('DarkTheme') === 'true');

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    document.body.className = !isDarkTheme ? 'bg-light text-black' : 'bg-dark text-white';
    localStorage.setItem('DarkTheme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className={`d-flex align-items-center justify-content-between p-3 ${!isDarkTheme? 'bg-light text-black' : 'bg-dark text-white'} border-bottom`}>
      <div className="d-flex align-items-center">
        <a href={link} className="text-decoration-none me-3">
          {inicio ? <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="Icono" width="50" height="50"/> : <span className="fs-4">&larr;</span>} {/* Flecha hacia la izquierda */}
        </a>
        {inicio ? <span className="fs-3">Bienvenido</span> : <span className="fs-5">{text}</span>}
      </div>
      <button onClick={toggleTheme} className="btn btn-link text-decoration-none">
        {isDarkTheme ? <FaSun className="fs-4 text-warning" /> : <FaMoon className="fs-4 text-secondary" />}
      </button>
    </div>
  );
};


export default TopMenu;
