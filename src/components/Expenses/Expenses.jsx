import React from "react";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

const Expenses = (props) => {
  const item = props.item;
  return (
    <Card className="expenses">
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
