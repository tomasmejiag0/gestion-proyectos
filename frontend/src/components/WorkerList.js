import React, { useState } from 'react';

function WorkerList({ workers = [], addWorker }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorker({ name });
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del trabajador"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Agregar Trabajador</button>
      </form>
      <ul>
        {workers?.map(worker => (
          <li key={worker.id}>{worker.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkerList;