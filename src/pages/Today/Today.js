import PhoneScreen from "../../components/PhoneScreen"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import TodayButton from "../../components/TodayButton"
import { TitleToday, CheckHabit } from "./styled"
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext/Context"
import axios from "axios"
import URL from "../../constants/BASE_URL"
import React from 'react';
import { Link } from "react-router-dom"
import dayjs from 'dayjs';
import CheckHabitt from "../../components/CheckHabit"

export default function Today() {
    var days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    let day = dayjs().date();
    let month = dayjs().month()
    let weekday = dayjs().day()

    const { image, token, checkHabits, setCheckHabits, today, setToday } = useContext(AppContext)
    const menuBar = checkHabits.length / today.length

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(`${URL}/habits/today`, config)
            .then(r => setToday(r.data))
            .catch(er => er.response.data)
    }, [today])

    return (
        <>
            <PhoneScreen color="#E5E5E5" align="start">
                <Header data-test="header">
                    <h1>TrackIt</h1>
                    <img src={image} />
                </Header>
                <TitleToday checkHabits={checkHabits}>
                    <h1 data-test="today">{days[weekday]}, {day}/{month}</h1>
                    {checkHabits.length === 0 ? <p data-test="today-counter">Nenhum hábito concluído ainda</p> : <p data-test="today-counter">{menuBar * 100}% dos hábitos concluídos</p>}
                </TitleToday>
                {today.map(t => (<CheckHabitt key={t.name} t={t} setToday={setToday} setCheckHabits={setCheckHabits} checkHabits={checkHabits} />))}
                <Link to="/hoje" data-test="today">
                    <TodayButton left={true}>
                        <CircularProgressbar value={menuBar * 100} text='Hoje'
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "white",
                                trailColor: "#52B6FF"
                            })} />

                    </TodayButton>
                </Link>
                <Menu data-test="menu">
                    <Link to="/habitos" data-test="habit-link" style={{ textDecoration: 'none' }}>
                        <h1>Hábitos</h1>
                    </Link>
                    <Link to="/historico" data-test="history-link" style={{ textDecoration: 'none' }}>
                        <h1>Histórico</h1>
                    </Link>
                </Menu>
            </PhoneScreen>
        </>
    )
}