import React, { useState } from 'react';

function ProjectForm({ addProject }) {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ name, details });
    setName('');
    setDetails('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del proyecto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Detalles del proyecto"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        required
      />
      <button type="submit">Crear Proyecto</button>
    </form>
  );
}

export default ProjectForm;