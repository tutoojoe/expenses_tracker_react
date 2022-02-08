import {useState} from "react";

import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }



  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>    
      <li>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
          <ExpensesChart expenses ={filteredExpenses} />
          <ExpensesList items={filteredExpenses}/>
        </Card>
      </li>
    </div>
  );
}

export default Expenses;
