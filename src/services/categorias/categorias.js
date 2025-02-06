import api from '../api/api'

export async function cadastrarCategoria(dadosCategoria){
    try{
        console.log("aqui")
        const response = await api.post('/categorias', dadosCategoria);
        return (response.data)
    }
    catch{
        return({message: "Erro ao coletar dados das categorias", success: false});
    }
}

export async function buscarCategorias(dadosCategoria){
    try {
        const response = await api.get('/categorias', dadosCategoria);
        return(response.data)
    }
    catch(error){
        return({message: "Erro ao coletar dados das categorias", success: false});
    }
}

export async function editarCategoria(dadosCategoria){
    try{
        const response = await api.put('/categorias/:id', dadosCategoria);
        return(response.data);
    }
    catch(error){
        return({message: "Erro ao coletar dados da categoria", success: false});
    }
}


export async function deletarCategoria(dadosCategoria){
    try{
        const response = await api.delete('/categorias/:id', dadosCategoria);
        return(response.data);
    }
    catch(error){
        return({message: "Erro ao coletar dados da categoria", sucess: false})
    }
}