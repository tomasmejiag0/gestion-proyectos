import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProjectList({ projects = [], editProject, deleteProject }) {
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDetails, setEditDetails] = useState('');

  // Función segura para comenzar a editar
  const startEditing = (project) => {
    if (!project) return;
    
    setEditingId(project.id);
    setEditName(project.name || '');
    setEditDetails(project.details || '');
  };

  // Función segura para guardar edición
  const saveEditing = (id) => {
    if (typeof editProject !== 'function') {
      console.error('editProject no es una función');
      return;
    }

    editProject(id, { 
      id, 
      name: editName.trim(), 
      details: editDetails.trim() 
    });
    setEditingId(null);
  };

  return (
    <div className="project-list">
      <h3>Listado de Proyectos</h3>
      {projects.length === 0 ? (
        <p>No hay proyectos registrados</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id} className="project-item">
              {editingId === project.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Nombre del proyecto"
                    required
                  />
                  <textarea
                    value={editDetails}
                    onChange={(e) => setEditDetails(e.target.value)}
                    placeholder="Detalles del proyecto"
                  />
                  <button 
                    onClick={() => saveEditing(project.id)}
                    className="save-btn"
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div className="project-info">
                  <h4>{project.name}</h4>
                  <p>{project.details}</p>
                  <div className="project-actions">
                    <button 
                      onClick={() => startEditing(project)}
                      className="edit-btn"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => typeof deleteProject === 'function' && deleteProject(project.id)}
                      className="delete-btn"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      details: PropTypes.string
    })
  ),
  editProject: PropTypes.func,
  deleteProject: PropTypes.func
};

ProjectList.defaultProps = {
  projects: [],
  editProject: () => console.warn('editProject no está definido'),
  deleteProject: () => console.warn('deleteProject no está definido')
};

export default ProjectList;