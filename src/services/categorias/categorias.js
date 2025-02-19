import api from '../api/api'

export async function cadastrarCategoria(dadosCategoria){
    try{
        console.log(dadosCategoria)
        const response = await api.post('/categorias', dadosCategoria);
        return (response);
    }
    catch{
        return({message: "Erro ao coletar dados das categorias", success: false});
    }
}

export async function buscarCategorias(dadosCategoria){
    try {
        const response = await api.get('/categorias', dadosCategoria);
        return(response)
    }
    catch(error){
        return({message: "Erro ao coletar dados das categorias", success: false});
    }
}

export async function buscarCategoria(dadosCategoria){
    try {
        const response = await api.get(`/categorias/${dadosCategoria.id}`, dadosCategoria);
        return(response)
    }
    catch(error){
        return({message: "Erro ao coletar dados das categorias", success: false});
    }
}

export async function editarCategoria(dadosCategoria){
    try{
        const response = await api.put(`/categorias/${dadosCategoria.id}`, dadosCategoria);
        return(response);
    }
    catch(error){
        return({message: "Erro ao coletar dados da categoria", success: false});
    }
}


export async function deletarCategoria(dadosCategoria){
    try{
        const response = await api.delete(`/categorias/${dadosCategoria.id}`, dadosCategoria);
        return(response);
    }
    catch(error){
        return({message: "Erro ao coletar dados da categoria", sucess: false})
    }
}