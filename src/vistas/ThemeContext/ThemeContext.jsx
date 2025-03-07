// theme-context.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Hook para acceder al tema global
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider para manejar el estado del tema y compartirlo globalmente
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('DarkTheme') === 'true');

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem('DarkTheme', newTheme);
      return newTheme;
    });
  };

  // Aplicar el tema al body
  useEffect(() => {
    document.body.className = isDarkTheme ? 'bg-dark text-white' : 'bg-light text-black';
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
