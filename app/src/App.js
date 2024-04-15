import React, { useState } from 'react';
import Bottone from './Bottone.js';
import './App.css';

const initialAlunni =[
  {nome: 'Mario', cognome: 'Rossi', voto: 6},
  {nome: 'Luca', cognome: 'Bianchi', voto: 7},
  {nome: 'Paolo', cognome: 'Verdi', voto: 8},
  {nome: 'Giovanni', cognome: 'Neri', voto: 9},
  {nome: 'Andrea', cognome: 'Gialli', voto: 10},
];

function App() {
  const [alunni, setAlunni] = useState(initialAlunni);

  const incrementVoto = (index) => {
    const newAlunni = [...alunni];
    newAlunni[index].voto += 1;
    setAlunni(newAlunni);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {alunni.map((alunno, index) => {
            return (
              <div key={index}>
                <p>{alunno.nome} {alunno.cognome} ha preso {alunno.voto}</p>
                <Bottone testo="Incrementa voto" onClick={() => incrementVoto(index)} />
              </div>
            );
          })}
        </p>
      </header>
    </div>
  );
}

export default App;