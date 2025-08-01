import { useState, useEffect, useRef } from 'react';
import audio1 from '../../assets/ahp/1.mp3';
import audio2 from '../../assets/ahp/2.mp3';
import audio3 from '../../assets/ahp/3.mp3';
import audio4 from '../../assets/ahp/4.mp3';
import './tr.css';

const MemoryGarden = () => {
  const [bloomedFlowers, setBloomedFlowers] = useState([]);
  const [currentMemory, setCurrentMemory] = useState(null);
  const [season, setSeason] = useState('spring');
  const [isPlaying, setIsPlaying] = useState(null);
  const [hearts, setHearts] = useState([]);
  const [showCringeCard, setShowCringeCard] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const audioRefs = useRef({});

  const memories = [
    {
      id: 1,
      date: '❤️',
      note: 'Aug',
      color: '#ff6b8b',
      audio: audio2,
      emoji: '☕',
    },
    {
      id: 2,
      date: '❤️',
      note: '2nd',
      color: '#6b8bff',
      audio: audio1,
      emoji: '👗',
    },
    {
      id: 3,
      date: '❤️',
      note: '23 hrs',
      color: '#6bff8b',
      audio: audio4,
      emoji: '✈️',
    },
    {
      id: 4,
      date: '❤️',
      note: '40 mins',
      color: '#ffcc6b',
      audio: audio3,
      emoji: '🎂',
    },
  ];

  useEffect(() => {
    const seasonInterval = setInterval(() => {
      setSeason((prev) => {
        const seasons = ['spring', 'summer', 'autumn', 'winter'];
        const nextIndex = (seasons.indexOf(prev) + 1) % seasons.length;
        return seasons[nextIndex];
      });
    }, 30000);

    return () => clearInterval(seasonInterval);
  }, []);

  const createHearts = () => {
    const newHeart = {
      id: Date.now(),
      left: Math.random() * 100,
      animationDuration: `${Math.random() * 3 + 2}s`,
    };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 5000);
  };

  const toggleAudio = (memoryId) => {
    if (isPlaying === memoryId) {
      audioRefs.current[memoryId].pause();
      setIsPlaying(null);
    } else {
      if (isPlaying) audioRefs.current[isPlaying].pause();
      audioRefs.current[memoryId].currentTime = 0;
      audioRefs.current[memoryId].play();
      setIsPlaying(memoryId);
      createHearts();
    }
  };

  const plantFlower = (memory) => {
    if (!bloomedFlowers.includes(memory.id)) {
      setBloomedFlowers([...bloomedFlowers, memory.id]);
      setCurrentMemory(memory);
      createHearts();

      if (memory.cringe) {
        setShowCringeCard(true);
      }

      setTimeout(() => {
        setCurrentMemory(null);
        if (memory.cringe) {
          setTimeout(() => setShowCringeCard(false), 1000);
        }
      }, 5000);
    }
  };

  return (
    <div className={`memory-garden-container ${season}`}>
      {memories.map((memory) => (
        <audio
          key={memory.id}
          src={memory.audio}
          ref={(el) => (audioRefs.current[memory.id] = el)}
          onEnded={() => setIsPlaying(null)}
        />
      ))}

      <h1 className="memory-garden-title">You + Me = 🌸🌞🍂❄️❤️</h1>
      <p className="memory-garden-subtitle">
        Oru Oru flower a paarunga (order la paarunga)
      </p>

      <div className="memory-season-toggle-container">
        <button
          className="memory-season-toggle"
          onClick={() =>
            setSeason((prev) => {
              const seasons = ['spring', 'summer', 'autumn', 'winter'];
              const nextIndex = (seasons.indexOf(prev) + 1) % seasons.length;
              return seasons[nextIndex];
            })
          }
        >
          <span className="memory-season-icon">
            {season === 'spring' && '🌸'}
            {season === 'summer' && '🌞'}
            {season === 'autumn' && '🍂'}
            {season === 'winter' && '❄️'}
          </span>
          Change Season
        </button>
      </div>

      <div className="memory-garden-bed">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className={`memory-flower-pot ${bloomedFlowers.includes(memory.id) ? 'bloomed' : ''} ${memory.cringe ? 'cringe-pot' : ''}`}
            onClick={() => plantFlower(memory)}
            style={{ '--flower-color': memory.color }}
          >
            <div className="memory-pot"></div>
            <div className="memory-stem"></div>
            <div className="memory-flower">
              <div className="memory-heart-shape"></div>
              <div className="memory-emoji">{memory.emoji}</div>
            </div>
            <div className="memory-leaf l1"></div>
            <div className="memory-leaf l2"></div>
            {memory.cringe && <div className="memory-cringe-badge">😂</div>}
          </div>
        ))}
      </div>

      {currentMemory && (
        <div
          className={`memory-card ${currentMemory.cringe ? 'cringe-card' : ''}`}
          style={{ borderColor: currentMemory.color }}
        >
          <h3>{currentMemory.date}</h3>
          <p>{currentMemory.note}</p>
          <button
            className={`memory-audio-button ${isPlaying === currentMemory.id ? 'playing' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleAudio(currentMemory.id);
            }}
          >
            <span className="memory-audio-icon">
              {isPlaying === currentMemory.id ? '⏸' : '▶️'}
            </span>
            {isPlaying === currentMemory.id ? 'Pause Memory' : 'Play Memory'}
          </button>
          <div
            className="memory-card-arrow"
            style={{ borderTopColor: currentMemory.color }}
          ></div>
        </div>
      )}

      {showCringeCard && (
        <div className="memory-cringe-overlay">
          <div className="memory-cringe-card">
            <h3>To My Chellam ❤️</h3>
            <p>Seasons may change...</p>
            <p>But my love for you remains forever 🌸🌞🍂❄️</p>
            <div className="memory-cringe-hearts">
              {[...Array(10)].map((_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>
                  ❤️
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="memory-love-message-container">
        <button
          className="memory-love-button"
          onClick={() => setShowLoveMessage(true)}
        >
          Cringe Alert! 😂❤️
        </button>
      </div>

      {showLoveMessage && (
        <div
          className="memory-love-overlay"
          onClick={() => setShowLoveMessage(false)}
        >
          <div
            className="memory-love-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>
              Antha Season button ethuku theriyuma just to show that , seasons
              may change, but not the love and lust I have for u
            </h3>
            <div className="memory-love-hearts">
              <span>😂❤️</span>
            </div>
          </div>
        </div>
      )}

      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="memory-floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: heart.animationDuration,
            color: `hsl(${Math.random() * 60 + 330}, 100%, 70%)`,
          }}
        >
          ❤️
        </div>
      ))}

      {season === 'winter' && (
        <>
          {[...Array(20)].map((_, i) => (
            <div
              key={`snow-${i}`}
              className="memory-snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              ❄️
            </div>
          ))}
        </>
      )}

      {season === 'autumn' && (
        <>
          {[...Array(15)].map((_, i) => (
            <div
              key={`leaf-${i}`}
              className="memory-autumn-leaf"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                color: `hsl(${Math.random() * 30 + 20}, 70%, 50%)`,
              }}
            >
              🍁
            </div>
          ))}
        </>
      )}

      <div className="memory-sun"></div>
      <div className="memory-cloud c1"></div>
      <div className="memory-cloud c2"></div>
      <div className="memory-cloud c3"></div>

      {(season === 'winter' || season === 'autumn') && (
        <div className="memory-moon">🌙</div>
      )}
    </div>
  );
};

export default MemoryGarden;
