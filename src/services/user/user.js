import api from "../api/api";

export async function cadastrarUsuario(dadosUsuario){
    try {
        const response = await api.post('/usuarios', dadosUsuario);
        return(response) 
    }
    catch(error){
        return({message: "Erro ao cadastrar usuário", success: false});
    }
}

export async function buscarUsuarios(dadosUsuario){
    try{
        const response = await api.get('/usuarios', dadosUsuario);
        return(response);
    }
    catch(error){
        return({message: "Erro ao buscar usuários", success: false});
    }
}

export async function buscarUsuario(dadosUsuario){
    try{
        const response = await api.get('/usuarios/:id', dadosUsuario);
        return(response);
    }
    catch{
        return({message: "Erro ao buscar usuário", success: false});
    }
}

export async function atualizarUsuario(dadosUsuario){
    try{
        const response = await api.put('/usuarios/:id', dadosUsuario);
        return(response);
    }
    catch{
        return({message: "Erro ao atualizar usuário", success: false});
    }
}

export async function deletarUsuario(dadosUsuario){
    try{
        const response = await api.delete('/usuarios/:id', dadosUsuario);
        return(response);
    }
    catch{
        return({message: "Erro ao deletar usuário", success: false});
    }
}