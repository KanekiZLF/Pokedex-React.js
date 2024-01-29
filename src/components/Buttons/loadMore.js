import React from 'react';

const loadMore = ({updateNewValue }) => {
  const handleClick = () => {
    // Lógica do clique do botão
    updateNewValue((prevValue) => prevValue + 60);
  };

  return (
    <button onClick={handleClick}>
      Carregar Mais
    </button>
  );
};

export default loadMore