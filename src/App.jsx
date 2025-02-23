import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RendirEvaluacion from '/src/vistas/RendirEvaluacion/RendirEvaluacion.jsx';
import ConfigurarEvaluacion from '/src/vistas/ConfigurarEvaluacion/ConfigurarEvaluacion.jsx';
import Documentacion from '/src/vistas/Documentacion/Documentacion.jsx'
import Inicio from '/src/vistas/Inicio/Inicio.jsx'

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.BASE_URL);
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={import.meta.env.BASE_URL} element={<Inicio/>} />
                <Route path={`${import.meta.env.BASE_URL}Inicio`} element={<Inicio/>} />
                <Route path={`${import.meta.env.BASE_URL}ConfigurarEvaluacion`} element={<ConfigurarEvaluacion/>} />
                <Route path={`${import.meta.env.BASE_URL}RendirEvaluacion`} element={<RendirEvaluacion/>} />
                <Route path={`${import.meta.env.BASE_URL}Documentacion`} element={<Documentacion/>} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
