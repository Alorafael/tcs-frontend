import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { realizarLogout } from '../../services/login/logout';
import api from '../../services/api/api';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const ip = sessionStorage?.getItem('IP');
        const porta = sessionStorage?.getItem('Porta');
        
        if (ip && porta) {
            api.defaults.baseURL = `http://${ip}:${porta}`; 
        } else {
            setErro("IP ou Porta não encontrados no sessionStorage.");
        }
        }, []);

    handleCategorias = () =>{
        navigate("/categorias")
    }

    handleAvisos = () =>{
        navigate("/avisos")
    }

    handleLogout = () => {
        try{
            const dadosLogin = sessionStorage?.getItem('token')
            const response = realizarLogout(dadosLogin)
            if(response.status === 200){
                alert('Logout realizado com sucesso')
                navigate("/login")
            } else{
                alert(response.message)
            }
        } catch(error){
            console.error(error)
        }
    }

    return(
        <div>
            <div>
                <h1>Home</h1>
            </div>
            <div>
                <div>
                    <button onClick={handleCategorias}>Categorias</button>
                </div>
                <div>
                    <button onClick={handleAvisos}>Avisos</button>
                </div>            
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Home;