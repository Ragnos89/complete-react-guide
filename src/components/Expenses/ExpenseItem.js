import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card.js";

const ExpenseItem = ({ title, amount, date }) => {
  const [title_2, setTitle_2] = useState(title);
  console.log("Expense item evaluated!");

  const clickHandler = () => {
    setTitle_2("Updated!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} title={title} amopunt={amount} />
      <div className="expense-item__description">
        <h2>{title_2}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
