import "./ExpenseDate.css";

const ExpenseDate = ({ date, title, amount }) => {
  const month = date.toLocaleString("en-EN", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__dayu">{day}</div>
    </div>
  );
};

export default ExpenseDate;
