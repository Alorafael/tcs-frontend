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
                    <input type="text" value={titulo} onChange={(e) => setNome(e.value.target)} placeholder="Digite o nome da categoria"/>
                </label>
            </div>
        </form>
    </div>
  )
}

export default CadastrarCategoria