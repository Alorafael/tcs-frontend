import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const [IP, setIP] = useState("")
    const [Porta, setPorta] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        handleIP(IP)
        handlePorta(Porta)
        navigate("/login");
    }

    const handleIP = (IP) =>{
        console.log("IP: ", IP)
        sessionStorage.setItem('IP', IP);
    }

    const handlePorta = (Porta) =>{
        console.log("Porta: ", Porta)
        sessionStorage.setItem('Porta', Porta);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>IP:</span>
                    <input type="text" value={IP} name="IP" onChange={(e) => setIP(e.target.value)}  placeholder="Digite o IP para se conectar"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Porta:</span>
                    <input type="text" value={Porta} name="Porta" onChange={(e) => setPorta(e.target.value)} placeholder="Digite a porta para se conectar"/>
                </label>
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Home