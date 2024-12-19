import axios from 'axios';

export async function realizarLogin(dadosLogin){
    try {
        const ip = sessionStorage.getItem('IP');
        const porta = sessionStorage.getItem('Porta');
        console.log(dadosLogin, ip)
        const response = await axios.post('http://10.20.8.17:21000/login', dadosLogin);
        //console.log(response)
        return(response);
    } catch (error) {
        return({ message: "Erro ao fazer login",
                success: false});
    }
}