import React, { useState } from 'react'
import { cadastrarAviso } from '../../services/avisos/avisos'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api/api'

const CadastrarAviso = () => {

    const navigate = useNavigate();

    const [descricao, setDescricao] = useState("")
    const [idCategoria, setIdCategoria] = useState("")
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
        console.log(nome)
        const dados = {
            idCategoria,
            descricao
        }
        try {
            const response = await cadastrarAviso(dados)
            if(response.status === 201){
                alert('Aviso cadastrado com sucesso!');
                navigate('/avisos')
            }else{
                alert(response.message);
            }
        }
        catch (error){
            console.error(error);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Categoria:</span>
                    <input type="text" value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)} placeholder="Digite o id da categoria."/>
                </label>
            </div>
            <div>
                <label>
                    <span>Descrição:</span>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Digite a descrição do aviso."/>
                </label>
            </div>
            <input type="submit" value="Cadastrar Aviso"/>
        </form>
    </div>
  )
}

export default CadastrarAviso