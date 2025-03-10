import React, { useState } from 'react';

function TaskForm({ workers, addTask }) {
  const [description, setDescription] = useState('');
  const [workerId, setWorkerId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ description, workerId });
    setDescription('');
    setWorkerId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select
        value={workerId}
        onChange={(e) => setWorkerId(e.target.value)}
        required
      >
        <option value="">Seleccionar trabajador</option>
        {workers.map(worker => (
          <option key={worker.id} value={worker.id}>{worker.name}</option>
        ))}
      </select>
      <button type="submit">Asignar Tarea</button>
    </form>
  );
}

export default TaskForm;