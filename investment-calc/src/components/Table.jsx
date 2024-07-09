import TableRow from "./TableRow"

const Table = (props) => {
  const classes = 'text-white text-xs ' + props.className

  // perform calcuations
  let currentSavings = +props.calculatorState.currentSavings
  const yearlySavings = +props.calculatorState.yearlySavings
  const expectedInterest = +props.calculatorState.expectedInterest / 100
  const investmentDuration = +props.calculatorState.investmentDuration

  const tableData = []
  let totalInterest = 0
  for (let year = 1; year <= investmentDuration; ++year) {
    const interest = currentSavings * expectedInterest
    totalInterest = totalInterest + interest
    const totalSavings = currentSavings + interest + yearlySavings
    const investedCapital = totalSavings - totalInterest
    tableData.push({
      year,
      totalSavings,
      interest,
      totalInterest,
      investedCapital,
    })
    currentSavings = totalSavings
  }

  return (
    <table className={classes}>
      <thead>
        <tr className='text-[#83e6c0]'>
          <th className='px-3 py-2'>Year</th>
          <th className='px-3 py-2'>Total Savings</th>
          <th className='px-3 py-2'>Interest (Year)</th>
          <th className='px-3 py-2'>Total Interest</th>
          <th className='px-3 py-2'>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <TableRow
            key={data.year}
            year={data.year}
            totalSavings={data.totalSavings}
            interest={data.interest}
            totalInterest={data.totalInterest}
            investedCapital={data.investedCapital}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table
