import { useContext, useEffect, useState } from "react"
import { CheckHabit } from "../pages/Today/styled"
import check from "../assets/check.png"
import axios from "axios"
import URL from "../constants/BASE_URL"
import AppContext from "../AppContext/Context"


export default function CheckHabitt({ t, setCheckHabits, checkHabits }) {
    const [done, setDone] = useState(t.done)
    const [isClicked, setIsClicked] = useState(false)
    const [current, setCurrent] = useState(t.currentSequence)
    const [record, setRecord] = useState(t.highestSequence)
    const [recordColor, setRecordColor] = useState(((record === current) && record !== 0) ? true : false)
    const { token } = useContext(AppContext)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function doing(t) {
        let cPlus = t.currentSequence + 1
        if (!done) {
            setIsClicked(true)
            setDone(true)
            setCheckHabits([...checkHabits, t.id])
            if (cPlus >= record) {
                setRecordColor(true)
                setRecord(cPlus)
            }
            setCurrent(cPlus)
            axios.post(`${URL}/habits/${t.id}/check`, {}, config)
                .then(r => console.log('Habito feito'))
                .catch(er => console.log(er.response.data))
        } else if (done) {
            setDone(false)
            setRecord(t.highestSequence - 1)
            setRecordColor(false)
            if (isClicked) {
                setCurrent(t.currentSequence - 1)
            } else if (!isClicked) {
                setCurrent(t.currentSequence - 1)
            }
            const filtered = checkHabits.filter((h) => h.id === t.id)
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
            <p data-test="today-habit-sequence">Sequência atual: <span className="current">{current} dias</span></p>
            <p data-test="today-habit-record">Seu recorde: <span className="record">{record} dias</span></p>
            <div data-test="today-habit-check-btn">
                <img src={check} />
            </div>
        </CheckHabit>

    )
}

/*
            setDone(true)
            setNonClick(true)
            let cPlus = t.currentSequence + 1
            setCurrent(cPlus)
            if (cPlus >= t.highestSequence) {
                setRecord(cPlus)
                setRecordColor(true)
            }
            const body = {}

                        setDone(false)
            if (nonclick) {
                setCurrent(t.currentSequence)
            } else if (!nonclick && t.currentSequence !== 0) {
                setCurrent(current - 1)
            }
            setRecord(t.highestSequence)
            setRecordColor(false)

            */