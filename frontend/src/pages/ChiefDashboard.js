import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function ChiefDashboard() {
  return (
    <div className="dashboard-container">
      <h1>Panel de Jefe de Obra</h1>
      <div className="section">
        <h2>Gestión de Tareas</h2>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default ChiefDashboard;