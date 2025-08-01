// import React, { useState, useEffect } from 'react';
// import './Ghibli.css';
// import G1 from '../../assets/G/G (11).jpg';
// import G2 from '../../assets/G/G (2).jpg';
// import G3 from '../../assets/G/G (3).jpg';
// import G4 from '../../assets/G/G (4).jpg';
// import G5 from '../../assets/G/G (5).jpg';
// import G6 from '../../assets/G/G (6).jpg';
// import G7 from '../../assets/G/G (7).jpg';
// import G8 from '../../assets/G/G (8).jpg';
// import G9 from '../../assets/G/G (9).jpg';
// import G10 from '../../assets/G/G (10).jpg';
// import G11 from '../../assets/G/G (1).jpg';
// import ghibliMusic from '../../assets/G/Gsong.mp3';

// const GhibliGallery = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = React.createRef();

//   const ghibliArt = [
//     { id: 1, imageUrl: G1 },
//     { id: 2, imageUrl: G2 },
//     { id: 3, imageUrl: G3 },
//     { id: 4, imageUrl: G4 },
//     { id: 5, imageUrl: G5 },
//     { id: 6, imageUrl: G6 },
//     { id: 7, imageUrl: G7 },
//     { id: 8, imageUrl: G8 },
//     { id: 9, imageUrl: G9 },
//     { id: 10, imageUrl: G10 },
//     { id: 11, imageUrl: G11 }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex(prev => (prev === ghibliArt.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [ghibliArt.length]);

//   const toggleMusic = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const nextSlide = () => {
//     setActiveIndex(prev => (prev === ghibliArt.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setActiveIndex(prev => (prev === 0 ? ghibliArt.length - 1 : prev - 1));
//   };

//   return (
//     <div className="ghibli-gallery-container">
//       <audio ref={audioRef} loop src={ghibliMusic} />

//       <div className="ghibli-gallery-header">
//         <h2 className="ghibli-gallery-title">Our Love in Ghibli Frames <span className="ghibli-sparkle">✨</span></h2>
//         <button
//           className={`ghibli-music-btn ${isPlaying ? 'playing' : ''}`}
//           onClick={toggleMusic}
//         >
//           {isPlaying ? '🔊 Music On' : '🔇 Music Off'}
//         </button>
//       </div>

//       <div className="ghibli-gallery-carousel">
//         <button className="ghibli-gallery-arrow left" onClick={prevSlide}>‹</button>

//         <div className="ghibli-gallery-slide-container">
//           {ghibliArt.map((art, index) => (
//             <div
//               key={art.id}
//               className={`ghibli-gallery-slide ${index === activeIndex ? 'active' : ''}`}
//             >
//               <div className="ghibli-image-wrapper">
//                 <img
//                   src={art.imageUrl}
//                   alt={`Ghibli Art ${art.id}`}
//                   className="ghibli-gallery-image"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="ghibli-gallery-arrow right" onClick={nextSlide}>›</button>
//       </div>

//       <div className="ghibli-gallery-dots">
//         {ghibliArt.map((_, index) => (
//           <button
//             key={index}
//             className={`ghibli-gallery-dot ${index === activeIndex ? 'active' : ''}`}
//             onClick={() => setActiveIndex(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       <div className="ghibli-gallery-footer">
//         <div className="ghibli-floating-leaves">
//           {[...Array(10)].map((_, i) => <div key={i} className="ghibli-leaf"></div>)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GhibliGallery;

import React, { useState, useEffect } from 'react';
import './Ghibli.css';
import G1 from '../../assets/G/G (11).jpg';
import G2 from '../../assets/G/G (2).jpg';
import G3 from '../../assets/G/G (3).jpg';
import G4 from '../../assets/G/G (4).jpg';
import G5 from '../../assets/G/G (5).jpg';
import G6 from '../../assets/G/G (6).jpg';
import G7 from '../../assets/G/G (7).jpg';
import G8 from '../../assets/G/G (8).jpg';
import G9 from '../../assets/G/G (9).jpg';
import G10 from '../../assets/G/G (10).jpg';
import G11 from '../../assets/G/G (1).jpg';
import G12 from '../../assets/G/G.png';
import G13 from '../../assets/G/G1.png';
import ghibliMusic from '../../assets/G/Gsong.mp3';

const GhibliGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Changed to true for default play
  const audioRef = React.createRef();

  const ghibliArt = [
    { id: 1, imageUrl: G1 },
    { id: 2, imageUrl: G2 },
    { id: 3, imageUrl: G3 },
    { id: 4, imageUrl: G4 },
    { id: 5, imageUrl: G5 },
    { id: 6, imageUrl: G6 },
    { id: 7, imageUrl: G7 },
    { id: 8, imageUrl: G8 },
    { id: 9, imageUrl: G9 },
    { id: 10, imageUrl: G10 },
    { id: 11, imageUrl: G11 },
    { id: 12, imageUrl: G12 },
    { id: 13, imageUrl: G13 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === ghibliArt.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [ghibliArt.length]);

  useEffect(() => {
    // Auto-play music when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Auto-play was prevented:', error);
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === ghibliArt.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? ghibliArt.length - 1 : prev - 1));
  };

  return (
    <div className="ghibli-gallery-container">
      <audio ref={audioRef} loop src={ghibliMusic} />

      <div className="ghibli-gallery-header">
        <h2 className="ghibli-gallery-title">
          Our Love in Ghibli Frames <span className="ghibli-sparkle">✨</span>
        </h2>
        <button
          className={`ghibli-music-btn ${isPlaying ? 'playing' : ''}`}
          onClick={toggleMusic}
        >
          {isPlaying ? '🔊 Music On' : '🔇 Music Off'}
        </button>
      </div>

      <div className="ghibli-gallery-carousel">
        <button className="ghibli-gallery-arrow left" onClick={prevSlide}>
          ‹
        </button>

        <div className="ghibli-gallery-slide-container">
          {ghibliArt.map((art, index) => (
            <div
              key={art.id}
              className={`ghibli-gallery-slide ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="ghibli-image-wrapper">
                <img
                  src={art.imageUrl}
                  alt={`Ghibli Art ${art.id}`}
                  className="ghibli-gallery-image"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <button className="ghibli-gallery-arrow right" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="ghibli-gallery-dots">
        {ghibliArt.map((_, index) => (
          <button
            key={index}
            className={`ghibli-gallery-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="ghibli-gallery-footer">
        <div className="ghibli-floating-leaves">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="ghibli-leaf"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GhibliGallery;
