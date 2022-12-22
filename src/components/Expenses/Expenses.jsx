import React, { useState } from "react";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2022");

  const filterChangeHandler = (Year) => {
    setfilteredYear(Year);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
