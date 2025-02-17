import React, { useState } from 'react'
import { atualizarAviso } from '../../services/avisos/avisos'

const AtualizarAviso = () => {

    const [desricao, setDescricao] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
            descricao
        }
        try{
            const reponse = await atualizarAviso(dados);
            if(response.status === 201){
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

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Descrição:</span>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Digite a descrição do aviso"/>
                </label>
            </div>
        </form>
    </div>
  )
}

export default AtualizarAviso