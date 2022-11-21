import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [{
    title: 'Toilet Paper',
    amount: 45.12,
    date: new Date(2022, 4, 12)
  },
  {
    title: 'food',
    amount: 341.23,
    date: new Date(2022, 11, 16)
  },
  {
    title: 'Car Insurance',
    amount: 299.99,
    date: new Date(2022, 10, 12)
  },
  {
    title: 'Gifts ',
    amount: 95.42,
    date: new Date(2022, 12, 1)
  }
  ];

  const addExpenseHandler = (expense) => {
    console.log('in App.js');
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
