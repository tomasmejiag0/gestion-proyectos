import React from 'react';
import PropTypes from 'prop-types';

function TaskList({ tasks, updateTaskStatus }) {
  // Defensa explícita contra undefined
  const safeTasks = Array.isArray(tasks) ? tasks : [];

  return (
    <div className="task-list">
      <h3>Tareas asignadas</h3>
      <ul>
        {safeTasks.map(task => (
          <li key={task.id}>
            <p><strong>Descripción:</strong> {task.description}</p>
            <p><strong>Trabajador:</strong> {task.workerId}</p>
            <div className="task-status">
              <label>
                <strong>Estado:</strong>
                <select
                  value={task.status}
                  onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="En progreso">En progreso</option>
                  <option value="Completada">Completada</option>
                </select>
              </label>
            </div>
          </li>
        ))}
      </ul>
      {safeTasks.length === 0 && <p>No hay tareas asignadas</p>}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  updateTaskStatus: PropTypes.func.isRequired
};

TaskList.defaultProps = {
  tasks: undefined // Fuerza el uso de la defensa
};

export default TaskList;