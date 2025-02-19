import React, { useState, useEffect } from 'react'
import { cadastrarAviso } from '../../services/avisos/avisos'
import { useNavigate } from 'react-router-dom'
import { buscarCategorias} from '../../services/categorias/categorias';
import api from '../../services/api/api'

const CadastrarAviso = () => {

    const navigate = useNavigate();

    const [descricao, setDescricao] = useState("")
    const [idCategoria, setIdCategoria] = useState("")
    const [categorias, setCategorias] = useState([])
    const [erro, setErro] = useState("");

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
        // Fetch categorias on mount
        const fetchCategorias = async () => {
            const response = await buscarCategorias();
            setCategorias(response.data || []); // Default to empty array if data is null
        };

        fetchCategorias();
    }, [buscarCategorias]);
    
    const handleSubmit = async (e) => {
        e.preventDefault()
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

    const handleBack = () => {
        navigate('/avisos')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Categoria:</span>
                    <select value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nome}
                            </option>
                        ))}
                    </select>
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
        <button onClick={handleBack}>Voltar</button>
    </div>
  )
}

export default CadastrarAviso