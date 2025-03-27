import React from 'react';
import PropTypes from 'prop-types';

function ExpenseList({ expenses = [] }) {
  // Función para formatear montos
  const formatAmount = (amount) => {
    const num = Number(amount);
    return isNaN(num) ? '$0.00' : `$${num.toFixed(2)}`;
  };

  return (
    <div className="expense-list">
      <h3>Registro de Gastos</h3>
      {expenses.length === 0 ? (
        <p>No hay gastos registrados</p>
      ) : (
        <ul>
          {expenses.map(expense => (
            <li key={expense.id} className="expense-item">
              <div className="expense-header">
                <span className="expense-amount">{formatAmount(expense.amount)}</span>
                <span className="expense-category">{expense.category || 'Sin categoría'}</span>
              </div>
              <div className="expense-date">
                {expense.date || 'Fecha no especificada'}
              </div>
              {expense.description && (
                <p className="expense-description">{expense.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      date: PropTypes.string,
      category: PropTypes.string,
      description: PropTypes.string
    })
  )
};

ExpenseList.defaultProps = {
  expenses: []
};

export default ExpenseList;