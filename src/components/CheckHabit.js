import { useContext, useEffect, useState } from "react"
import { CheckHabit } from "../pages/Today/styled"
import check from "../assets/check.png"
import axios from "axios"
import URL from "../constants/BASE_URL"
import AppContext from "../AppContext/Context"


export default function CheckHabitt({ t, setCheckHabits, checkHabits, setClicks, clicks }) {
    const [done, setDone] = useState(t.done)
    const [recordColor, setRecordColor] = useState(((t.highestSequence === t.currentSequence) && t.highestSequence !== 0) ? true : false)
    const { token } = useContext(AppContext)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function doing(t) {
        if (!done) {
            setDone(true)
            setRecordColor(true)
            setClicks(clicks+1)
            setCheckHabits([...checkHabits, t.id])
            axios.post(`${URL}/habits/${t.id}/check`, {}, config)
                .then(r => console.log('Habito feito'))
                .catch(er => console.log(er.response.data))
        } else if (done) {
            setDone(false)
            setRecordColor(false)
            setClicks(clicks+1)
            const filtered = checkHabits.filter((h) => !(h === t.id))
            setCheckHabits([...filtered])
            axios.post(`${URL}/habits/${t.id}/uncheck`, {}, config)
                .then(r => console.log('Habito desmarcado seu bocoió!'))
                .catch(er => console.log(er.response.data))
        }
    }

    useEffect(() => {
        if (t.done === true) {
            setCheckHabits([...checkHabits, t.id])
        }
    }, [])

    return (
        <CheckHabit
            data-test="today-habit-container"
            done={done}
            record={recordColor}
            onClick={() => doing(t)}>
            <h1 data-test="today-habit-name">{t.name}</h1>
            <p data-test="today-habit-sequence">Sequência atual: <span className="current">{t.currentSequence} dias</span></p>
            <p data-test="today-habit-record">Seu recorde: <span className="record">{t.highestSequence} dias</span></p>
            <div data-test="today-habit-check-btn">
                <img src={check} />
            </div>
        </CheckHabit>

    )
}

/*
STATES
    const [isClicked, setIsClicked] = useState(false)
    const [current, setCurrent] = useState(t.currentSequence)
    const [record, setRecord] = useState(t.highestSequence)

!DONE
            setIsClicked(true)
            setDone(true)
            setCheckHabits([...checkHabits, t.id])
            if (t.currentSequence === record) {
                setRecordColor(true)
                setRecord(t.currentSequence + 1)
            }
            setCurrent(t.currentSequence + 1)


DONE
                        if (isClicked) {
                setCurrent(t.currentSequence)
                setRecord(t.highestSequence)
            }
            if (!isClicked) {
                setCurrent(t.currentSequence)
                setRecord(t.highestSequence - 1)
            }
            */