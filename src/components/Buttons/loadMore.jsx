import React, { useState } from 'react';

const LoadMore = ({ updateNewValue, getPokemons }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {

      await getPokemons();
      updateNewValue((prevValue) => prevValue + 60);

      setTimeout(() => {
        setLoading(false); 
      }, 1000); 
    } catch (error) {
      console.error("Erro ao carregar mais Pokémon:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Carregando...' : 'Carregar Mais'}
      </button>
    </div>
  );
};

export default LoadMore;
