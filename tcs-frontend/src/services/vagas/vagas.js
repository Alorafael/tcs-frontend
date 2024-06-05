import api from "../api/api";

export async function realizarCadastroVaga(dadosVaga) {
    try {
        const response = await api.post('/vagas', dadosVaga);
        return (response.data)
    }
    catch(error){
        return({message: "Erro ao cadastrar vaga", success: false});
    }
}

export async function editarVaga(dadosVaga, id) {
    try{
        const response = await api.put(`/vagas/${id}`, dadosVaga);
        return(response.data)
    }
    catch(error){
        return({message: "Erro ao editar vaga", success:false});
    }
}

export async function deletarVaga(dadosVaga, id) {
    try{
        const response = await api.delete(`/vagas/${id}`, dadosVaga);
        return(response.data)
    }
    catch(error){
        return({message: "Erro ao deletar vaga", success:false})
    }
}

export async function dadosVagas(dadosVaga) {
    try{
        const response = await api.get('/vagas', dadosVaga);
        return(response.data)
    }
    catch{
        return({message: "Erro ao coletar vagas", success: false})
    }
}

export async function dadosVaga(dadosVaga, id) {
    try{
        const response = await api.get(`/vagas/${id}`, dadosVaga);
        return(response.data)
    }
    catch(error){
        return({message: "Erro ao coletar dados da vaga", success: false})
    }
}