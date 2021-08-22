import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ title, amount, date }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={title[0]}
          amount={amount[0]}
          date={date[0]}
        ></ExpenseItem>
        <ExpenseItem
          title={title[1]}
          amount={amount[1]}
          date={date[1]}
        ></ExpenseItem>
        <ExpenseItem
          title={title[2]}
          amount={amount[2]}
          date={date[2]}
        ></ExpenseItem>
        <ExpenseItem
          title={title[3]}
          amount={amount[3]}
          date={date[3]}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
