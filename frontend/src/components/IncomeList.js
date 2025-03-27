import React from 'react';
import PropTypes from 'prop-types';

function IncomeList({ incomes }) {
  // Defensa explícita contra undefined (no contra null)
  const safeIncomes = Array.isArray(incomes) ? incomes : [];

  return (
    <div className="income-list">
      <h3>Registro de Ingresos</h3>
      <ul>
        {safeIncomes.map(income => (
          <li key={income.id}>
            <p><strong>Monto:</strong> ${income.amount}</p>
            <p><strong>Fecha:</strong> {income.date}</p>
            <p><strong>Categoría:</strong> {income.category}</p>
          </li>
        ))}
      </ul>
      {safeIncomes.length === 0 && <p>No hay ingresos registrados</p>}
    </div>
  );
}

IncomeList.propTypes = {
  incomes: PropTypes.array
};

IncomeList.defaultProps = {
  incomes: undefined // Esto fuerza a que se use la defensa
};

export default IncomeList;