import React, { useState } from 'react';

const materiasDisponiveis = ['Matemática', 'História', 'Física', 'Química', 'Português'];
const diasSemanaDisponiveis = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

function App() {
  const [tarefas, setTarefas] = useState([]);

  // Estados para o formulário de nova tarefa
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [materia, setMateria] = useState('');
  const [diasSemana, setDiasSemana] = useState([]);

  // Estados para filtros
  const [filtroMateria, setFiltroMateria] = useState('');
  const [filtroDia, setFiltroDia] = useState('');

  // Função para adicionar tarefa
  const adicionarTarefa = () => {
    if (!titulo.trim()) {
      alert('Informe o título da tarefa');
      return;
    }
    if (!materia) {
      alert('Selecione uma matéria');
      return;
    }
    if (diasSemana.length === 0) {
      alert('Selecione pelo menos um dia da semana');
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      materia,
      diasSemana,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);

    // Limpa o formulário
    setTitulo('');
    setDescricao('');
    setMateria('');
    setDiasSemana([]);
  };

  // Alterna concluída
  const alternarConcluida = (id) => {
    const atualizadas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(atualizadas);
  };

  // Excluir tarefa
  const excluirTarefa = (id) => {
    const restantes = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(restantes);
  };

  // Atualiza seleção dos dias (checkbox)
  const alternarDiaSemana = (dia) => {
    if (diasSemana.includes(dia)) {
      setDiasSemana(diasSemana.filter(d => d !== dia));
    } else {
      setDiasSemana([...diasSemana, dia]);
    }
  };

  // Aplica filtros
  const tarefasFiltradas = tarefas.filter(tarefa => {
    const filtraMateria = filtroMateria === '' || tarefa.materia === filtroMateria;
    const filtraDia = filtroDia === '' || tarefa.diasSemana.includes(filtroDia);
    return filtraMateria && filtraDia;
  });

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Checklist de Estudos Inteligente</h1>

      {/* Formulário para adicionar tarefa */}
      <div style={{ marginBottom: 30, padding: 15, border: '1px solid #ccc', borderRadius: 5 }}>
        <h2>Adicionar Nova Tarefa</h2>
        <div>
          <label><strong>Título:</strong></label><br />
          <input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 10 }}
          />
        </div>
        <div>
          <label><strong>Descrição:</strong></label><br />
          <textarea
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            rows={3}
            style={{ width: '100%', padding: 8, marginBottom: 10 }}
          />
        </div>
        <div>
          <label><strong>Matéria:</strong></label><br />
          <select
            value={materia}
            onChange={e => setMateria(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 10 }}
          >
            <option value="">-- Selecione uma matéria --</option>
            {materiasDisponiveis.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label><strong>Dias da Semana:</strong></label><br />
          {diasSemanaDisponiveis.map(dia => (
            <label key={dia} style={{ marginRight: 10 }}>
              <input
                type="checkbox"
                checked={diasSemana.includes(dia)}
                onChange={() => alternarDiaSemana(dia)}
              /> {dia}
            </label>
          ))}
        </div>
        <button
          onClick={adicionarTarefa}
          style={{ marginTop: 15, padding: '8px 16px', cursor: 'pointer' }}
        >
          Adicionar Tarefa
        </button>
      </div>

      {/* Filtros */}
      <div style={{ marginBottom: 30 }}>
        <h2>Filtrar Tarefas</h2>
        <label>Matéria:</label>
        <select
          value={filtroMateria}
          onChange={e => setFiltroMateria(e.target.value)}
          style={{ marginLeft: 10, padding: 6 }}
        >
          <option value="">Todas</option>
          {materiasDisponiveis.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <label style={{ marginLeft: 20 }}>Dia da Semana:</label>
        <select
          value={filtroDia}
          onChange={e => setFiltroDia(e.target.value)}
          style={{ marginLeft: 10, padding: 6 }}
        >
          <option value="">Todos</option>
          {diasSemanaDisponiveis.map(dia => (
            <option key={dia} value={dia}>{dia}</option>
          ))}
        </select>
      </div>

      {/* Lista de tarefas */}
      <div>
        <h2>Tarefas</h2>
        {tarefasFiltradas.length === 0 ? (
          <p>Nenhuma tarefa encontrada.</p>
        ) : (
          tarefasFiltradas.map(tarefa => (
            <div
              key={tarefa.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
                backgroundColor: tarefa.concluida ? '#d4edda' : '#fff'
              }}
            >
              <h3 style={{ margin: 0, textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                {tarefa.titulo} <small>({tarefa.materia})</small>
              </h3>
              <p>{tarefa.descricao}</p>
              <p><strong>Dias:</strong> {tarefa.diasSemana.join(', ')}</p>
              <label>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => alternarConcluida(tarefa.id)}
                /> Concluída
              </label>
              <button
                onClick={() => excluirTarefa(tarefa.id)}
                style={{ marginLeft: 15, cursor: 'pointer' }}
              >
                Excluir
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
