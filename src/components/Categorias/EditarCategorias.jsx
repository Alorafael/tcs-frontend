import React, { useState } from 'react'
import { editarCategoria } from '../../services/categorias/categorias'
import { useNavigate } from 'react-router-dom'

const EditarCategoria = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
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
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>nome:</span>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome da categoria"/>
                </label>
            </div>
        </form>
    </div>
  )
}

export default EditarCategoria