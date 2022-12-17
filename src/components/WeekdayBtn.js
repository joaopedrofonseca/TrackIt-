import { useState } from "react"
import styled from "styled-components"

export default function WeekdayBtn({ key, d, setSelectedDays, selectedDays }) {
    const [clicked, setClicked] = useState(false)
    return (
        <Button
            onClick={() => {
                if (selectedDays.includes(d.id)) {
                    const filteredDays = selectedDays.filter(e => (e.id === d.id))
                    setSelectedDays([...filteredDays])
                    setClicked(false)
                } else {
                    setSelectedDays([...selectedDays, d.id])
                    setClicked(true)
                }
            }}
            clicked={clicked}
            selectedDays={selectedDays}
            d={key}
        >{d.key}</Button>
    )
}

const Button = styled.button`
        text-align: center;
        width: 30px;
        height: 30px;
        margin-right: 4px;
        border: ${props => (!props.clicked ) ? "1px solid #D5D5D5" : "1px solid #CFCFCF"};
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${props => (!props.clicked ) ? "#DBDBDB" : "white"};
        background-color: ${props => (!props.clicked) ? "white" : "#CFCFCF"};
`