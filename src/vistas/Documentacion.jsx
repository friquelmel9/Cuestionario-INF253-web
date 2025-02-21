import React, { useState, useEffect } from 'react'

import QuestionBox from '/src/componentes/QuestionBox.jsx'
import TopMenu from '/src/componentes/TopMenu.jsx'

import data1 from '/src/jsonFiles/quiz1.json'
import data2 from '/src/jsonFiles/quiz2.json'
import data3 from '/src/jsonFiles/quiz3.json'
import data4 from '/src/jsonFiles/quiz4.json'
import data5 from '/src/jsonFiles/quiz5.json'

function Documentacion() {

    const nullQuestion = {
        id: null
    }

    const exampleQuestion = {
        referencia: "[2024-2] - Jose Luis Marti. Q1P1",
        pregunta: "\nCual de las siguientes definiciones respecto a la sintaxis son correctas?\n    I. Sintaxis lexica: Define reglas para los tokens (tales como identificadores, literales, operadores...)\n    II. Sintaxis concreta: Refiere a una representacion de un programa segun simbolos del alfabeto\n    III. Sintaxis abstracta: Solo lleva la informacion escencial del programa, util para usar previo a la generacion del codigo\na. Solo II\nb. Solo I y II\nc. Solo II y III\nd. Todas las anteriores\n\n",
        respuesta: "D",
        explicacion: "No explicacion entregada",
        id: 100
    }

    const [selectedQuestion, setSelectedQuestion] = useState(nullQuestion)
    const [questionsArray, setQuestionsArray] = useState([])
    const [filteredArray, setFilteredArray] = useState([])

    const [showQuestion, setShowQuestion] = useState(false)
    
    useEffect(() => {
        const processJsonData = (data, type, quiz) => {
            return data.map(item => ({ ...item, type, quiz }));
        };

        const vfQuestions = [
            ...processJsonData(data1.vf, 'vf', 1),
            ...processJsonData(data2.vf, 'vf', 2),
            ...processJsonData(data3.vf, 'vf', 3),
            ...processJsonData(data4.vf, 'vf', 4),
            ...processJsonData(data5.vf, 'vf', 5)
        ];
        const altQuestions = [
            ...processJsonData(data1.alt, 'alt', 1),
            ...processJsonData(data2.alt, 'alt', 2),
            ...processJsonData(data3.alt, 'alt', 3),
            ...processJsonData(data4.alt, 'alt', 4),
            ...processJsonData(data5.alt, 'alt', 5)
        ];

        setQuestionsArray([...vfQuestions, ...altQuestions]);
    }, []);

    const handleSelectedChange = (event) => {
        const selectedId = parseInt(event.target.value);
        setSelectedQuestion(questionsArray.find(item => item.id === selectedId) || nullQuestion )
        setShowQuestion(false)
    }

    return (
        <>
            <TopMenu text="Ir al Inicio" link={`${import.meta.env.BASE_URL}Inicio`} />
            <div>
                <select onChange={handleSelectedChange}>
                    <option value={-1}>--Seleccione--</option>
                    {questionsArray.map(item => (
                        <option value={item.id}>
                            {item.id}
                        </option>
                    ))}
                </select>
            </div>
            <QuestionBox question={selectedQuestion} mostrarRespuesta={showQuestion} isTest={false}></QuestionBox>
        </>
    );
}

export default Documentacion