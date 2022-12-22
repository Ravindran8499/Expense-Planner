import React, { useState } from "react";
import NewExpenseForm from "../ExpenseForm/NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);

  const saveDataHandler = (savedData) => {
    const newSaveData = {
      ...savedData,
      id: Math.random(),
    };
    props.onAddExpense(newSaveData);
  };

  const startIsEditing = () => {
    setisEditing(true);
  };
  const stopIsEditing = () => {
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {isEditing === false && (
        <button type="button" onClick={startIsEditing}>
          Add New Expense
        </button>
      )}
      {isEditing === true && (
        <NewExpenseForm onCancel={stopIsEditing} onSaveData={saveDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
