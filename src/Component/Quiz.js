import { Stack } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
import CircularScoreboard from './CircularScoreBoard'
import QuizContent from './QuizContent'
import { quizeQuestions } from './quizQuestions'
import StarterPage from './StarterPage'
import Fireworks from '@fireworks-js/react'


const Quiz = () => {
    const [quizStarted, setQuizStarted] = useState(false)
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedOption, setSelectedOption] = useState({ selectedOptionName: "", selectedOptionCondition: false })
    const [correctAnswer, setCorrectAnswer] = useState(0)


    const handleNextClick = (e) => {
        if (activeQuestion !== 9) {
            setActiveQuestion(prev => prev + 1)
            setSelectedOption(prev => { return { ...prev, selectedOptionCondition: false } })
            if (selectedOption.selectedOptionName === quizeQuestions[activeQuestion].correctAnswer) {
                setCorrectAnswer(prev => prev + 10);
            }
        } else {
            return
        }
    }

    return (

        <Stack sx={{ display: "flex", textAlign: "center", justifyContent: "center", zIndex : '999', position:"absolute"   }} >
            {!quizStarted ? <StarterPage setQuizStarted={setQuizStarted} /> :
                <>
                    {activeQuestion !== 9 ?
                        <QuizContent selectedOption={selectedOption} activeQuestion={activeQuestion} setSelectedOption={setSelectedOption} handleNextClick={handleNextClick} /> :
                        <CircularScoreboard value={correctAnswer} />
                    }
                </>}

        </Stack>


    )
}

export default Quiz