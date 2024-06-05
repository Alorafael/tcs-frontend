import React, { useEffect, useState } from 'react'

const Vaga = () => {

  const [vaga, setVaga] = useState([]);

  const handleBuscarVaga = async () => {
    const response = await dadosVaga(id);
    if(response.success === true){
      setVaga(response);
    }else{
      alert(response.message);
    }
  }

  useEffect(() => {
  handleBuscarVaga()
  }, []);
  
  return (
    <div>



    </div>
  )
}

export default Vaga