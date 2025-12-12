import { Link } from "react-router-dom"
import "../css/Nav.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/tracked">Tracking</Link>
      </div>
    </nav>
  )
}

export default NavBar