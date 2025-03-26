import React from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
import WorkerList from '../components/WorkerList';

function AdminDashboard() {
  return (
    <div>
      <h1>Panel de Administrador</h1>
      <div className="section">
        <h2>Gestión de Proyectos</h2>
        <ProjectForm />
        <ProjectList />
      </div>
      <div className="section">
        <h2>Gestión de Trabajadores</h2>
        <WorkerList />
      </div>
    </div>
  );
}

export default AdminDashboard;