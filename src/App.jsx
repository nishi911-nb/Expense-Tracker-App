import { useState } from 'react'
import './App.css'
import ExpenseForm from './Component/ExpenseForm'
import ExpenseList from './Component/ExpenseList'
import ExpenseFilter from './Component/ExpenseFilter';

function App() {

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenseList, setExpenseList] = useState([
    {id: 1, item: 'Milk', amount: 5, category: 'Groceries'},
    {id: 2, item: 'Movies', amount: 15, category: 'Entertainment'},
    {id: 3, item: 'Electricity', amount: 50, category: 'Utility'}
  ]);

  const handleAddExpense = (data) => {
    let id = expenseList.length + 1;
    const newExpense = [...expenseList, {...data, id}];
    setExpenseList(newExpense);
  };

  const handleDelete = (id) => {
    const filterData = expenseList.filter(list => list.id !== id);
    setExpenseList(filterData);
  }

  const visibleExpenses = selectedCategory ? expenseList.filter(expense => expense.category === selectedCategory) : expenseList

  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card border-info mx-4">
            <div className="card-header">Add Expenses</div>
            <div className="card-body">
            <ExpenseForm handleAddExpense={handleAddExpense}/>
            </div>
          </div>
          </div>
          <div className="col">
            <div className='list mx-4'>
            <ExpenseFilter handleFilterExpenses={(category) => setSelectedCategory(category)}/>
            <ExpenseList expenseList={visibleExpenses} handleDelete={handleDelete}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
