import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date("2022-07-14"),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date("2023-01-12") },
    {
      id:'e3',
      title: 'Car Insurance',
      amount: 300.00,
      date: new Date("2023-01-01"),
    },
    {
    id:'e4',
    title: 'New desk (Wooden)',
    amount: 450,
    date: new Date ("2022-05-12"),
   },
  ];
  
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
      <p>Jarno Hantula / Vamk/ BIT</p>
      </div>
      
  );
}

export default App;
