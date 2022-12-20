import PhoneScreen from "../components/PhoneScreen"
import Logo from "../components/Logo"
import AlignInputs from "../components/AlignInputs"
import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import URL from "../constants/BASE_URL"
import { ThreeDots } from 'react-loader-spinner'

export default function SignUp({loading, setLoading}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()

    function signUp(e) {
        e.preventDefault()
        setLoading(true)
        const body = {
            email: email,
            name: name,
            image: image,
            password: password
        }
        axios.post(`${URL}/auth/sign-up`, body)
            .then(r => {
                console.log(r)
                setLoading(false)
                navigate("/")
            })
            .catch(er => {
                setLoading(false)
                alert(er.response.data.message)})
            
    }

    return (
        <PhoneScreen padding="36px" color="white">
            <Logo>
                <img src={logo} />
            </Logo>
            <AlignInputs loading={loading}>
                <form onSubmit={signUp}>
                    <input data-test="email-input" placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} disabled={loading} required></input>
                    <input data-test="password-input" placeholder="senha" type="password" value={password} onChange={e => setPassword(e.target.value)} disabled={loading} required></input>
                    <input data-test="user-name-input" placeholder="nome" type="text" value={name} onChange={e => setName(e.target.value)} disabled={loading} required></input>
                    <input data-test="user-image-input" placeholder="foto" type="text" value={image} onChange={e => setImage(e.target.value)} disabled={loading} required></input>
                    <button data-test="signup-btn" type="submit">{loading? <ThreeDots color="white" height='13px' width='51px' disabled></ThreeDots> :'Cadastrar' }</button>
                </form>
                <Link to="/" data-test="login-link">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </AlignInputs>
        </PhoneScreen>

    )
}