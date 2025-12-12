import '../css/BalloonCard.css'

function BalloonCard({balloon}) {
  
  function onTrackClick() {
    alert(`tracking: ${balloon.name}`)
  }
  
  return (
    <div className="balloon-card">
      <div className="balloon-info">
        <h2 className="balloon-name">{balloon.name}</h2>
        <p className="balloon-lat">Latitude: <span className="balloon-data">{balloon.lat}</span></p>
        <p className="balloon-long">Longitude: <span className="balloon-data">{balloon.long}</span></p>
        <p className="balloon-alt">Altitude (meters): <span className="balloon-data">{balloon.alt}</span></p>
        <button className="balloon-track" onClick={onTrackClick}>
          Track Balloon
        </button>
      </div>
    </div>
  )
}

export default BalloonCard