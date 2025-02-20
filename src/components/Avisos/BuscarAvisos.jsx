import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { buscarAvisos, deletarAviso } from '../../services/avisos/avisos';
import { buscarCategorias} from '../../services/categorias/categorias';
import api from '../../services/api/api'


const BuscarAvisos = () => {
    const navigate = useNavigate();
    const [avisos, setAvisos] = useState([]);
    const [idCategoria, setIdCategoria] = useState("")
    const [categorias, setCategorias] = useState([])
    const [erro, setErro] = useState('');

    const handleBuscarAvisos = async () => {
        const response = await buscarAvisos(idCategoria);
        if(response.status === 200){
            setAvisos(response.data);
            console.log(response.data);
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
        if (idCategoria) {
            handleBuscarAvisos();
        }
    }, [idCategoria]);

    useEffect(() => {
        // Fetch categorias on mount
        const fetchCategorias = async () => {
            const response = await buscarCategorias();
            setCategorias(response.data || []); // Default to empty array if data is null
        };

        fetchCategorias();
    }, [buscarCategorias]);

    const handleRegister = () => {
        navigate("/avisos-cadastro");
    };

    const handleEdit = (aviso) => {
        navigate(`/avisos-editar/${aviso.id}`);
    };

    const handleDelete = async (aviso) => {
        try {
            const response = await deletarAviso(aviso);
            if(response.status === 200){
                alert('Excluido com sucesso!');
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
            <h1>Listar Avisos</h1>
            <label>
                <span>Categoria:</span>
                <select value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>
                </label>
            {avisos.length > 0 ? (
                avisos.map((aviso) => (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={aviso.id}>
                            <td>{aviso.id}</td>
                            <td>{aviso.descricao}</td>
                            <td>
                                <button onClick={() => handleEdit(aviso)}>Editar</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(aviso)}>Deletar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                ))
            ) : (
                <p>Nenhuma categoria encontrada.</p>
            )}
            <div>
                <button onClick={handleRegister}>Cadastrar Aviso</button>
            </div>
            <div>
                <button onClick={handleBack}>Voltar</button>
            </div>
        </div>
    ) 
}

export default BuscarAvisos;