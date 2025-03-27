import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TaskForm({ workers = [], addTask }) {
  const [description, setDescription] = useState('');
  const [workerId, setWorkerId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificaciones de seguridad
    if (typeof addTask !== 'function') {
      console.error('addTask no es una función');
      return;
    }

    if (!description.trim()) return;

    addTask({ 
      description: description.trim(),
      workerId
    });
    
    setDescription('');
    setWorkerId('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        minLength={3}
      />
      <select
        value={workerId}
        onChange={(e) => setWorkerId(e.target.value)}
        required
      >
        <option value="">Seleccionar trabajador</option>
        {workers.map(worker => (
          <option key={worker.id} value={worker.id}>
            {worker.name}
          </option>
        ))}
      </select>
      <button type="submit">Asignar Tarea</button>
    </form>
  );
}

TaskForm.propTypes = {
  workers: PropTypes.array,
  addTask: PropTypes.func.isRequired
};

TaskForm.defaultProps = {
  workers: []
};

export default TaskForm;