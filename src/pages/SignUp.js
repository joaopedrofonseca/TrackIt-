import PhoneScreen from "../components/PhoneScreen"
import Logo from "../components/Logo"
import AlignInputs from "../components/AlignInputs"
import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import URL from "../constants/BASE_URL"

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()

    function signUp(e) {
        e.preventDefault()
        const body = {
            email: email,
            name: name,
            image: image,
            password: password
        }
        axios.post(`${URL}/auth/sign-up`, body)
            .then(r => {
                console.log(r)
                navigate("/")
            })
            .catch(er => alert(er.response.data.message))
    }

    return (
        <PhoneScreen padding="36px" color="white">
            <Logo>
                <img src={logo} />
            </Logo>
            <AlignInputs>
                <form onSubmit={signUp}>
                    <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                    <input placeholder="senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                    <input placeholder="nome" type="text" value={name} onChange={e => setName(e.target.value)} required></input>
                    <input placeholder="foto" type="text" value={image} onChange={e => setImage(e.target.value)} required></input>
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </AlignInputs>
        </PhoneScreen>

    )
}