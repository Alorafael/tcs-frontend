import React, { useState, useEffect } from 'react'
import { editarCategoria } from '../../services/categorias/categorias'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api/api'

const EditarCategoria = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [erro, setErro] = useState("");
    const id = useParams().id

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
            id,
            nome
        }
        try{
            const response = await editarCategoria(dados);
            if(response.status === 201){
                alert('Categoria atualizada com sucesso!');
                navigate('/categorias')
            }else{
                alert(response.message);
            }
        }
        catch(error){
            console.error(error);
        }
    }

    const handleBack = () => {
        navigate('/categorias')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Nome:</span>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome da categoria"/>
                </label>
                <input type="submit" value="Editar Categoria"/>
            </div>
        </form>
        <div>
            <button onClick={handleBack}>Voltar</button>
        </div>
    </div>
  )
}

export default EditarCategoria