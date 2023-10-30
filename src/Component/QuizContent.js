import { Button, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import { quizeQuestions } from './quizQuestions'

const QuizContent = ({ activeQuestion, setSelectedOption, handleNextClick, selectedOption }) => {

    return (
        <>
            <CardHeader title={"All About Diwali Quiz"} action={`${activeQuestion + 1}/${quizeQuestions.length}`} sx={{ borderBottom: "1px solid black", fontWeight: "bolder" }} />
            <CardContent>
                <Typography variant="h4" color="text.secondary" sx={{ textAlign: "center", fontSize: "30px", fontWeight: '300 !important', color: "black" }}>
                    {quizeQuestions[activeQuestion].question}
                </Typography>

            </CardContent>

            <CardContent>
                <Stack className='option-container' >
                    {quizeQuestions[activeQuestion].options.map((item, index) => (
                        <Button className='option' size='large' key={index} variant='outlined'
                            sx={{ background: selectedOption.selectedOptionName === item ? "#a2c7f2" : "", borderColor: selectedOption.selectedOptionName === item ? "#4295ed !important" : "", "&:hover": { backgroundColor: selectedOption.selectedOptionName === item ? "#a2c7f2 !important" : "" } }}
                            onClick={(e) => {
                                setSelectedOption({ selectedOptionName: item, selectedOptionCondition: true })
                            }}
                        > {item} </Button>
                    ))}
                </Stack>

                {selectedOption.selectedOptionCondition && <Stack>
                    <Button onClick={handleNextClick} >Next</Button>
                </Stack>}


            </CardContent>
        </>
    )
}

export default QuizContent