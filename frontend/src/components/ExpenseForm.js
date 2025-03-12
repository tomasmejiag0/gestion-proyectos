import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount, date, category });
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
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

export default ExpenseForm;