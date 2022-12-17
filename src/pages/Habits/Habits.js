import PhoneScreen from "../../components/PhoneScreen";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import TodayButton from "../../components/TodayButton";
import trash from "../../assets/trash-outline.svg"
import TitleHabit from "../../components/TitleHabit";
import { HabitContainer, NewHabit, SavedHabit } from "./style";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import weekdays from "../../constants/Weekdays";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext/Context";
import axios from "axios";
import URL from "../../constants/BASE_URL";
import WeekdayBtn from "../../components/WeekdayBtn";

export default function Habits() {
    const [createdHabits, setCreatedHabits] = useState([])
    const [add, setAdd] = useState(false)
    const [habitName, setHabitName] = useState('')
    const [selectedDays, setSelectedDays] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)
    const { image, token } = useContext(AppContext)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(`${URL}/habits`, config)
            .then(r => setCreatedHabits(r.data))
            .catch(e => console.log(e.response.data))
    }, [createdHabits])

    function addHabit(e) {
        e.preventDefault()
        const body = {
            name: habitName,
            days: selectedDays
        }
        axios.post(`${URL}/habits`, body, config)
    }

    function removeHabit(id) {
        const confirm = window.confirm("Tem certeza que deseja excluir esse anúncio?")
        if (confirm) {
            axios.delete(`${URL}/habits/${id}`, config)
        }
    }


    return (
        <PhoneScreen color="#E5E5E5">
            <Header>
                <h1>TrackIt</h1>
                <img src={image} />
            </Header>
            <HabitContainer>
                <TitleHabit margin="0px">
                    <h1>Meus hábitos</h1>
                    <button onClick={() => {
                        setAdd(true)
                        setSelectedDays([])
                    }}>+</button>
                </TitleHabit>
                {add &&
                    <NewHabit>
                        <form onSubmit={addHabit}>
                            <input type="text" placeholder="nome do hábito" value={habitName} onChange={e => setHabitName(e.target.value)} required disabled={isDisabled}></input>
                            <div>
                                <button className="cancel" onClick={() => { setAdd(false) }}>Cancelar</button>
                                <button className="save" type="submit" onClick={() => { setAdd(false) }}>Salvar</button>
                            </div>
                        </form>
                    </NewHabit>}
                {createdHabits.map(h => (
                    <SavedHabit>
                        <div>
                            <h1>{h.name}</h1>
                            <img onClick={() => removeHabit(h.id)} src={trash} />
                        </div>
                        {weekdays.map(d => <WeekdayBtn key={d.id} d={d} />)}
                    </SavedHabit>
                ))}
                {createdHabits.length === 0 && <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                }
            </HabitContainer>
            <Menu>
                <Link to="/habitos" style={{ textDecoration: 'none' }}>
                    <h1>Hábitos</h1>
                </Link>
                <Link to="/historico" style={{ textDecoration: 'none' }}>
                    <h1>Histórico</h1>
                </Link>
            </Menu>
            <Link to="/hoje" >
                <TodayButton left='42px'>
                    <CircularProgressbar value='66' text='Hoje'
                        styles={buildStyles({
                            textColor: "white",
                            pathColor: "white",
                            trailColor: "#52B6FF"
                        })} />

                </TodayButton>
            </Link>
        </PhoneScreen>

    )
}