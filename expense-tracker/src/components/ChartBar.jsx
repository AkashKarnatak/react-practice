import './ChartBar.css'

const ChartBar = (props) => {
  return (
    <div className='chart-bar-container'>
      <div className='chart-bar'>
        <div
          className='chart-bar-fill'
          style={{
            height: `${props.height}px`,
          }}
        ></div>
      </div>
      <label>{props.label}</label>
    </div>
  )
}

export default ChartBar
