import React from 'react';
import './CubeComponent.css';

import r1 from '../../assets/Photo.jpg';
import r2 from '../../assets/Polo1.jpg';
import r3 from '../../assets/Polo2.jpg';
import background from '../../assets/background.jpg';

const CubeComponent = () => {
  const messages = [
    'Your smile brightens my day',
    'My heart belongs to you',
    'Forever and always',
    "You're my everything",
    'Perfect together',
    'Endless love',
  ];

  return (
    <div className="cube-container">
      <div className="cube-title">
        Our Love Story 💖
        <div className="cube-subtitle">Every side tells our story</div>
      </div>

      <div className="heart-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="heart-particle">
            💖
          </div>
        ))}
      </div>

      <div className="cube-animation">
        {/* Outer Cube */}
        <div className="cube-outer">
          {['top', 'bottom', 'front', 'back', 'left', 'right'].map(
            (face, index) => (
              <div
                key={`outer-${face}`}
                className={`cube-outer-face cube-outer-${face}`}
              >
                <img
                  src={[r1, r2, r3, r1, r2, r3][index]}
                  alt={`Our memory ${index + 1}`}
                />
                <div className="face-message">{messages[index]}</div>
              </div>
            )
          )}
        </div>

        {/* Inner Cube - smaller and centered */}
        <div className="cube-inner">
          {['top', 'bottom', 'front', 'back', 'left', 'right'].map(
            (face, index) => (
              <div
                key={`inner-${face}`}
                className={`cube-inner-face cube-inner-${face}`}
              >
                <img
                  src={[r1, r2, r3, r1, r2, r3][index]}
                  alt={`Our memory ${index + 1}`}
                />
                <div className="face-heart">💖</div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="cube-message">
        <div className="cube-tip">Hover to see our love from every angle</div>
      </div>

      <div className="floating-hearts">
        {[...Array(8)].map((_, i) => (
          <div key={`heart-${i}`} className="floating-heart">
            💖
          </div>
        ))}
      </div>
    </div>
  );
};

export default CubeComponent;
