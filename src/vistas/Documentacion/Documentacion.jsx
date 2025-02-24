import React, { useState, useEffect } from 'react'
import Markdown from 'react-markdown'

import QuestionBox from './QuestionBox.jsx'
import TopMenu from '@/vistas/TopMenu/TopMenu'

import data1 from '/src/jsonFiles/quiz1.json'
import data2 from '/src/jsonFiles/quiz2.json'
import data3 from '/src/jsonFiles/quiz3.json'
import data4 from '/src/jsonFiles/quiz4.json'
import data5 from '/src/jsonFiles/quiz5.json'

function Documentacion() {

    const nullQuestion = {
        id: null
    }

    const [selectedQuestion, setSelectedQuestion] = useState(nullQuestion)
    const [questionsArray, setQuestionsArray] = useState([])

    const [selectedFilter, setSelectedFilter] = useState(-1)
    const [filteredArray, setFilteredArray] = useState([])

    const [showQuestion, setShowQuestion] = useState(false)
    
    // Arch
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

    const handleFilterChange = (event) => {
        const selectedFilter = parseInt(event.target.value);
        setSelectedFilter(selectedFilter)
    }

    const handleFilterArray = (event) => {
        const selectedFilter = parseInt(event.target.value);
        setFilteredArray(questionsArray.filter(item => item.quiz === selectedFilter) || nullQuestion )
    }

    const handleSelectedChange = (event) => {
        const selectedId = parseInt(event.target.value);
        setSelectedQuestion(questionsArray.find(item => item.id === selectedId) || nullQuestion )
        setShowQuestion(false)
    }

    return (
        <>
            <TopMenu text="Ir al Inicio" link={`${import.meta.env.BASE_URL}Inicio`} />
            <div>
                <select onChange={handleFilterChange}>
                    <option value={-1}>--Seleccione--</option>
                    <option value={1}>No filtro</option>
                    <option value={2}>Filtrar por Quiz</option>
                    <option value={3}>Filtrar por tema (no disponible)</option>
                </select>
                
                {selectedFilter === 2 && (
                    <select onChange={handleFilterArray}>
                        <option value={-1}>--Seleccione--</option>
                        <option value={1}>Quiz 1</option>
                        <option value={2}>Quiz 2</option>
                        <option value={3}>Quiz 3</option>
                        <option value={4}>Quiz 4</option>
                        <option value={5}>Quiz 5</option>
                    </select>
                )}

                {!(selectedFilter === -1) && (
                    <select onChange={handleSelectedChange}>
                    <option value={-1}>--Seleccione--</option>
                    {selectedFilter === 2 && (
                        filteredArray.map(item => (
                            <option value={item.id}>{item.id}</option>
                        ))
                    )}
                    {selectedFilter === 1 && (
                        questionsArray.map(item => (
                            <option value={item.id}>{item.id} {item.referencia}</option>
                        ))
                    )} 
                    
                    </select>
                )}
            </div>
            <QuestionBox question={selectedQuestion} mostrarRespuesta={showQuestion} isTest={false}></QuestionBox>
        </>
    );
}



export default Documentacion