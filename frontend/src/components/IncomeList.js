import React from 'react';

function IncomeList({ incomes }) {
  return (
    <ul>
      {incomes.map(income => (
        <li key={income.id}>
          <p>Monto: ${income.amount}</p>
          <p>Fecha: {income.date}</p>
          <p>Categoría: {income.category}</p>
        </li>
      ))}
    </ul>
  );
}

export default IncomeList;