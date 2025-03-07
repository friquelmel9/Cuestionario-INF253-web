import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RendirEvaluacion from '/src/vistas/RendirEvaluacion/RendirEvaluacion.jsx';
import ConfigurarEvaluacion from '/src/vistas/ConfigurarEvaluacion/ConfigurarEvaluacion.jsx';
import Documentacion from '/src/vistas/Documentacion/Documentacion.jsx'
import Inicio from '/src/vistas/Inicio/Inicio.jsx'
import { ThemeProvider } from '/src/vistas/ThemeContext/ThemeContext';

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.BASE_URL);
  return (
    <>
    <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route path={import.meta.env.BASE_URL} element={<Inicio/>} />
                <Route path={`${import.meta.env.BASE_URL}Inicio`} element={<Inicio/>} />
                <Route path={`${import.meta.env.BASE_URL}SimularEvaluacion`} element={<ConfigurarEvaluacion/>} />
                <Route path={`${import.meta.env.BASE_URL}RendirEvaluacion`} element={<RendirEvaluacion/>} />
                <Route path={`${import.meta.env.BASE_URL}Documentacion`} element={<Documentacion/>} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
