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
        const confirm = window.confirm("Tem certeza que deseja excluir esse an??ncio?")
        if (confirm) {
            axios.delete(`${URL}/habits/${id}`, config)
        }
    }

    return (
        <PhoneScreen color="#E5E5E5">
            <Header data-test="header">
                <h1>TrackIt</h1>
                <img src={image} />
            </Header>
            <HabitContainer>
                <TitleHabit margin="0px">
                    <h1>Meus h??bitos</h1>
                    <button
                        data-test="habit-create-btn"
                        onClick={() => {
                            setAdd(true)
                        }}>+</button>
                </TitleHabit>
                {add === true && <NewHabit data-test="habit-create-container" loading={loading}>
                    <form onSubmit={addHabit}>
                        <input data-test="habit-name-input" placeholder="nome do h??bito" value={habitName} type="text" onChange={e => setHabitName(e.target.value)} disabled={isDisableH}></input>
                        <button data-test="habit-create-save-btn" className="save" type="submit" disabled={loading}>{loading ? <ThreeDots color="white" height='10px' width='43px' ></ThreeDots> : 'Salvar'}</button>
                    </form>
                    <div>
                        {weekdays.map(d => <WeekdayBtn key={d.id} d={d} selectedDays={selectedDays} setSelectedDays={setSelectedDays} isDisableH={isDisableH} />)}
                    </div>
                    <button data-test="habit-create-cancel-btn" disabled={isDisableH} className="cancel" onClick={() => setAdd(false)}>Cancelar</button>

                </NewHabit>}
                {createdHabits.map(h => (
                    <SavedHabit data-test="habit-container">
                        <div>
                            <h1 data-test="habit-name">{h.name}</h1>
                            <img data-test="habit-delete-btn" onClick={() => removeHabit(h.id)} src={trash} />
                        </div>
                        <AlignWeekdays>
                            {weekdays.map(d => (h.days.includes(d.id) ? <SavedBtn data-test="habit-day" key={d.id} grey={true} disabled>{d.key}</SavedBtn> : <SavedBtn data-test="habit-day" key={d.id} grey={false} disabled>{d.key}</SavedBtn>))}
                        </AlignWeekdays>
                    </SavedHabit>
                ))}
                {createdHabits.length === 0 && <p>Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para come??ar a trackear!</p>
                }
            </HabitContainer>
            <Menu data-test="menu">
                <Link to="/habitos" data-test="habit-link" style={{ textDecoration: 'none' }}>
                    <h1>H??bitos</h1>
                </Link>
                <Link to="/hoje" data-test="today">
                    <TodayButton left='42px'>
                        <CircularProgressbar value={menuBar * 100} text='Hoje'
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "white",
                                trailColor: "#52B6FF"
                            })} />

                    </TodayButton>
                </Link>
                <Link to="/historico" data-test="history-link" style={{ textDecoration: 'none' }}>
                    <h1>Hist??rico</h1>
                </Link>
            </Menu>

        </PhoneScreen>

    )
}