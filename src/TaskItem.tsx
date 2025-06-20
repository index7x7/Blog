import React from 'react';

function TaskItem({ task, index, toggleTask, removeTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Matéria:</strong> {task.subject}</p>
      <p><strong>Dias:</strong> {task.days.join(', ')}</p>
      <button onClick={() => toggleTask(index)}>
        {task.completed ? 'Desmarcar' : 'Concluir'}
      </button>
      <button onClick={() => removeTask(index)} style={{ marginLeft: '10px' }}>
        Remover
      </button>
    </div>
  );
}

export default TaskItem;
