import { Card, Stack } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
import CircularScoreboard from './CircularScoreBoard'
import QuizContent from './QuizContent'
import { quizeQuestions } from './quizQuestions'

const Quiz = () => {
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
        <Stack sx={{ display: "flex", textAlign: "center", justifyContent: "center" }} >
            <Card sx={{ maxWidth: 700, width: "750px" }} elevation={3} >
                {activeQuestion !== 9 ?
                    <QuizContent selectedOption={selectedOption} activeQuestion={activeQuestion} setSelectedOption={setSelectedOption} handleNextClick={handleNextClick}  /> :
                    <CircularScoreboard value={correctAnswer} />
                }

            </Card>
        </Stack>
    )
}

export default Quiz