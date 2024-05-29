import api from "../api/api";

export async function realizarCadastroCandidato(dadosCandidato){
    try {
        const response = await api.post('/usuarios/candidatos', dadosCandidato);
        return(response.data) 
    }
    catch(error){
        return({message: "Erro ao cadastrar", success: false});
    }
}

export async function realizarCadastroEmpresa(dadosEmpresa){
    try{
        const response = await api.post('/usuarios/empresa', dadosEmpresa);
        return(response.data)
    }
    catch(error){
        return({message: "Erro ao cadastrar", success: false});
    }
}