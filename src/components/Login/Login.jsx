import React, { useEffect, useState } from 'react';
import { realizarLogin } from '../../services/login/login';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
            email,
            senha
        }
        try {
            const response = await realizarLogin(dados);
            
            if(response.status === 200){
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('admin', response.data.admin);
                // Use lib 'jwt-decode' or 'jose' to decode the token and get the admin payload
                alert('Login realizado com sucesso!');
                navigate('/categorias');
            }else{
                alert(response.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>Email:</span>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu E-mail"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Senha:</span>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha"/>
                    </label>
                </div>
                <input type="submit" value="Fazer Login"/>
            </form>
        </div>
    )
}

export default Login;