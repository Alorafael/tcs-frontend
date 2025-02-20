import React, { useState } from 'react'
import { atualizarUsuario } from '../../services/user/user'
import { useNavigate } from 'react-router-dom';

const EditarUsuario = () => {
    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
            nome,
            senha
        }
        try{
            const response = await atualizarUsuario(dados);
            if(response.status === 201){
                alert('Usuario atualizado com sucesso!');
                navigate('/categorias')
            }else{
                alert(response.message);
            }
        }
        catch(error){
            console.error(error)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>Nome:</span>
                        <input type="text" value={nome} name="nome" onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Senha:</span>
                        <input type="password" value={senha} name="senha" onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha"/>
                    </label>
                </div>
                <input type="submit" value="Cadastrar Usuario"/>
            </form>
        </div>
    )
}

export default EditarUsuario