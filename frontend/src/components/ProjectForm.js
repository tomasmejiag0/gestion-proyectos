import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProjectForm({ addProject }) {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Protección contra addProject undefined
    if (typeof addProject !== 'function') {
      console.error('Error: addProject no es una función válida');
      return;
    }

    // Validación de campos requeridos
    if (!name.trim() || !startDate) {
      console.error('Error: Nombre y fecha de inicio son requeridos');
      return;
    }

    // Llamada segura a la función addProject
    addProject({
      name: name.trim(),
      details: details.trim(),
      startDate,
      endDate,
      budget: budget ? Number(budget) : 0
    });

    // Reset del formulario
    setName('');
    setDetails('');
    setStartDate('');
    setEndDate('');
    setBudget('');
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <div className="form-group">
        <label htmlFor="project-name">Nombre del Proyecto*</label>
        <input
          id="project-name"
          type="text"
          placeholder="Nombre del proyecto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="project-details">Detalles</label>
        <textarea
          id="project-details"
          placeholder="Detalles del proyecto"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="start-date">Fecha Inicio*</label>
          <input
            id="start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="end-date">Fecha Fin</label>
          <input
            id="end-date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={startDate} // Fecha mínima = fecha de inicio
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="project-budget">Presupuesto ($)</label>
        <input
          id="project-budget"
          type="number"
          placeholder="Presupuesto"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <button type="submit" className="submit-btn">
        Crear Proyecto
      </button>
    </form>
  );
}

ProjectForm.propTypes = {
  addProject: PropTypes.func.isRequired
};

export default ProjectForm;