import React, { useState, useEffect } from 'react'
import QuestionBox from '/src/componentes/QuestionBox.jsx'
import TopMenu from '/src/componentes/TopMenu.jsx'

function Documentacion() {

    const nullQuestion = {
        id: null
    }

    const exampleQuestion = {
        referencia: "[2024-2] - Jose Luis Marti. Q1P1",
        pregunta: "\nCual de las siguientes definiciones respecto a la sintaxis son correctas?\n    I. Sintaxis lexica: Define reglas para los tokens (tales como identificadores, literales, operadores...)\n    II. Sintaxis concreta: Refiere a una representacion de un programa segun simbolos del alfabeto\n    III. Sintaxis abstracta: Solo lleva la informacion escencial del programa, util para usar previo a la generacion del codigo\na. Solo II\nb. Solo I y II\nc. Solo II y III\nd. Todas las anteriores\n\n",
        respuesta: "V",
        explicacion: "No explicacion entregada",
        id: 100
    }

    const [selectedQuestion, setSelectedQuestion] = useState(exampleQuestion)
    const [questionsArray, setQuestionsArray] = useState()
    const [boxState, setBoxState] = useState()
    

    return (
        <>
            <TopMenu text="Ir al Inicio" link={`${import.meta.env.BASE_URL}Inicio`} />
            <QuestionBox question={exampleQuestion} mostrarRespuesta={false}></QuestionBox>
        </>
    );
}

export default Documentacion