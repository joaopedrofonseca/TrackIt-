import PhoneScreen from "../components/PhoneScreen"
import Logo from "../components/Logo"
import logo from "../assets/logo.png"
import AlignInputs from "../components/AlignInputs"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import URL from "../constants/BASE_URL"
import AppContext from "../AppContext/Context"
import { ThreeDots } from 'react-loader-spinner'


export default function LoginPage({ loading, setLoading }) {
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
        setLoading(true)
        axios.post(`${URL}/auth/login`, body)
            .then(r => {
                setLoading(false)
                setToken(r.data.token)
                setName(r.data.name)
                setImage(r.data.image)
                console.log(r.data)
                navigate("/hoje")
            })
            .catch(er => {
                alert(er.response.data.message)
                setLoading(false)
            })
    }

    return (
        <PhoneScreen color="white">
            <Logo>
                <img src={logo} />
            </Logo>
            <AlignInputs loading={loading}>
                <form onSubmit={login}>
                    <input placeholder="email" type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required></input>
                    <input placeholder="senha" type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required></input>
                    <button type="submit">{loading ? <ThreeDots color="white" height='13px' width='51px'></ThreeDots> : 'Entrar'}</button>
                </form>
                <Link to="/cadastro">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </AlignInputs>
        </PhoneScreen>
    )
}


