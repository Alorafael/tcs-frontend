import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { buscarAvisos, deletarAvisos } from '../../services/avisos/avisos';
import api from '../../services/api/api'


const BuscarAvisos = () => {
    const navigate = useNavigate();
    const [avisos, setAvisos] = useState([]);
    const [erro, setErro] = useState('');

    const handleBuscarAvisos = async () => {
        const response = await buscarAvisos();
        if(response.success === true){
            setAvisos(response);
            console.log(response);
        }
        else{
            alert(response.message);
        }
    }

    useEffect(() => {
        const ip = sessionStorage?.getItem('IP');
        const porta = sessionStorage?.getItem('Porta');
        
        if (ip && porta) {
          api.defaults.baseURL = `http://${ip}:${porta}`; 
        } else {
          setErro("IP ou Porta não encontrados no sessionStorage.");
        }
      }, []);

    useEffect(() => {
        handleBuscarAvisos();
    }, []);

    const handleRegister = () => {
        navigate("/avisos-cadastro");
    };

    const handleEdit= () => {
        navigate("/avisos-editar");
    };

    const handleDelete = async () => {
        try {
            const response = await deletarAvisos(aviso.id);
            if(response.success === true){
                alert('Excluido com sucesso!');
            }else{
                alert(response.message);
            }
        } catch (error) {
            console.error(error);
        }
  
    }

    return (
        <div>
            <h1>Listar Avisos</h1>
            <div>
                <h2>{JSON.stringify(avisos)}</h2>
            </div>
            {avisos.length > 0 ? (
                avisos.map((aviso) => (
                    <div key={aviso.id}>
                        <h2>{aviso.idCategoria}</h2>
                        <h2>{aviso.nome}</h2>
                        <div>
                            <button href={handleEdit}>Editar</button>
                        </div>
                        <div>
                            <button href={handleDelete}>Deletar</button>
                        </div>
                        <br />
                    </div>
                ))
            ) : (
                <p>Nenhum aviso encontrado.</p>
            )}
            <div>
                <button onClick={handleRegister}>Cadastrar Aviso</button>
            </div>
        </div>
    ) 
}

export default BuscarAvisos;