import api from "../api/api";

export async function dadosUsuario(dadosUsuario){
    try {
        const response = await api.get('/usuario', dadosUsuario);
        return(response.data)
    }
    catch(error){
        return({message: "Erro ao coletar dados do usuário", success: false});
    }
} 

export async function editarUsuario(dadosUsuario){
    try {
        const response = await api.put('/usuario', dadosUsuario);
        return(response.data);
    } catch (error) {
        return({message: "Erro ao editar dados do usuário", success: false});
    }
}

export async function deletarUsuario(dadosUsuario){
    try {
        const response = await api.delete('/usuario', dadosUsuario);
        return(response.data)
    }
    catch(error){
        return({message: "Erro ao deletar usuário", success: fakse});
    }
}