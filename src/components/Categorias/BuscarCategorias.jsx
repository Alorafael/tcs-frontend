import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { buscarCategorias, deletarCategoria } from '../../services/categorias/categorias';

const BuscarCategorias = () => {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);

    const handleBuscarCategorias = async () => {
        const response = await buscarCategorias();
        if(response.success === true){
            setCategorias(response);
            console.log(response);
        }
        else{
            alert(response.message);
        }
    }

    useEffect(() => {
        handleBuscarCategorias();
    }, []);

    const handleSignup = () => {
        navigate("/categorias-cadastro");
    };

    const handleEdit= () => {
        navigate("/categorias-editar");
    };

    const handleDelete = async () => {
        try {
            const response = await deletarCategoria(categoria.id);
            if(response.success === true){
                alert('Excluido com sucesso!');
            }else{
                alert(response.message);
            }
        } catch (error) {
            console.error(error);
        }
  
    }

    return (
        <div>
            <h1>Listar Categorias</h1>
            <div>
                <h2>{JSON.stringify(categorias)}</h2>
            </div>
            {categorias.length > 0 ? (
                categorias.map((categoria) => (
                    <div key={categoria.id}>
                        <h2>{categoria.nome}</h2>
                        <div>
                            <button href={handleEdit}>Editar</button>
                        </div>
                        <div>
                            <button href={handleDelete}>Deletar</button>
                        </div>
                        <br />
                    </div>
                ))
            ) : (
                <p>Nenhuma categoria encontrada.</p>
            )}
            <div>
                <button onClick={handleSignup}>Cadastrar Categoria</button>
            </div>
        </div>
    ) 
}

export default BuscarCategorias;