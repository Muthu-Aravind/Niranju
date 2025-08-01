import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="love-special-navbar">
      <div className="love-special-container">
        <Link to="/" className="love-special-logo">
          The Beginning of Forever{' '}
          <span className="love-special-heart">💖</span>
        </Link>
        <ul className={`love-special-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="love-special-item">
            <Link
              to="/"
              className="love-special-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="full-text">Home</span>
              <span className="short-text">Home</span>
            </Link>
          </li>
          <li className="love-special-item">
            <Link
              to="/anniversary"
              className="love-special-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="full-text">Love Story</span>
              <span className="short-text">Love</span>
            </Link>
          </li>
          <li className="love-special-item">
            <Link
              to="/ghibli"
              className="love-special-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="full-text">Ghibli Magic</span>
              <span className="short-text">Ghibli</span>
            </Link>
          </li>
          <li className="love-special-item">
            <Link
              to="/gallery"
              className="love-special-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="full-text">Our Gallery</span>
              <span className="short-text">Gallery</span>
            </Link>
          </li>
          <li className="love-special-item">
            <Link
              to="/myworld"
              className="love-special-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="full-text">My World</span>
              <span className="short-text">World</span>
            </Link>
          </li>
        </ul>
        <div
          className={`love-special-hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="love-special-line"></span>
          <span className="love-special-line"></span>
          <span className="love-special-line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
