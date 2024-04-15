import React, { useState } from 'react';

export default function Bottone({testo}) {
  const [numero, setNumero] = useState(0);

  const handleClick = () => {
    setNumero(numero + 1);
  };

  return (
    <div>
        <button onClick={handleClick}>{testo}</button>
        <p>{numero}</p>
    </div>
  );
}