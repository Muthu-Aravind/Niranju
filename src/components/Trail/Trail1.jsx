import { useState, useEffect } from 'react';
import './Trail1.css';

const Homepag = () => {
  const [step, setStep] = useState(0);
  const [petals, setPetals] = useState([]);
  const [inkVisible, setInkVisible] = useState(false);
  const [sealBroken, setSealBroken] = useState(false);

  // Animated petal fall
  useEffect(() => {
    if (step >= 1) {
      const interval = setInterval(() => {
        setPetals((prev) => [
          ...prev.slice(-15), // Keep max 15 petals
          {
            id: Date.now(),
            x: Math.random() * 100,
            speed: Math.random() * 2 + 1,
            size: Math.random() * 15 + 10,
            rotate: Math.random() * 360,
          },
        ]);
      }, 300);

      return () => clearInterval(interval);
    }
  }, [step]);

  const handleUnfold = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
    if (step === 2) {
      setSealBroken(true);
    }
  };

  const handleInkAppear = () => {
    setInkVisible(true);
  };

  return (
    <div className={`love-letter ${step >= 1 ? 'step-' + step : ''}`}>
      {/* Falling petal elements */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.x}%`,
            animationDuration: `${petal.speed}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            transform: `rotate(${petal.rotate}deg)`,
            backgroundImage: `hsl(${Math.random() * 30 + 330}, 70%, 75%)`,
          }}
        />
      ))}

      {/* The letter structure */}
      <div className="letter-container" onClick={handleUnfold}>
        <div className="envelope-front">
          <div
            className="seal"
            onClick={(e) => {
              e.stopPropagation();
              handleUnfold();
            }}
          >
            {!sealBroken ? (
              <div className="wax-seal" onClick={handleUnfold}>
                <div className="monogram">Y+M</div>
              </div>
            ) : (
              <div className="broken-seal">
                <div className="wax-piece"></div>
                <div className="wax-piece"></div>
              </div>
            )}
          </div>
        </div>

        <div className="letter-content">
          <div className="paper">
            {inkVisible ? (
              <div className="handwriting">
                <p>My Dearest Love,</p>
                <p>From the moment our paths crossed,</p>
                <p>my world gained colors I never knew existed.</p>
                <p>Your laughter became my favorite melody,</p>
                <p>your smile my most treasured sight.</p>
                <p>Forever yours,</p>
                <p className="signature">[Your Name]</p>
              </div>
            ) : (
              <div
                className="ink-well"
                onClick={(e) => {
                  e.stopPropagation();
                  handleInkAppear();
                }}
              >
                <div className="ink-drop"></div>
                <div className="feather-pen"></div>
              </div>
            )}
          </div>
        </div>

        <div className="envelope-flap"></div>
        <div className="envelope-back"></div>
      </div>

      {step === 0 && (
        <div className="instruction-tap">
          <p>Tap the letter to begin</p>
          <div className="hand-icon">👆</div>
        </div>
      )}
    </div>
  );
};

export default Homepag;
