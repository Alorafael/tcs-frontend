import React, { useEffect, useState } from 'react'
import { cadastrarCategoria } from '../../services/categorias/categorias'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api/api'

const CadastrarCategoria = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
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
            nome
        }
        try {
            const response = await cadastrarCategoria(dados)
            if(response.status === 201){
                alert('Categoria cadastrado com sucesso!');
                navigate('/categorias')
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
                    <span>Nome:</span>
                    <input type="text" value={nome} name="nome" onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome da categoria"/>
                </label>
            </div>
            <input type="submit" value="Cadastrar Categoria"/>
        </form>
    </div>
  )
}

export default CadastrarCategoria