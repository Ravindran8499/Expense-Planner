import React from "react";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Expenses = (props) => {
  const item = props.item;
  return (
    <div className="expenses">
      {item.map((ele) => {
        return (
          <ExpenseItem title={ele.title} date={ele.date} amount={ele.amount} />
        );
      })}
    </div>
  );
};
export default Expenses;
