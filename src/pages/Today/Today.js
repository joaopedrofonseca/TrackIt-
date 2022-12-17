import PhoneScreen from "../../components/PhoneScreen"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import TodayButton from "../../components/TodayButton"
import { TitleToday, CheckHabit } from "./styled"
import check from "../../assets/check.png"
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useContext, useEffect } from "react"
import AppContext from "../../AppContext/Context"
import axios from "axios"
import URL from "../../constants/BASE_URL"
import React from 'react';
import { Link } from "react-router-dom"

export default function Today() {
    const { image, token } = useContext(AppContext)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(`${URL}/habits/today`, config)
            .then(r => console.log(r.data))
            .catch(er => er.response.data)
    }, [])

    return (
        <>
            <PhoneScreen color="#E5E5E5" align="start">
                <Header>
                    <h1>TrackIt</h1>
                    <img src={image} />
                </Header>
                <TitleToday>
                    <h1>Segunda, 17/05</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </TitleToday>
                <CheckHabit>
                    <h1>Ler 1 capítulo de livro</h1>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                    <div>
                        <img src={check} />
                    </div>
                </CheckHabit>
                <Link to="/hoje">
                    <TodayButton left={true}>
                        <CircularProgressbar value='66' text='Hoje'
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "white",
                                trailColor: "#52B6FF"
                            })} />

                    </TodayButton>
                </Link>
                <Menu>
                    <Link to="/habitos" style={{ textDecoration: 'none' }}>
                        <h1>Hábitos</h1>
                    </Link>
                    <Link to="/historico" style={{ textDecoration: 'none' }}>
                        <h1>Histórico</h1>
                    </Link>
                </Menu>
            </PhoneScreen>
        </>
    )
}