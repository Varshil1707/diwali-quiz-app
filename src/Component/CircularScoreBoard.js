import React from "react";
import '../App.css'

// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = React.useState(valueStart);
    React.useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
};

const CircularScoreboard = ({value}) => { 
    const [valueEnd, setValueEnd] = React.useState(value);
    return (
        <div style={{ padding: "40px 40px 40px 40px", margin: "auto" }}>
            <Example label="Initial animation upon mount with ProgressProvider wrapper">
                <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                    {(value) => <CircularProgressbar value={value} text={`${value}%`} />}
                </ProgressProvider>
            </Example>
        </div>
    );
};

function Example(props) {
    return (
        <div style={{ marginBottom: 80 }}>
            <div style={{ marginTop: 30}} className="circleContainer" >
                <div  className="circularBar">{props.children}</div>
            </div>
        </div>
    );
}


export default CircularScoreboard;