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
import SavedBtn from "../../components/SavedWeekdayBtn";
import AlignWeekdays from "../../components/AlignWeekdays";
import { ThreeDots } from "react-loader-spinner";

export default function Habits({ createdHabits, setCreatedHabits, loading, setLoading }) {
    const [add, setAdd] = useState(false)
    const [habitName, setHabitName] = useState('')
    const [selectedDays, setSelectedDays] = useState([])
    const [isDisableH, setIsDisableH] = useState(false)
    const { image, token, checkHabits, today } = useContext(AppContext)
    const menuBar = checkHabits.length / today.length
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(`${URL}/habits`, config)
            .then(r => {
                setCreatedHabits(r.data)
            })
            .catch(e => console.log(e.response.data))
    }, [createdHabits])

    function addHabit(e) {
        e.preventDefault()
        setIsDisableH(true)
        setLoading(true)
        const body = {
            name: habitName,
            days: selectedDays
        }
        axios.post(`${URL}/habits`, body, config)
            .then(r => {
                console.log(r);
                setIsDisableH(false)
                setLoading(false)
                setAdd(false)
                setHabitName('')
            })
            .catch(er => {
                alert(er.response.data)
                setIsDisableH(false)
                setLoading(false)
            })
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
                    }}>+</button>
                </TitleHabit>
                {add === true && <NewHabit loading={loading}>
                    <form onSubmit={addHabit}>
                        <input placeholder="nome do hábito" value={habitName} type="text" onChange={e => setHabitName(e.target.value)} disabled={isDisableH}></input>
                        <button className="save" type="submit">{loading ? <ThreeDots color="white" height='10px' width='43px'></ThreeDots> : 'Salvar'}</button>
                    </form>
                    <div>
                        {weekdays.map(d => <WeekdayBtn key={d.id} d={d} selectedDays={selectedDays} setSelectedDays={setSelectedDays} />)}
                    </div>
                    <button className="cancel" onClick={() => setAdd(false)}>Cancelar</button>

                </NewHabit>}
                {createdHabits.map(h => (
                    <SavedHabit>
                        <div>
                            <h1>{h.name}</h1>
                            <img onClick={() => removeHabit(h.id)} src={trash} />
                        </div>
                        <AlignWeekdays>
                            {weekdays.map(d => (h.days.includes(d.id) ? <SavedBtn key={d.id} grey={true} disabled>{d.key}</SavedBtn> : <SavedBtn key={d.id} grey={false} disabled>{d.key}</SavedBtn>))}
                        </AlignWeekdays>
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
                    <CircularProgressbar value={menuBar * 100} text='Hoje'
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