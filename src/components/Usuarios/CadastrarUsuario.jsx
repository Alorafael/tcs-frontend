import React, { useState, useEffect } from 'react'
import { cadastrarUsuario } from '../../services/user/user'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api/api';

const CadastrarUsuario = () => {
    const navigate = useNavigate();
    const [erro, setErro] = useState('');

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    useEffect(() => {
        const ip = sessionStorage?.getItem('IP');
        const porta = sessionStorage?.getItem('Porta');
        
        if (ip && porta) {
          api.defaults.baseURL = `http://${ip}:${porta}`; 
        } else {
          setErro("IP ou Porta não encontrados no sessionStorage.");
        }
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
            nome,
            email,
            senha
        }
        try{
            const response = await cadastrarUsuario(dados)
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