import api from '../api/api'

export async function cadastrarAviso(dadosAviso){
    try{
        const response = await api.post('/avisos', dadosAviso);
        return (response)
    }
    catch{
        return({message: "Erro ao cadastrar avisos", success: false});
    }
}

export async function buscarAvisos(id){
    try {
        const response = await api.get(`/avisos/${id}`);
        return(response)
    }
    catch(error){
        return({message: "Erro ao coletar dados dos avisos", success: false});
    }
}

export async function buscarAviso(dadosAviso){
    try {
        const response = await api.get(`/avisos/${dadosAviso.id}`, dadosAviso);
        return(response)
    }
    catch(error){
        return({message: "Erro ao coletar dados dos avisos", success: false});
    }
}

export async function atualizarAviso(dadosAviso){
    try{
        const response = await api.put(`/avisos/${dadosAviso.id}`, dadosAviso);
        return(response);
    }
    catch{
        return({message: "Erro ao atualizar aviso", success: false});
    }
}

export async function deletarAviso(dadosAviso){
    try{
        const response = await api.delete(`/usuarios/${dadosAviso.id}`, dadosAviso);
        return(response);
    }
    catch{
        return({message: "Erro ao deletar aviso", success: false});
    }
}