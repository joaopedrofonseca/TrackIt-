import Header from "../components/Header";
import Menu from "../components/Menu";
import PhoneScreen from "../components/PhoneScreen";
import TodayButton from "../components/TodayButton";
import TitleHabit from "../components/TitleHabit";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext/Context";

export default function History() {
    const { today, checkHabits, image } = useContext(AppContext)
    const menuBar = checkHabits.length / today.length

    return (
        <PhoneScreen color="#E5E5E5" align="start">
            <Header data-test="header">
                <h1>TrackIt</h1>
                <img src={image} />
            </Header>
            <TitleHabit margin="100px">
                <h1>Histórico</h1>
            </TitleHabit>
            <Phrase>Em breve você poderá ver o histórico dos seus hábitos aqui!</Phrase>
            
            <Menu data-test="menu">
                <Link to="/habitos" data-test="habit-link" style={{ textDecoration: 'none' }}>
                    <h1>Hábitos</h1>
                </Link>
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
                <Link to="/historico" data-test="history-link" style={{ textDecoration: 'none' }}>
                    <h1>Histórico</h1>
                </Link>
            </Menu>
        </PhoneScreen>
    )
}

const Phrase = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 15px;
`