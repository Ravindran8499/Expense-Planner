import React from "react";
import { ReactDOM } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.36,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "New  laptop",
      amount: 32.05,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e6",
      title: "Mobile Phone",
      amount: 400.6,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e7",
      title: "Tarkis Jain",
      amount: 36.3,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (newData) => {
    console.log(newData);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};
export default App;
