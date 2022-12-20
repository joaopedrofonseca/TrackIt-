import { useState } from "react"
import styled from "styled-components"

export default function WeekdayBtn({ d, setSelectedDays, selectedDays, isDisableH }) {
    const [clicked, setClicked] = useState(false)
    return (
        <Button
            disabled={isDisableH}
            data-test="habit-day"
            onClick={() => {
                setClicked(true)
                setSelectedDays([...selectedDays, d.id])
            }}
            clicked={clicked}
        > {d.key}</Button >
    )
}

const Button = styled.button`
        text-align: center;
        width: 30px;
        height: 30px;
        margin-right: 4px;
        border: ${props => (!props.clicked) ? "1px solid #D5D5D5" : "1px solid #CFCFCF"};
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${props => (!props.clicked) ? "#DBDBDB" : "white"};
        background-color: ${props => (!props.clicked) ? "white" : "#CFCFCF"};
`