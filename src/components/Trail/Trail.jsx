import { useState, useEffect } from 'react';
import './Trail.css';

const Homepage = () => {
  const [constellation, setConstellation] = useState([]);
  const [typedText, setTypedText] = useState('');
  const messages = [
    'My universe makes sense with you in it',
    "You're my favorite star in this galaxy",
    'Our love is my favorite constellation',
    "Infinite space, but you're my only focus",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Create random stars
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
  }));

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= messages[currentMessageIndex].length) {
        setTypedText(messages[currentMessageIndex].substring(0, i));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [currentMessageIndex]);

  const handleStarClick = (star) => {
    if (constellation.length > 0) {
      const lastStar = constellation[constellation.length - 1];
      // Create line between last star and new star
      const line = {
        x1: lastStar.x,
        y1: lastStar.y,
        x2: star.x,
        y2: star.y,
      };
      setConstellation([...constellation, star, line]);
    } else {
      setConstellation([star]);
    }
  };

  return (
    <div className="galaxy-container">
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            onClick={() => handleStarClick(star)}
          />
        ))}

        {constellation.map((item, index) =>
          item.x1 ? (
            <div
              key={`line-${index}`}
              className="constellation-line"
              style={{
                left: `${Math.min(item.x1, item.x2)}%`,
                top: `${Math.min(item.y1, item.y2)}%`,
                width: `${Math.abs(item.x1 - item.x2)}%`,
                height: `${Math.abs(item.y1 - item.y2)}%`,
                transformOrigin: '0 0',
                transform: `rotate(${Math.atan2(
                  item.y2 - item.y1,
                  item.x2 - item.x1
                )}rad)`,
              }}
            />
          ) : (
            <div
              key={`star-${index}`}
              className="constellation-star"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
            />
          )
        )}
      </div>

      <div className="message-box">
        <h1 className="galaxy-title">My Cosmic Love</h1>
        <div className="typewriter">{typedText}</div>
        <p className="hint">Click stars to create our constellation</p>
      </div>

      <div className="shooting-stars">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 30}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
