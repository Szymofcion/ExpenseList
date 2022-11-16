import ExpenseItem from "./components/ExpenseItem";


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

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This also visible!</p>
      <ExpenseItem title={expenses[0].title} ammount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} ammount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} ammount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} ammount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>

    </div>
  );
}

export default App;
