import React, { useState } from 'react'
import { editarCategoria } from '../../services/categorias/categorias'

const EditarCategoria = () => {

    const [nome, setNome] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
            nome
        }
        editarCategoria(dados)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>nome:</span>
                    <input type="text" value={nome} onChange={(e) => setNome(e.value.target)} placeholder="Digite o nome da categoria"/>
                </label>
            </div>
        </form>
    </div>
  )
}

export default EditarCategoria