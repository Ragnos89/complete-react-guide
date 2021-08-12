import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card.js";

const ExpenseItem = ({ title, amount, date }) => {
  const clickHandler = () => {
    console.log("Clicked!!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} title={title} amopunt={amount} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
