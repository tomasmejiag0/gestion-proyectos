import React from 'react';
import IncomeForm from '../components/IncomeForm';
import IncomeList from '../components/IncomeList';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

function ManagerDashboard() {
  return (
    <div>
      <h1>Panel de Gerente</h1>
      <div className="section">
        <h2>Registro de Ingresos</h2>
        <IncomeForm />
        <IncomeList />
      </div>
      <div className="section">
        <h2>Registro de Gastos</h2>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </div>
  );
}

export default ManagerDashboard;