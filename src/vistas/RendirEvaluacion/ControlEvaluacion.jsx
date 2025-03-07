import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from '@/vistas/ThemeContext/ThemeContext';

const containerStyle = {
  maxWidth: "95%",
  minHeight: "60px",
  backgroundColor: "#f3f3f3",
  borderRadius: "5px",
  marginTop: "10px",
  marginBottom: "10px",
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
  fontSize: "clamp(14px, 2vw, 18px)",
  flexWrap: "wrap",
  gap: "10px",
};

const buttonStyle = {
  margin: "5px",
  padding: "5px 10px",
  fontSize: "clamp(14px, 2vw, 16px)",
  height: "40px",
  flexShrink: 0,
};

const ControlEvaluacion = ({ addTime, initialTime, onFinish, onGoToResults }) => {
  const { isDarkTheme } = useTheme(); // Acceder al tema global
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(true);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!addTime) return;

    let timer;
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && !finished) {
      setFinished(true);
      setRunning(false);
      if (onFinish) onFinish();
    }
    return () => clearInterval(timer);
  }, [running, time, onFinish, finished]);

  const handleFinish = () => {
    if (!finished) {
      setFinished(true);
      setRunning(false);
      setTime(0);
      if (onFinish) onFinish();
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    
    <div style={{ 
      ...containerStyle, 
      display: 'flex', 
      justifyContent: 'space-between', 
      width: '100%', 
      backgroundColor: isDarkTheme ? '#333' : '#f4f4f4', 
      border: isDarkTheme ? '2px solid white' : 'none', 
      boxShadow: isDarkTheme ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.1)', 
      borderRadius: '8px', 
      padding: '5px'
    }}>
      <div style={{ flex: 1 }}>
        {addTime && <span>{formatTime(time)}</span>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {finished ? (
          <button
            className="btn btn-success btn-sm"
            style={buttonStyle}
            onClick={onGoToResults}
          >
            Ir a Resultados
          </button>
        ) : (
          <button
            className="btn btn-danger btn-sm"
            style={buttonStyle}
            onClick={handleFinish}
            disabled={!running}
          >
            Terminar Evaluación
          </button>
        )}
      </div>
    </div>
    


  );
};

export default ControlEvaluacion;
