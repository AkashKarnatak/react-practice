import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
  return (
    <div className='expense-filter'>
      <div className='expense-filter-title'>Filter by year</div>
      <select
        id='years'
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value)
        }}
      >
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
        <option value='2024'>2024</option>
      </select>
    </div>
  )
}

export default ExpenseFilter
