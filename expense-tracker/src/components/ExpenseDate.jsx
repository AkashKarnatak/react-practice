import Card from './Card'
import './ExpenseDate.css'

const ExpenseDate = ({ date }) => {
  return <Card className='expense-date'>
    <div className='expense-date-top'>
      <p className="month">{date.toLocaleString('default', { month: 'long' })}</p>
      <p className="year">{date.getFullYear()}</p>
    </div>
    <p className="day">{date.toLocaleString('default', { day: 'numeric' })}</p>
  </Card>
}

export default ExpenseDate
