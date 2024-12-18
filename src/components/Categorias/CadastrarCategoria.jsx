import React, { useState } from 'react'
import { cadastrarCategoria } from '../../services/categorias/categorias'

const CadastrarCategoria = () => {

    const [nome, setNome] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
            nome
        }
        cadastrarCategoria(dados)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Nome:</span>
                    <input type="text" value={nome} onChange={(e) => setNome(e.value)} placeholder="Digite o nome da categoria"/>
                </label>
            </div>
            <input type="submit" value="Cadastrar Categoria"/>
        </form>
    </div>
  )
}

export default CadastrarCategoria