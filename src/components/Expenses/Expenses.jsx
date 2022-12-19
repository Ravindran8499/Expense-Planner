import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (Year) => {
    // console.log("From Expenses component");
    setfilteredYear(Year);
    // console.log(filteredYear);
  };
  const item = props.item;
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {item.map((ele) => {
        return (
          <ExpenseItem
            key={ele.id}
            title={ele.title}
            date={ele.date}
            amount={ele.amount}
          />
        );
      })}
    </Card>
  );
};
export default Expenses;
