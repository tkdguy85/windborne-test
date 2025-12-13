import { useEffect, useState } from 'react'
import '../css/Tracking.css'

function Tracking() {
  const [tracked, setTracked] = useState([])

  useEffect(() => {
    function load() {
      try {
        const items = JSON.parse(localStorage.getItem('trackedBalloons') || '[]')
        setTracked(items)
      } catch (e) {
        setTracked([e])
      }
    }

    load()
    // update if localStorage changes in other tabs
    window.addEventListener('storage', load)
    return () => window.removeEventListener('storage', load)
  }, [])

  function removeTrack(name) {
    const filtered = tracked.filter(balloon => balloon.name !== name)
    setTracked(filtered)
    localStorage.setItem('trackedBalloons', JSON.stringify(filtered))
  }

  if (!tracked || tracked.length === 0) {
    return (
      <div className="tracking-empty">
        <h2>No targets are currently being tracked</h2>
        <p>Tracked targets will be listed below</p>
      </div>
    )
  }

  return (
    <div className="tracking-list">
      <h2>Currently Tracked Targets</h2>
      <ul>
        {tracked.map((balloon) => (
          <li key={`${balloon.name}-${balloon.lat}-${balloon.long}`} className="tracked-item">
            <strong>{balloon.name}</strong>
            <div>Lat: {balloon.lat} • Long: {balloon.long} • Alt: {balloon.alt}</div>
            <button onClick={() => removeTrack(balloon.name)}>Stop Tracking</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tracking