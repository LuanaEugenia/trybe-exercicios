import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
      const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

  return (
    <div>
      <ul>
        { tarefas.map((item) => Task(item)) }
      </ul>
    </div>
  );
}

export default App;
