import React, { useState, useEffect } from 'react'
import '/src/componentes/QuestionBox.css';

// question is the question to show, boxState the type of box
const QuestionBox = ({ question, mostrarRespuesta, isTest }) => {

    const [showAnswer, setShowAnswer] = useState(mostrarRespuesta);
    const toggleAnswer = () => {
        setShowAnswer(prevState => !prevState)
    }

    return (
        <div className="container">
            {question.id == null ? (
                <p className="enunciado">Seleccione una pregunta</p>
            ) : (
                <>
                    <div className="top-bar">
                        <div class="id-number"># {question.id}</div>
                        <div class="top-right-elements">{question.referencia}</div>
                    </div>
                    {!showAnswer ? (
                        <div className="enunciado">{question.pregunta} </div>
                    ) : (
                        <>
                            <div className="enunciado">La respuesta correcta es: "{question.respuesta}" </div>
                            <div className="enunciado">Explicacion: {question.explicacion} </div>
                        </>
                    )}
                    {isTest ? 
                    (
                        <div></div>
                    ) : (
                        <div className="button-container">
                            <button onClick={toggleAnswer}>
                                {!showAnswer ? "Mostrar respuesta" : "Volver a pregunta"}
                            </button>
                        </div>  
                    )}
                    
                    
                </>
            )}
        </div>
    )

}

export default QuestionBox