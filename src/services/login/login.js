import api from '../api/api';

export async function realizarLogin(dadosLogin){
    try {
        const response = await api.post('/login', dadosLogin)
        return response

    } catch (error) {
        return({ message: "Erro ao fazer login",
                success: false});
    }
}