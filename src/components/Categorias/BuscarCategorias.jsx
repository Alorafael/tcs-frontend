import React, { useEffect, useState } from 'react';
import { buscarCategorias } from '../../services/categorias/categorias';

const BuscarCategorias = () => {
    const [categorias, setCategorias] = useState([]);

    const handleBuscarCategorias = async () => {
        const response = await buscarCategorias();
        if(response.success === true){
            setCategorias(response);
        }
        else{
            alert(response.message);
        }
    }

    useEffect(() => {
        handleBuscarCategorias()
    }, []);

    console.log(categorias);

    return (
        <div>
            <h1>Listar Categorias</h1>
            {categorias.map((nome, index) => (
                <div key={index}>
                    <h2>{categorias.nome}</h2>
                    <br/>
                </div>
            ))}

        </div>
    ) 
}

export default BuscarCategorias;