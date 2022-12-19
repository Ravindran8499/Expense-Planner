import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const expenseTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(enteredTitle);
  };
  const expenseAmounthandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log(enteredAmount);
  };
  const expenseDateHandler = (e) => {
    setEnteredDate(e.target.value);
    console.log(enteredDate);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const allData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(allData);

    // This is called lifting th state up
    props.onSaveData(allData); //State is being lifted up here to the nearest parent component
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={expenseTitleHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              min="0.01"
              step="0.01"
              type="number"
              value={enteredAmount}
              onChange={expenseAmounthandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={expenseDateHandler}
            />
          </div>
          <div className="">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;
