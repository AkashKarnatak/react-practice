import Card from './Card'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const data = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  }
  props.expenses.forEach((x) => {
    const month = x.date.toLocaleString('default', { month: 'short' })
    data[month] += x.amount
  })
  console.log(data)
  const maxAmt = Math.max(...Object.values(data)) + 1e-5 // prevent divsion by zero
  return (
    <Card className='chart'>
      {Object.entries(data).map(([month, amount]) => (
        <ChartBar key={month} label={month} height={amount * 200 / maxAmt} />
      ))}
    </Card>
  )
}

export default Chart
