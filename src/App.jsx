import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;
    setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, concluida: false }]);
    setNovaTarefa('');
  };

  const alternarTarefa = (id) => {
    setTarefas(
      tarefas.map(tarefa =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  return (
    <div className="App">
      <h1>Checklist de Estudos</h1>
      <div className="adicionar-tarefa">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicionar uma nova tarefa"
          onKeyPress={(e) => e.key === 'Enter' && adicionarTarefa()}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul className="lista-tarefas">
        {tarefas.map(tarefa => (
          <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alternarTarefa(tarefa.id)}
            />
            <span>{tarefa.texto}</span>
            <button onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <div className="info">
        <p>Total de tarefas: {tarefas.length}</p>
        <p>Tarefas concluídas: {tarefas.filter(t => t.concluida).length}</p>
      </div>
    </div>
  );
}

export default App;
