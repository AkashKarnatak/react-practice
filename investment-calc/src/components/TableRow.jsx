const currencyFormat = (x) =>
  Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(x)

const TableRow = ({
  year,
  totalSavings,
  interest,
  totalInterest,
  investedCapital,
}) => {
  return (
    <tr className='text-[#c2e9e0] text-right'>
      <td className='px-3 py-2'>{year}</td>
      <td className='px-3 py-2'>${currencyFormat(totalSavings)}</td>
      <td className='px-3 py-2'>${currencyFormat(interest)}</td>
      <td className='px-3 py-2'>${currencyFormat(totalInterest)}</td>
      <td className='px-3 py-2'>${currencyFormat(investedCapital)}</td>
    </tr>
  )
}

export default TableRow
