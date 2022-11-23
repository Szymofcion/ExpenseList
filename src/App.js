import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id:'1',
    title: 'Toilet Paper',
    amount: 45.12,
    date: new Date(2022, 4, 12)
  },
  {
    id:'2',
    title: 'food',
    amount: 341.23,
    date: new Date(2022, 11, 16)
  },
  {
    id:'3',
    title: 'Gifts ',
    amount: 95.42,
    date: new Date(2022, 12, 1)
  },
  {
    id:'4',
    title: 'Car Insurance',
    amount: 299.99,
    date: new Date(2022, 10, 12)
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
