import React, { useState } from 'react';
import TaskItem from './TaskItem';

interface Task {
  title: string;
  description: string;
  subject: string;
  days: string[];
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (index: number) => void;
  removeTask: (index: number) => void;
}

const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

function TaskList({ tasks, toggleTask, removeTask }: TaskListProps) {
  const [filterDay, setFilterDay] = useState('');
  const [filterSubject, setFilterSubject] = useState('');

  const uniqueSubjects = Array.from(new Set(tasks.map(task => task.subject)));

  const filteredTasks = tasks.filter(task => {
    const dayMatch = filterDay ? task.days.includes(filterDay) : true;
    const subjectMatch = filterSubject ? task.subject === filterSubject : true;
    return dayMatch && subjectMatch;
  });

  return (
    <div className="task-list">
      {tasks.length > 0 && (
        <div className="filters">
          <select
            value={filterDay}
            onChange={e => setFilterDay(e.target.value)}
          >
            <option value="">Filtrar por dia</option>
            {weekDays.map((day, i) => (
              <option key={i} value={day}>{day}</option>
            ))}
          </select>

          <select
            value={filterSubject}
            onChange={e => setFilterSubject(e.target.value)}
          >
            <option value="">Filtrar por matéria</option>
            {uniqueSubjects.map((subject, i) => (
              <option key={i} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      )}

      <h2>Lista de Tarefas</h2>
      {filteredTasks.length === 0 ? (
        <p>Nenhuma tarefa encontrada.</p>
      ) : (
        filteredTasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;


