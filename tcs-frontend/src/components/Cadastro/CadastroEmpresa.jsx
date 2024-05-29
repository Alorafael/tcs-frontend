import React from 'react'

const CadastroEmpresa = () => {
  return (
    <div>
        <form>
            <div>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="nome" placeholder=""/>
                </label>
            </div>
            <div>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite seu email"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="senha" placeholder="Digite sua senha"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Ramo:</span>
                    <input type="text" name="ramo" placeholder="Digite o ramo da sua empresa"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Descrição:</span>
                    <input type="text" name="descricao" placeholder="Adicione uma descrição"/>
                </label>
            </div>
            <input type="submit" value="Cadastrar"/>
        </form>
    </div>
  )
}

export default CadastroEmpresa