import React, { useState, useEffect } from 'react'
import '/src/componentes/QuestionBox.css';

// question is the question to show, boxState the type of box
const QuestionBox = ({ question, boxState, answer }) => {

    if (boxState == "visualizacion") {
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
                        <div className="enunciado">{question.pregunta} </div>
                        {question.respuesta == "V" | question.respuesta == "F" ? (
                            <div className="alternativas-container">
                                <button class="button">V</button>
                                <button class="button">F</button>
                            </div>
                        ) : (
                            <>
                                <button class="button">Option 1</button>
                                <button class="button">Option 1</button>
                                <button class="button">Option 1</button>
                                <button class="button">Option 1</button>
                                <button class="button">Option 1</button>
                            </>
                        )}
                    </>
                )}
            </div>
        )
    }

}

export default QuestionBox