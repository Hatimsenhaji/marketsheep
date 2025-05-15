import { Link } from "react-router-dom";
import "../stylePage/header.css"; // Tu peux mettre le CSS dedans

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-bottom py-3 fixed-top">
      <nav className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="fw-bold fs-4 text-success">Sheep Market</div>

        {/* Liens de navigation */}
        <div className="d-flex gap-4 align-items-center nav-links">
          <Link to="/" className="text-decoration-none text-dark fw-medium">Home</Link>
          <Link to="/sheep" className="text-decoration-none text-dark fw-medium">Our Sheep</Link>

          {/* About Us avec sous-menu */}
          <div className="dropdown">
            <span className="text-dark fw-medium">About Us ▾</span>
            <div className="dropdown-content">
              <Link to="/about">About Sheep Morocco</Link>
              <Link to="/board">Board Structure</Link>
              <Link to="/funding">Funding</Link>
              <Link to="/privacy">Legal And Privacy</Link>
              <Link to="/links">Useful Links</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/videos">Information Videos</Link>
            </div>
          </div>

          <Link to="/contact" className="text-decoration-none text-dark fw-medium">Contact</Link>
        </div>

        {/* Sign up */}
        <Link to="/register" className="btn btn-outline-success">Log In</Link>
      </nav>
    </header>
  );
}
