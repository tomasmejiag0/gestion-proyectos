import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import WorkerList from './components/WorkerList';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Crear un nuevo proyecto
  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  // Editar un proyecto existente
  const editProject = (id, updatedProject) => {
    setProjects(projects.map(project => project.id === id ? updatedProject : project));
  };

  // Eliminar un proyecto
  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  // Agregar un trabajador
  const addWorker = (worker) => {
    setWorkers([...workers, { ...worker, id: Date.now() }]);
  };

  // Asignar una tarea a un trabajador
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'Pendiente' }]);
  };

  // Cambiar el estado de una tarea
  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  return (
    <div className="App">
      <h1>Gestión de Proyectos de Construcción</h1>
      <div className="container">
        <div className="section">
          <h2>Proyectos</h2>
          <ProjectForm addProject={addProject} />
          <ProjectList projects={projects} editProject={editProject} deleteProject={deleteProject} />
        </div>
        <div className="section">
          <h2>Trabajadores</h2>
          <WorkerList workers={workers} addWorker={addWorker} />
        </div>
        <div className="section">
          <h2>Tareas</h2>
          <TaskForm workers={workers} addTask={addTask} />
          <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
        </div>
      </div>
    </div>
  );
}

export default App;