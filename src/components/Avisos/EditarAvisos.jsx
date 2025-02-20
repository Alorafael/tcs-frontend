import React, { useState, useEffect } from 'react'
import { atualizarAviso } from '../../services/avisos/avisos'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api/api'

const AtualizarAviso = () => {

    const navigate = useNavigate()

    const [descricao, setDescricao] = useState("")
    const [erro, setErro] = useState('');

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
            descricao
        }
        try{
            const response = await atualizarAviso(dados);
            if(response.status === 200){
                alert('Aviso atualizado com sucesso!');
                navigate('/avisos')
            }else{
                alert(response.message);
            }
        }
        catch(error){
            console.error(error);
        }
    }

    const handleBack = () => {
        navigate('/avisos')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Descrição:</span>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Digite a descrição do aviso"/>
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

export default AtualizarAviso