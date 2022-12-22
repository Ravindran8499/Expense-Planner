import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./ExpenseList.css";
const ExpenseList = (props) => {
  const filteredExpenses = props.expenses;

  if (filteredExpenses.length <= 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!!</h2>;
  }

  return (
    <div className="expenses-list">
      {filteredExpenses.map((ele) => {
        return (
          <ExpenseItem
            key={ele.id}
            title={ele.title}
            date={ele.date}
            amount={ele.amount}
          />
        );
      })}
    </div>
  );
};

export default ExpenseList;
