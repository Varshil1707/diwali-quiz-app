import React from "react";
import '../App.css'

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, CardContent, Typography } from "@mui/material";

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = React.useState(valueStart);
    React.useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
};

const CircularScoreboard = ({ value }) => {
    const [valueEnd, setValueEnd] = React.useState(value);
    return (
        <Card sx={{ maxWidth: 700, width: "650px",background: 'rgba(255,255,255,0.5)'  }} elevation={3} >
            <CardContent  >
                <Example label="Initial animation upon mount with ProgressProvider wrapper">
                    <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                        {(value) => <CircularProgressbar value={value} text={`${value}%`} styles={buildStyles({
                            backgroundColor : "red", textColor : "rgb(162,49,137)", pathColor : "rgb(162,49,137)"
                        })} />}
                    </ProgressProvider>
                </Example>
            </CardContent>
        </Card>
    );
};

function Example(props) {
    return (
        <div>
            <div className="circleContainer" >
                <div className="circularBar">{props.children}</div>
                <div className="textContainer" >
                    <Typography variant="h3" sx={{color : "rgb(162,49,137)"}} >Thank You</Typography>
                    
                </div>
            </div>
        </div>
    );
}


export default CircularScoreboard;