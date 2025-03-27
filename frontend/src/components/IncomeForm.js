import React, { useState } from 'react';
import PropTypes from 'prop-types';

function IncomeForm({ addIncome }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificación de addIncome
    if (typeof addIncome !== 'function') {
      console.error('addIncome no es una función');
      return;
    }

    addIncome({ 
      amount: Number(amount),
      date,
      category
    });
    
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="income-form">
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Registrar Ingreso</button>
    </form>
  );
}

IncomeForm.propTypes = {
  addIncome: PropTypes.func.isRequired
};

export default IncomeForm;