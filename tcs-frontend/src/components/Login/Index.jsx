import React, { useState } from 'react'
import { realizarLogin } from '../../services/login/login'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate();
  
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
            email,
            senha
        }
        realizarLogin(dados)
    }

    const handleCandidato = () => {
        navigate("/cadastro-candidato");
    }

    const handleEmpresa = () => {
        navigate("/cadastro-empresa");
    }

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>E-mail:</span>
                        <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Senha:</span>
                        <input type="password" value={senha} name="senha" onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha"/>
                    </label>
                </div>
                <input type="submit" value="Login"/>
            </form>
        </div>
        <div>
            <button onClick={handleCandidato}>Cadastrar Candidato</button>
        </div>
        <div>
            <button onClick={handleEmpresa}>Cadastrar Empresa</button>
        </div>
    </div>
  )
}

export default LoginPage
