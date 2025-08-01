import React, { useState, useEffect, useRef } from 'react';
import './LoveSection.css';
import heartImg from '../../assets/heart.png';
import rosePetalImg from '../../assets/rose-petal.png';
import loveVideo from '../../assets/lsv.mp4';
import mobileLoveVideo from '../../assets/vlvs.mp4';
import backgroundImage from '../../assets/lbg3.jpg';

const RomanticExpression = () => {
  const [stage, setStage] = useState(0);
  const [hearts, setHearts] = useState([]);
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const bgAudioRef = useRef(null);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const stages = [
    {
      text: 'I Love You Da Chelllam',
      emoji: '💖',
      subtext: 'Forever and always...',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stage < stages.length - 1) {
        setStage(stage + 1);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    const heartInterval = setInterval(() => {
      setHearts((h) => [
        ...h.slice(-20),
        {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          size: Math.random() * 25 + 15,
          duration: Math.random() * 6 + 4,
          delay: Math.random() * 2,
        },
      ]);
    }, 300);

    if (bgAudioRef.current) {
      bgAudioRef.current.volume = 0.3;
      bgAudioRef.current.play().catch(() => {});
    }

    return () => {
      clearInterval(heartInterval);
      if (bgAudioRef.current) bgAudioRef.current.pause();
    };
  }, []);

  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setHearts((h) => [
      ...h,
      {
        id: Date.now(),
        x,
        y,
        size: 70,
        duration: 1.2,
        delay: 0,
        burst: true,
      },
    ]);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const rosePetals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="romantic-container">
      <div className="romantic-hero" ref={containerRef} onClick={handleClick}>
        <div className="hearts-background">
          {hearts.map((heart) => (
            <div
              key={heart.id}
              className={`floating-heart ${heart.burst ? 'romantic-heart-burst' : ''}`}
              style={{
                left: `${heart.x}%`,
                top: heart.y ? `${heart.y}%` : '100%',
                width: `${heart.size}px`,
                height: `${heart.size}px`,
                animationDuration: `${heart.duration}s`,
                animationDelay: `${heart.delay}s`,
              }}
            ></div>
          ))}
        </div>

        <audio
          ref={bgAudioRef}
          src="https://assets.mixkit.co/music/preview/mixkit-romantic-piano-227.mp3"
          preload="auto"
          loop
        />
        <audio
          ref={audioRef}
          src="https://assets.mixkit.co/sfx/preview/mixkit-magic-sparkle-902.mp3"
          preload="auto"
        />

        <div className="romantic-content">
          <div className="romantic-text-container">
            <h1 className="romantic-text">
              <span className="romantic-text-part">{stages[stage].text}</span>
              <span className="romantic-emoji">{stages[stage].emoji}</span>
            </h1>
            <p className="romantic-subtext">{stages[stage].subtext}</p>
          </div>

          <div className="romantic-heart-container">
            <img
              src={heartImg}
              alt="Beating Heart"
              className="romantic-heart"
            />
            <div className="romantic-heart-glow"></div>
          </div>
        </div>

        {rosePetals.map((petal) => (
          <img
            key={petal.id}
            src={rosePetalImg}
            alt="Rose Petal"
            className="romantic-petal"
            style={{
              width: `${petal.size}px`,
              left: `${petal.left}%`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              transform: `rotate(${petal.rotation}deg)`,
            }}
          />
        ))}

        <div className="romantic-overlay"></div>
      </div>

      <div className="video-section">
        <div className="video-container">
          <video
            ref={videoRef}
            className="love-video"
            src={isMobile ? mobileLoveVideo : loveVideo}
            controls
            playsInline
            poster="../../assets/video-poster.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default RomanticExpression;
