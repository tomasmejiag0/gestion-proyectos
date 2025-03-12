import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import WorkerList from './components/WorkerList';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Funciones para proyectos, trabajadores y tareas (ya existentes)
  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  const editProject = (id, updatedProject) => {
    setProjects(projects.map(project => project.id === id ? updatedProject : project));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const addWorker = (worker) => {
    setWorkers([...workers, { ...worker, id: Date.now() }]);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'Pendiente' }]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  // Funciones para ingresos
  const addIncome = (income) => {
    setIncomes([...incomes, { ...income, id: Date.now() }]);
  };

  // Funciones para gastos
  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
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
        <div className="section">
          <h2>Ingresos</h2>
          <IncomeForm addIncome={addIncome} />
          <IncomeList incomes={incomes} />
        </div>
        <div className="section">
          <h2>Gastos</h2>
          <ExpenseForm addExpense={addExpense} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;