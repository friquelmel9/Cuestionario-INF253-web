import React, { useState, useEffect } from 'react'
import './QuestionBox.css';
import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'


// question is the question to show, boxState the type of box
const QuestionBox = ({ question, mostrarRespuesta, isTest }) => {

    const [showAnswer, setShowAnswer] = useState(mostrarRespuesta);
    const toggleAnswer = () => {
        setShowAnswer(prevState => !prevState)
    }

    useEffect(() => {
        setShowAnswer(false);
    }, [question]);


    return (
        <>
            <div className="container">
            {question.id == null ? (
                <p className="enunciado">Seleccione una pregunta</p>
            ) : (
                <>
                    <div className="top-bar">
                        <div class="id-number"># {question.id}</div>
                        <div class="top-right-elements">{question.referencia}</div>
                    </div>
                    <div>
                    {!showAnswer ? (
                            <Markdown remarkPlugins={[remarkBreaks]}>{question.pregunta}</Markdown>
                    ) : (
                        <>
                            <Markdown remarkPlugins={[remarkBreaks]}>{"La respuesta correcta es: "+question.respuesta}</Markdown>
                            <Markdown remarkPlugins={[remarkBreaks]}>{"Explicacion: "+question.explicacion}</Markdown>
                        </>
                    )}
                    </div>
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
        </>
    )

}

export default QuestionBox