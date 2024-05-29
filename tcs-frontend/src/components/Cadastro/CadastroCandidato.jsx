import React, { useState } from 'react'
import { realizarCadastroCandidato } from '../../services/cadastro/cadastro'

const CadastroCandidato = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
            nome,
            email,
            senha
        }
        realizarCadastroCandidato(dados)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Nome:</span>
                    <input type="text" value={nome} name="nome" onChange={(e) => setNome(e.value.target)} placeholder="Digite seu nome"/>
                </label>
            </div>
            <div>
                <label>
                    <span>E-mail:</span>
                    <input type="email" value={email} name="email" onChange={(e) => setEmail(e.value.target)} placeholder="Digite seu email"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Senha:</span>
                    <input type="password" value={senha} name="senha" onChange={(e) => setSenha(e.value.target)} placeholder="Digite sua senha"/>
                </label>
            </div>
            <input type="submit" value="Login"/>
        </form>
    </div>
  )
}

export default CadastroCandidato