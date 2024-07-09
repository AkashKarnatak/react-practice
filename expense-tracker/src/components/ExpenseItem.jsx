import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <div className="expense-item-left">
        <ExpenseDate date={props.date}/>
        <div className="expense-item-name">{props.title}</div>
      </div>
      <Card className="expense-item-price">${props.amount}</Card>
    </Card>
  )
}

export default ExpenseItem
