import React, { useState } from 'react';

function ProjectList({ projects, editProject, deleteProject }) {
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDetails, setEditDetails] = useState('');

  const startEditing = (project) => {
    setEditingId(project.id);
    setEditName(project.name);
    setEditDetails(project.details);
  };

  const saveEditing = (id) => {
    editProject(id, { id, name: editName, details: editDetails });
    setEditingId(null);
  };

  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          {editingId === project.id ? (
            <>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <textarea
                value={editDetails}
                onChange={(e) => setEditDetails(e.target.value)}
              />
              <button onClick={() => saveEditing(project.id)}>Guardar</button>
            </>
          ) : (
            <>
              <h3>{project.name}</h3>
              <p>{project.details}</p>
              <button onClick={() => startEditing(project)}>Editar</button>
              <button onClick={() => deleteProject(project.id)}>Eliminar</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;