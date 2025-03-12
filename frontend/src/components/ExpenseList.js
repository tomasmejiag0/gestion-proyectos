import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map(expense => (
        <li key={expense.id}>
          <p>Monto: ${expense.amount}</p>
          <p>Fecha: {expense.date}</p>
          <p>Categoría: {expense.category}</p>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;