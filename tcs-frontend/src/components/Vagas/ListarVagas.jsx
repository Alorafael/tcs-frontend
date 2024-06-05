import React, { useEffect, useState } from 'react'
import { dadosVagas } from '../../services/vagas/vagas';

const ListarVagas = () => {
  const [vagas, setVagas] = useState([]);

  const handleBuscarVagas = async () => {
    const response = await dadosVagas();
    if(response.success === true){
        setVagas(response);
    }else{
        alert(response.message);
    }
}

  useEffect(() => {
    handleBuscarVagas()
  }, []);

  console.log(vagas)

  return (
    <div>
      

    </div>
  )
}

export default ListarVagas