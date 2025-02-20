import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { buscarCategorias, deletarCategoria } from '../../services/categorias/categorias';
import api from '../../services/api/api'

const BuscarCategorias = () => {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);
    const [erro, setErro] = useState('');

    const handleBuscarCategorias = async () => {
        const response = await buscarCategorias();

        if(response.status === 200){
            setCategorias(response.data);
            console.log(categorias);
        }
        else{
            alert(response.message);
        }
    }

    useEffect(() => {
        const ip = sessionStorage?.getItem('IP');
        const porta = sessionStorage?.getItem('Porta');
        
        if (ip && porta) {
          api.defaults.baseURL = `http://${ip}:${porta}`; 
        } else {
          setErro("IP ou Porta não encontrados no sessionStorage.");
        }
      }, []);

    useEffect(() => {
        handleBuscarCategorias();
    }, []);

    const handleSignup = () => {
        navigate("/categorias-cadastro");
    };

    const handleEdit = (categoria) => {
        navigate(`/categorias-editar/${categoria.id}`);
    };

    const handleDelete = async (categoria) => {
        try {
            const response = await deletarCategoria(categoria);
            if(response.status === 200){
                alert('Excluído com sucesso!');
            }else{
                alert(response.message);
            }
        } catch (error) {
            console.error(error);
        }
  
    }

    const handleBack = () => {
        navigate('/home')
    }

    return (
        <div>
            <h1>Listar Categorias</h1>
                    {categorias.length > 0 ? (
                        categorias.map((categoria) => (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={categoria.id}>
                                    <td>{categoria.id}</td>
                                    <td>{categoria.nome}</td>
                                    <td>
                                        <button onClick={() => handleEdit(categoria)}>Editar</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(categoria)}>Deletar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        ))
                    ) : (
                        <p>Nenhuma categoria encontrada.</p>
                    )}
            
            <div>
                <button onClick={handleSignup}>Cadastrar Nova Categoria</button>
            </div>
            <div>
                <button onClick={handleBack}>Voltar</button>
            </div>
        </div>
    ) 
}

export default BuscarCategorias;