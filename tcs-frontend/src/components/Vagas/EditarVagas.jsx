import React, { useState } from 'react'
import { editarVaga } from '../../services/vagas/vagas'

const EditarVagas = () => {

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [ramo_id, setRamoId] = useState("")
    const [competencias, setCompetencias] = useState("")
    const [experiencia, setExperiencia] = useState("")
    const [salario_min, setSalarioMin] = useState("")
    const [salario_max, setSalarioMax] = useState("")
    const [ativo, setAtivo] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dados = {
            titulo,
            descricao,
            ramo_id,
            competencias,
            experiencia,
            salario_min,
            salario_max,
            ativo
        }
        editarVaga(dados)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Título:</span>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.value.target)} placeholder="Digite o titulo da vaga"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Descrição:</span>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.value.target)} placeholder="Digite a descrição da vaga"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Ramo:</span>
                    <input type="number" value={ramo_id} onChange={(e) => setRamoId(e.value.target)} placeholder="Escolha o ramo vaga"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Competencias:</span>
                    <input type="text" value={competencias} onChange={(e) => setCompetencias(e.value.target)} placeholder="Escolha as competencias para a vaga"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Experiencia:</span>
                    <input type="number" value={experiencia} onChange={(e) => setExperiencia(e.value.target)} placeholder="Digite a quantidade de anos de experiência para a vaga"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Salário Mínimo:</span>
                    <input type="number" value={salario_min} onChange={(e) => setSalarioMin(e.value.target)} placeholder="Digite o valor de salário mínimo para a vaga"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Salário Máximo:</span>
                    <input type="number" value={salario_max} onChange={(e) => setSalarioMax(e.value.target)} placeholder="Digite o valor de salário máximo para a vaga"/>
                </label>
            </div>
            <div>
                <label>
                    <span>Ativo:</span>
                    <input type="checkbox" value={ativo} onChange={(e) => setAtivo(e.value.target)}/>
                </label>
            </div>
        </form>
    </div>
  )
}

export default EditarVagas