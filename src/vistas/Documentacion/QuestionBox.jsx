import React, { useState, useEffect } from 'react'
import './QuestionBox.css';
import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { useTheme } from '@/vistas/ThemeContext/ThemeContext'


// question is the question to show, boxState the type of box
const QuestionBox = ({ question, mostrarRespuesta, isTest }) => {

    const { isDarkTheme } = useTheme();

    const [showAnswer, setShowAnswer] = useState(mostrarRespuesta);
    const toggleAnswer = () => {
        setShowAnswer(prevState => !prevState)
    }

    useEffect(() => {
        setShowAnswer(false);
    }, [question]);


    return (
        <>
            {question.id == null ? (
                <>
                    <div className={`container mt-4 ${isDarkTheme ? 'bg-dark text-white border border-white' : 'bg-light shadow text-black'}`} 
                         style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '250px' }}>
                        <p className="enunciado"><strong>Seleccione una pregunta</strong></p>
                    </div>
                </>
            ) : (
                <>
                    <div className={`container mt-4 ${isDarkTheme ? 'bg-dark text-white border border-white' : 'bg-light shadow text-black'}`} >
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
                                <button className="btn btn-primary" onClick={toggleAnswer}>
                                    {!showAnswer ? "Mostrar respuesta" : "Volver a pregunta"}
                                </button>
                            </div>  
                        )}
                    </div>
                    
                </>
            )}
        </>
    )

}

export default QuestionBox