import React, { useEffect, useState } from 'react';
import { realizarLogin } from '../../services/login/login';
import { useNavigate } from 'react-router-dom';
import { decodeJwt } from 'jose';
import api from '../../services/api/api'

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState('');

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
            email,
            senha
        }
        try {
            const response = await realizarLogin(dados);
            if(response.status === 200){
                const decoded = decodeJwt(response.data.token)
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('admin', decoded.admin);
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