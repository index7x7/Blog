import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Task {
  title: string;
  description: string;
  subject: string;
  days: string[];
  completed: boolean;
}

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

function TaskForm({ addTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [days, setDays] = useState<string[]>([]);

  const handleDayChange = (day: string) => {
    if (days.includes(day)) {
      setDays(days.filter(d => d !== day));
    } else {
      setDays([...days, day]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !subject || days.length === 0) {
      alert('Por favor, preencha o título, a matéria e selecione pelo menos um dia.');
      return;
    }
    addTask({
      title,
      description,
      subject,
      days,
      completed: false,
    });
    setTitle('');
    setDescription('');
    setSubject('');
    setDays([]);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Adicionar Nova Tarefa</h2>

      <div className="form-row">
        <div className="form-left">
          <input
            type="text"
            placeholder="Título da tarefa"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Descrição da tarefa"
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          />

          <input
            type="text"
            placeholder="Matéria"
            value={subject}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
            required
          />

          <button type="submit">Adicionar Tarefa</button>
        </div>

        <div className="form-right">
          <p>Selecione os dias da semana:</p>
          <div className="weekdays-checkboxes">
            {weekDays.map(day => (
              <label key={day}>
                <input
                  type="checkbox"
                  checked={days.includes(day)}
                  onChange={() => handleDayChange(day)}
                />
                {day}
              </label>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;

