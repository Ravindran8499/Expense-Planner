import React from "react";
import NewExpenseForm from "../ExpenseForm/NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveDataHandler = (savedData) => {
    const newSaveData = {
      ...savedData,
      id: Math.random(),
    };
    props.onAddExpense(newSaveData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
