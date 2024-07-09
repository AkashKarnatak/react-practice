import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ExpenseForm from './components/ExpenseForm'
import ExpenseItem from './components/ExpenseItem'
import ExpenseFilter from './components/ExpenseFilter'
import Chart from './components/Chart'

function App() {
  const [data, setData] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ])
  const [filterYear, setFilterYear] = useState('2024')

  const submitHandler = (expense) => {
    setData((prevData) => {
      return [expense, ...prevData]
    })
  }

  const filterChangeHandler = (year) => {
    setFilterYear(year)
  }

  const filteredExpenses = data.filter(
    (x) => x.date.getFullYear().toString() === filterYear,
  )

  return (
    <>
      <main>
        <Card className='expense-form-holder'>
          <ExpenseForm onSubmitted={submitHandler} />
        </Card>
        <Card className='expense-item-holder'>
          <ExpenseFilter value={filterYear} onChange={filterChangeHandler} />
          <Chart expenses={filteredExpenses} />
          {filteredExpenses.length === 0 ? (
            <p>No expenses found</p>
          ) : (
            filteredExpenses.map((x) => (
              <ExpenseItem
                key={x.id}
                title={x.title}
                amount={x.amount}
                date={x.date}
              />
            ))
          )}
        </Card>
      </main>
    </>
  )
}

export default App
