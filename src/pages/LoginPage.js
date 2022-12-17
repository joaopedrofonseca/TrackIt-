import PhoneScreen from "../components/PhoneScreen"
import Logo from "../components/Logo"
import logo from "../assets/logo.png"
import AlignInputs from "../components/AlignInputs"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import URL from "../constants/BASE_URL"
import AppContext from "../AppContext/Context"

export default function LoginPage() {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const { setToken, setName, setImage } = useContext(AppContext)
    const navigate = useNavigate()

    function login(e) {
        e.preventDefault()
        const body = {
            email: loginEmail,
            password: loginPassword
        }
        axios.post(`${URL}/auth/login`, body)
            .then(r => {
                setToken(r.data.token)
                setName(r.data.name)
                setImage(r.data.image)
                console.log(r.data)
                navigate("/hoje")
            })
            .catch(er => console.log(er.response.data))
    }

    return (
        <PhoneScreen color="white">
            <Logo>
                <img src={logo} />
            </Logo>
            <AlignInputs>
                <form onSubmit={login}>
                    <input placeholder="email" type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required></input>
                    <input placeholder="senha" type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required></input>
                    <button type="submit">Entrar</button>
                </form>
                <Link to="/cadastro">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </AlignInputs>
        </PhoneScreen>
    )
}


