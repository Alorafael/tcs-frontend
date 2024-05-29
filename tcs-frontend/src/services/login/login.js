import api from "../api/api";

export async function realizarLogin(dadosLogin){
    console.log("Salve", dadosLogin);
    try{
        const response = await api.post('/login/', dadosLogin);
        return(response.data)
    }
    catch(error){
        return({message: "Erro ao fazer login", success: false});
    }
}

export async function realizarLogout(dadosLogout){
    try{
        const response = await api.post('/logout', dadosLogout);
        return(response.data)
    }
    catch(error){
        return({message: "Erro ao fazer logout", success: false});
    }
}