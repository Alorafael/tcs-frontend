import React, { useState } from 'react';
import { buscarUsuarios } from '../../services/users/users';
import { useNavigate } from 'react-router-dom';

const BuscarUsuario = () => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([])

    const handleBuscarUsuarios = async () => {
        const response = await buscarUsuarios();
        if(response.status === 201){
            setUsuarios(usuarios);
            console.log(response)
        }else{
            alert(response.message);
        }
    }

    useEffect(() => {
        handleBuscarUsuarios();
    }, []);

    const handleEdit = (id) => {
        navigate(`/usuarios-editar/${id}`);
    };

    const handleDelete = async (id, nome) => {
        try {
            const response = await deletarUsuarios(id);
            if(response.status === 201){
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
            <h1>Listar Usuários</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.length > 0 ? (
                            usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nome}</td>
                                    <td>
                                        <button onClick={() => handleEdit(usuario.id, usuario.nome)}>Editar</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(usuario.id)}>Deletar</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <p>Nenhum usuário encontrado.</p>
                        )}
                    </tbody>
                </table>
        </div>
    ) 
}

export default BuscarUsuario;