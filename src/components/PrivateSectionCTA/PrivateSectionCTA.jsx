import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PrivateSectionCTA.css';

const PrivateSectionCTA = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="pscta-container">
      <div
        className={`pscta-mystery-box ${hovered ? 'pscta-hover' : ''} ${clicked ? 'pscta-clicked' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setClicked(true)}
      >
        <div className="pscta-lock-icon">🔒</div>
        <div className="pscta-content">
          <h3 className="pscta-title">For Your Eyes Only</h3>
          <p className="pscta-message">
            {clicked
              ? "Are you ready to see what's hidden?"
              : 'Something special awaits you...'}
          </p>
          {clicked && (
            <Link to="/private" className="pscta-button">
              Enter Secret Area
            </Link>
          )}
        </div>
        <div className="pscta-sparkles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="pscta-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: clicked ? 1 : hovered ? 0.6 : 0,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="pscta-hint">
        {!clicked && 'Pssst... click the box to discover a surprise!'}
      </div>
    </div>
  );
};

export default PrivateSectionCTA;
