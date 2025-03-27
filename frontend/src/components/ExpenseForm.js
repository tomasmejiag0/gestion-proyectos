import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Protección contra addExpense undefined
    if (typeof addExpense !== 'function') {
      console.error('addExpense no es una función');
      return;
    }

    addExpense({ 
      amount: Number(amount),
      date,
      category
    });
    
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
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
      <button type="submit">Registrar Gasto</button>
    </form>
  );
}

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired
};

export default ExpenseForm;