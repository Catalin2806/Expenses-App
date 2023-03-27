import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expenses(props){

  const[filterYear, setFilteredYear]=useState("2022")
const filterChangeHandler=(selectedYear)=>{
setFilteredYear(selectedYear);
}

const filterExpenses=props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filterYear;
});



    return <div>
    <Card className="expenses">
    <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
   <ExpensesChart expenses={filterExpenses}/>
   <ExpensesList items={filterExpenses}/>

      </Card>
      </div>
}

export default Expenses;