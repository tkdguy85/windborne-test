import { useState, useEffect } from 'react'
import '../css/BalloonCard.css'

function BalloonCard({balloon}) {
  const [tracking, setTracking] = useState(false)
  // initialize tracking state from localStorage
  useEffect(() => {
    try {
      const tracked = JSON.parse(localStorage.getItem('trackedBalloons') || '[]')
      const exists = tracked.some(b => b.name === balloon.name)
      setTracking(exists)
    } catch (e) {
      console.error('Error reading balloon tracking from localStorage', e)
      setTracking(false)
    }
  }, [balloon.name])

  function onTrackClick() {
    const newTracking = !tracking
    setTracking(newTracking)

    try {
      const key = 'trackedBalloons'
      const tracked = JSON.parse(localStorage.getItem(key) || '[]')
      if (newTracking) {
        // add if not already present
        if (!tracked.some(b => b.name === balloon.name)) {
          tracked.push({ name: balloon.name, lat: balloon.lat, long: balloon.long, alt: balloon.alt })
        }
        localStorage.setItem(key, JSON.stringify(tracked))
        alert(`Currently tracking: ${balloon.name}`)
      } else {
        const filtered = tracked.filter(b => b.name !== balloon.name)
        localStorage.setItem(key, JSON.stringify(filtered))
        alert(`Stopped tracking: ${balloon.name}`)
      }
    } catch (e) {
      console.error('Error updating trackedBalloons in localStorage', e)
    }
  }
  
  return (
    <div className="balloon-card">
      <div className="balloon-info">
        <h2 className="balloon-name">{balloon.name}</h2>
        <h3>Flight Data</h3>
        <p className="balloon-lat">Latitude: <span className="balloon-data">{balloon.lat}</span></p>
        <p className="balloon-long">Longitude: <span className="balloon-data">{balloon.long}</span></p>
        <p className="balloon-alt">Altitude: <span className="balloon-data">{balloon.alt != null ? Number(balloon.alt).toFixed(3) : ''} km</span></p>
        <a 
          href={`https://www.google.com/maps?q=${balloon.lat},${balloon.long}&z=2`}
          target='_blank'
          className="balloon-pin"
        >
          View Location Pin Area
        </a>
        <button className={`balloon-track ${tracking ? 'active' : ''}`} onClick={onTrackClick}>
          {tracking ? 'Tracking' : 'Track Balloon'}
        </button>
      </div>
    </div>
  )
}

export default BalloonCard