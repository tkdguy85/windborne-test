function BalloonCard({balloon}) {
  
  function onTrackClick() {
    alert(`tracking: ${balloon.name}`)
  }
  
  return (
    <div className="balloon-card">
      <div className="balloon-info">
        <h2 className="balloon-name">{balloon.name}</h2>
        <p className="balloon-lat">{balloon.lat}</p>
        <p className="balloon-long">{balloon.long}</p>
        <p className="balloon-alt">{balloon.alt}</p>
        <button className="balloon-track" onClick={onTrackClick}>
          Track Balloon
        </button>
      </div>
    </div>
  )
}

export default BalloonCard