import { Button, Card, CardContent, CardHeader, Stack, Typography, } from '@mui/material'
import React, { useState } from 'react'
import { quizeQuestions } from './quizQuestions'
import '../App.css'

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedOption, setSelectedOption] = useState({ selectedOptionName: "", selectedOptionCondition: false })

    const handleNextClick = () => {

        setActiveQuestion(prev => prev + 1)
        setSelectedOption(prev => { return { ...prev, selectedOptionCondition: false } })
    }

    return (
        <Stack sx={{ display: "flex", textAlign: "center", justifyContent: "center" }} >
            <Card sx={{ maxWidth: 700, width: "750px" }} elevation={3} >
                <CardHeader title={"All About Diwali Quiz"} action={10} sx={{ borderBottom: "1px solid black" }} />
                <CardContent>
                    <Typography variant="h4" color="text.secondary" sx={{ textAlign: "center" }}>
                        {quizeQuestions[activeQuestion].question}
                    </Typography>

                </CardContent>
                <CardContent>
                    <Stack className='option-container' >
                        {quizeQuestions[activeQuestion].options.map((item, index) => (
                            <Button className='option' size='large' key={index} variant='outlined'
                                onClick={() => setSelectedOption({ selectedOptionName: item, selectedOptionCondition: true })}
                            > {item} </Button>
                        ))}
                    </Stack>

                    {selectedOption.selectedOptionCondition && <Stack>
                        <Button onClick={handleNextClick} >Next</Button>
                    </Stack>}


                </CardContent>

            </Card>
        </Stack>
    )
}

export default Quiz