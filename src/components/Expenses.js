import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (date, title, amount) => {
  return (
    <div className="expenses">
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
    </div>
  );
};

export default Expenses;
