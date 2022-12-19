import React, { Component } from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const dropDownHandler = (e) => {
    //console.log(e.target.value);

    props.onChangeFilter(e.target.value);
    /* 
           Again handling state from other component i.e Expenses component.
           When one component state is handled by another component then it is called a controlled component.
           Here also we are lifting the state up from expenseFilter (child) component to Expenses Component(parent)
    */
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
