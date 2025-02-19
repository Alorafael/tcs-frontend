import React, { useState } from 'react'
import { cadastrarUsuarios } from '../../services/users/users'
import { useNavigate } from 'react-router-dom'

const CadastrarUsuario = () => {
    const navigate = useNavigate();

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
        try{
            const response = await cadastrarUsuarios(dados)
            if(response.status === 201){
                alert('Usuário cadastrado com sucesso!');
                navigate('/login');
            }else{
                alert(response.message)
            }
        }
        catch(error){
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>Nome:</span>
                        <input type="text" value={nome} name="nome" onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email:</span>
                        <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Senha:</span>
                        <input type="password" value={senha} name="senha" onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha"/>
                    </label>
                </div>
                <input type="submit" value="Cadastrar Usuario"/>
            </form>
        </div>
    )
}

export default CadastrarUsuario;