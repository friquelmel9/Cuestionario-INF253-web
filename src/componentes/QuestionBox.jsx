import React, { useState, useEffect } from 'react'
import '/src/componentes/QuestionBox.css';

// question is the question to show, boxState the type of box
const QuestionBox = ({ question, mostrarRespuesta, isTest }) => {

    const [isAnswer, setIsAnswer] = useState(mostrarRespuesta);
    const toggleAnswer = () => {
        setIsAnswer(prevState => !prevState)
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
                    {!isAnswer ? (
                        <div className="enunciado">{question.pregunta} </div>
                    ) : (
                        <div className="enunciado">{question.explicacion} </div>
                    )}
                    {isTest ? 
                    (
                        <div></div>
                    ) : (
                        <div className="button-container">
                            <button onClick={toggleAnswer}>
                                {!isAnswer ? "Mostrar respuesta" : "Volver a pregunta"}
                            </button>
                        </div>  
                    )}
                    
                    
                </>
            )}
        </div>
    )

}

export default QuestionBox