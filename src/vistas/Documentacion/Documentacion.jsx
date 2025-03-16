import React, { useState, useEffect } from 'react'
import Markdown from 'react-markdown'

import QuestionBox from './QuestionBox.jsx'
import TopMenu from '@/vistas/TopMenu/TopMenu'
import  FooterMenu from "@/vistas/FooterMenu/FooterMenu"
import { useTheme } from '@/vistas/ThemeContext/ThemeContext'

import data1 from '/src/jsonFiles/quiz1.json'
import data2 from '/src/jsonFiles/quiz2.json'
import data3 from '/src/jsonFiles/quiz3.json'
import data4 from '/src/jsonFiles/quiz4.json'
import data5 from '/src/jsonFiles/quiz5.json'

import './Documentacion.css';


function Documentacion() {

    const { isDarkTheme } = useTheme();

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
        if (selectedFilter <= 5 ) {
            setFilteredArray(questionsArray.filter(item => item.quiz === selectedFilter) || nullQuestion )
        }
        if (selectedFilter === 6) 
            {setFilteredArray(questionsArray.filter(item => item.referencia ==="Original") || nullQuestion )

            }
        if (selectedFilter === 7) 
            {setFilteredArray(questionsArray.filter(item => item.referencia != "Original") || nullQuestion )

            }
    }

    const handleSelectedChange = (event) => {
        const selectedId = parseInt(event.target.value);
        setSelectedQuestion(questionsArray.find(item => item.id === selectedId) || nullQuestion )
        setShowQuestion(false)
    }

    const handleRightArrow = (event) => {
        if (selectedFilter === 1) {
            selectedQuestion.id+1 <= questionsArray.length ? setSelectedQuestion(questionsArray.find(item => item.id === selectedQuestion.id+1)) : null
        }
        if (selectedFilter >= 2) {
            const index = filteredArray.indexOf(selectedQuestion)
            index+1 < filteredArray.length ? setSelectedQuestion(filteredArray[index + 1]) : null
        }
    
    }

    const handleLeftArrow = (event) => {
        if (selectedFilter === 1) {
            selectedQuestion.id-1 >= 1 ? setSelectedQuestion(questionsArray.find(item => item.id === selectedQuestion.id-1)) : false
        }
        if (selectedFilter >= 2) {
            const index = filteredArray.indexOf(selectedQuestion)
            index-1 >= 0 ? setSelectedQuestion(filteredArray[index - 1]) : null
        }
    }

    // To see the question if the previous question was showing the answer
    useEffect(() => {
        setSelectedQuestion(nullQuestion);
    }, [selectedFilter]);

    return (
        <body className={`documentacion ${isDarkTheme ? 'bg-dark text-white' : 'bg-light'}`} style={{minHeight: '100vh'}}>
            <TopMenu text="Ir al Inicio" link={`${import.meta.env.BASE_URL}#/Inicio`} />
            <h1 className={`title ${isDarkTheme ? 'bg-dark text-white' : 'bg-light'}`}>Documentacion</h1>
            <div  
                className={` ${isDarkTheme ? 'bg-dark text-white' : ''}`}
                style={{display: 'flex', flexDirection: 'column', alignItems:'center', gap:'20px'}}>    
                <div className={`options-bar ${isDarkTheme ? 'bg-dark text-white' : 'bg-light'}`} style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
                    <button onClick={handleLeftArrow} className="btn btn-primary">&lt;</button>
                    <select className="btn btn-primary dropdown-toggle" onChange={handleFilterChange}>
                        <option value={-1}>--Seleccione--</option>
                        <option value={1}>No filtro</option>
                        <option value={2}>Filtrar por Quiz</option>
                        <option value={3}>Filtrar por Referencia</option>
                    </select>
                    
                    {selectedFilter === 2 && (
                        <select className="btn btn-primary dropdown-toggle" onChange={handleFilterArray}>
                            <option value={-1}>--Seleccione--</option>
                            <option value={1}>Quiz 1</option>
                            <option value={2}>Quiz 2</option>
                            <option value={3}>Quiz 3</option>
                            <option value={4}>Quiz 4</option>
                            <option value={5}>Quiz 5</option>
                        </select>
                    )}

                    {selectedFilter === 3 && (
                        <select className="btn btn-primary dropdown-toggle" onChange={handleFilterArray}>
                            <option value={-1}>--Seleccione--</option>
                            <option value={6}>Preguntas Originales</option>
                            <option value={7}>Preguntas de Evaluaciones</option>
                        </select>
                    )}

                    {!(selectedFilter === -1) && (
                        <>
                            <select className="btn btn-primary dropdown-toggle" onChange={handleSelectedChange}>
                            <option value={-1}>--Seleccione--</option>
                            {selectedFilter >= 2 && (
                                filteredArray.map(item => (
                                    <option value={item.id}>{item.id} {item.referencia}</option>
                                ))
                            )}
                            {selectedFilter === 1 && (
                                questionsArray.map(item => (
                                    <option value={item.id}>#{item.id} {item.referencia}</option>
                                ))
                            )} 
                            
                            </select>
                        </>
                    )}
                    <button onClick={handleRightArrow} className="btn btn-primary">&gt;</button>
                </div>
                <QuestionBox className="content-box" question={selectedQuestion} mostrarRespuesta={showQuestion} isTest={false}></QuestionBox>
            </div>
            <FooterMenu inicio={false}/> 
        </body>
    );
}



export default Documentacion