import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import RendirEvaluacion from '/src/vistas/RendirEvaluacion/RendirEvaluacion.jsx';
import ConfigurarEvaluacion from '/src/vistas/ConfigurarEvaluacion/ConfigurarEvaluacion.jsx';
import Documentacion from '/src/vistas/Documentacion/Documentacion.jsx'
import Inicio from '/src/vistas/Inicio/Inicio.jsx'
import Agradecimientos from '/src/vistas/Agradecimientos/Agradecimientos.jsx'
import { ThemeProvider } from '/src/vistas/ThemeContext/ThemeContext';

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.BASE_URL);
  return (
    <>
    <ThemeProvider>
        <HashRouter>
            <Routes >
                <Route path="/" element={<Inicio />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/SimularEvaluacion" element={<ConfigurarEvaluacion />} />
                <Route path="/RendirEvaluacion" element={<RendirEvaluacion />} />
                <Route path="/Documentacion" element={<Documentacion />} />
                <Route path="/Agradecimientos" element={<Agradecimientos />} />
            </Routes>
        </HashRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
