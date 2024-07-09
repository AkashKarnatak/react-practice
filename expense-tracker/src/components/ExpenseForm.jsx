import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')

  const inputHandler = (id) => {
    let setter
    if (id === 'title') {
      setter = setTitle
    } else if (id === 'date') {
      setter = setDate
    } else {
      setter = setAmount
    }
    return (e) => {
      setter(e.target.value)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    props.onSubmitted({
      id: Math.random().toString(),
      title: title,
      amount: +amount,
      date: new Date(date),
    })
    setTitle('')
    setDate('')
    setAmount('')
  }

  return (
    <form className='expense-form' onSubmit={submitHandler}>
      <div className='expense-form-left'>
        <div className='expense-form-title'>
          <label htmlFor='title'>Title</label>
          <br />
          <input
            type='text'
            value={title}
            id='title'
            onChange={inputHandler('title')}
          />
        </div>
        <div className='expense-form-title'>
          <label htmlFor='date'>Date</label>
          <br />
          <input
            type='date'
            value={date}
            id='date'
            onChange={inputHandler('date')}
          />
        </div>
      </div>
      <div className='expense-form-right'>
        <div className='expense-form-amount'>
          <label htmlFor='amount'>Amount</label>
          <br />
          <input
            type='text'
            value={amount}
            id='amount'
            onChange={inputHandler('amount')}
          />
        </div>
        <input type='submit' id='submit' value='Submit' />
      </div>
    </form>
  )
}

export default ExpenseForm
