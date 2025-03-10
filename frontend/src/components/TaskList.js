import React from 'react';

function TaskList({ tasks, updateTaskStatus }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <p>{task.description}</p>
          <p>Trabajador: {task.workerId}</p>
          <p>Estado: {task.status}</p>
          <select
            value={task.status}
            onChange={(e) => updateTaskStatus(task.id, e.target.value)}
          >
            <option value="Pendiente">Pendiente</option>
            <option value="En progreso">En progreso</option>
            <option value="Completada">Completada</option>
          </select>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;