import '../css/History.css'

function History() {
  return (
    <div>
      <h1 className='history-header'>Project History</h1>
      <h3 className='history-body'>Starting off as a proof of concept, this project's purpose is to demonstrate both weather balloon tracking as well as combined data usage across a variety of different edge cases.</h3>
      <ul>
        <li>Tracking forest fire movement</li>
        <li>Local Weather live-casting</li>
        <li>Air streams data for commercial aircraft</li>
        <li>Atmospheric monitoring for solar phenomenon</li>
        <li>Military signal amplification</li>
      </ul>

      <h3 className='history-body'>Future styling plans include:</h3>
      <ul>
        <li>Dark/light mode toggles</li>
        <li>Multi hour data views toggle</li>
        <li>Cleaner mobile experience</li>
        <li>Additional balloon data points, trends, mapping</li>
        <li>Faster pin rendering (currently handling very clunky)</li>
      </ul>
    </div>
  )
}

export default History