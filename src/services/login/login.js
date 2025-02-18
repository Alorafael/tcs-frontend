import api from '../api/api';

export async function realizarLogin(dadosLogin){
    try {
        console.log(dadosLogin)
        console.log(sessionStorage?.getItem('IP'))
        console.log(sessionStorage?.getItem('Porta'))
        console.log(api)
        if (!api) {
            throw new Error("Erro: API não configurada corretamente. Verifique o IP e Porta.");
        }
        const response = await api.post('/login', dadosLogin)
        return response

    } catch (error) {
        console.log(error)
        return({ message: "Erro ao fazer login",
                success: false});
    }
}