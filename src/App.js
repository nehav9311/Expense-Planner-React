import "./styles.css";
import ExpenseItem from "./Components/ExpenseItem";

export default function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 2000,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e2",
      title: "Health Insurance",
      amount: 6000,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e3",
      title: "Internet Bill",
      amount: 1500,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "Electricity Bill",
      amount: 2500,
      date: new Date(2021, 2, 28)
    }
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}
