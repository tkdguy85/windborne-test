import { Link } from "react-router-dom"
import "../css/Nav.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/history">Project Info</Link>
        <Link className="nav-link" to="/tracked">Tracking</Link>
      </div>
    </nav>
  )
}

export default NavBar