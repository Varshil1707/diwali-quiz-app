import React from 'react'
import { Button, Stack, Typography } from '@mui/material'

const StarterPage = ({ setQuizStarted }) => {
    return (
        <>
            <Stack sx={{ maxWidth: 700, width: "350px", background: "rgba(255,255,255,0.5)", borderRadius: "10px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }} elevation={3}>
                <Typography variant='h4' p={2} >Diwali Quiz</Typography>
                <Button className="containedButton" variant="contained" onClick={() => setQuizStarted(true)} >Get Started</Button>
            </Stack>

        </>
    )
}

export default StarterPage