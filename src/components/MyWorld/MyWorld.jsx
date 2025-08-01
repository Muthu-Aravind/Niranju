// import React, { useState, useRef, useEffect } from 'react';
// import './MyWorld.css';

// const AnniversaryGallery = () => {
//   const [fullscreenMedia, setFullscreenMedia] = useState(null);
//   const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
//   const [viewMode, setViewMode] = useState('cards');
//   const [activeCard, setActiveCard] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const videoRefs = useRef([]);
//   const gridVideoRefs = useRef([]);

//   const memories = [
//     {
//       id: 1,
//       title: 'Healing',
//       description: 'Precious things in my life',
//       icon: '❤️',
//       color: '#FF6B6B',
//       accentColor: '#FF3D3D',
//       gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
//       thumbnail: '/src/assets/thumb1.jpg',
//       media: Array.from({ length: 31 }, (_, i) => ({
//         type: 'video',
//         src: `/src/assets/VN/V${i + 1}.mp4`,
//         thumbnail: `/src/assets/thumbnails/thumb${i + 1}.jpg`,
//       })),
//     },
//     {
//       id: 2,
//       title: 'Kutty laddu',
//       description: 'Mini niranju 😂',
//       icon: '🍬',
//       color: '#4ECDC4',
//       accentColor: '#2EB8B0',
//       gradient: 'linear-gradient(135deg, #4ECDC4 0%, #2EB8B0 100%)',
//       thumbnail: '/src/assets/myworld/mw (3).jpg',
//       media: [
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (1).jpg',
//           thumbnail: '/src/assets/myworld/mw (1).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (2).jpg',
//           thumbnail: '/src/assets/myworld/mw (2).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (3).jpg',
//           thumbnail: '/src/assets/myworld/mw (3).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (4).jpg',
//           thumbnail: '/src/assets/myworld/mw (4).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (5).jpg',
//           thumbnail: '/src/assets/myworld/mw (5).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (18).jpg',
//           thumbnail: '/src/assets/myworld/mw (18).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (19).jpg',
//           thumbnail: '/src/assets/myworld/mw (19).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (20).jpg',
//           thumbnail: '/src/assets/myworld/mw (20).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (21).jpg',
//           thumbnail: '/src/assets/myworld/mw (21).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (22).jpg',
//           thumbnail: '/src/assets/myworld/mw (22).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (23).jpg',
//           thumbnail: '/src/assets/myworld/mw (23).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (24).jpg',
//           thumbnail: '/src/assets/myworld/mw (24).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (25).jpg',
//           thumbnail: '/src/assets/myworld/mw (25).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (26).jpg',
//           thumbnail: '/src/assets/myworld/mw (26).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (27).jpg',
//           thumbnail: '/src/assets/myworld/mw (27).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (28).jpg',
//           thumbnail: '/src/assets/myworld/mw (28).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (29).jpg',
//           thumbnail: '/src/assets/myworld/mw (29).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (30).jpg',
//           thumbnail: '/src/assets/myworld/mw (30).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (31).jpg',
//           thumbnail: '/src/assets/myworld/mw (31).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (32).jpg',
//           thumbnail: '/src/assets/myworld/mw (32).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (33).jpg',
//           thumbnail: '/src/assets/myworld/mw (33).jpg',
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: 'Gmeet parithabangal',
//       description: 'Saviour in our long distance relationship',
//       icon: '💻',
//       color: '#FFA07A',
//       accentColor: '#FF8C5A',
//       gradient: 'linear-gradient(135deg, #FFA07A 0%, #FF8C5A 100%)',
//       thumbnail: '/src/assets/myworld/mw (8).jpg',
//       media: [
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (6).jpg',
//           thumbnail: '/src/assets/myworld/mw (6).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (7).jpg',
//           thumbnail: '/src/assets/myworld/mw (7).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (8).jpg',
//           thumbnail: '/src/assets/myworld/mw (8).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (9).jpg',
//           thumbnail: '/src/assets/myworld/mw (9).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (10).jpg',
//           thumbnail: '/src/assets/myworld/mw (10).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (11).jpg',
//           thumbnail: '/src/assets/myworld/mw (11).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (12).jpg',
//           thumbnail: '/src/assets/myworld/mw (12).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (13).jpg',
//           thumbnail: '/src/assets/myworld/mw (13).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (14).jpg',
//           thumbnail: '/src/assets/myworld/mw (14).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (15).jpg',
//           thumbnail: '/src/assets/myworld/mw (15).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (16).jpg',
//           thumbnail: '/src/assets/myworld/mw (16).jpg',
//         },
//         {
//           type: 'image',
//           src: '/src/assets/myworld/mw (17).jpg',
//           thumbnail: '/src/assets/myworld/mw (17).jpg',
//         },
//         {
//           type: 'video',
//           src: '/src/assets/myworld/mw (1).mp4',
//           thumbnail: '/src/assets/myworld/mw (6).jpg',
//         },
//       ],
//     },
//   ];

//   const openFullscreen = (media, index) => {
//     setFullscreenMedia(media);
//     setCurrentMediaIndex(index);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeFullscreen = () => {
//     setFullscreenMedia(null);
//     document.body.style.overflow = 'auto';
//   };

//   const navigateMedia = (direction) => {
//     setCurrentMediaIndex((prev) => {
//       const newIndex =
//         direction === 'prev'
//           ? prev === 0
//             ? fullscreenMedia.length - 1
//             : prev - 1
//           : prev === fullscreenMedia.length - 1
//             ? 0
//             : prev + 1;

//       setTimeout(() => {
//         if (
//           fullscreenMedia[newIndex].type === 'video' &&
//           videoRefs.current[newIndex]
//         ) {
//           videoRefs.current[newIndex]
//             .play()
//             .catch((e) => console.log('Autoplay prevented:', e));
//         }
//       }, 100);

//       return newIndex;
//     });
//   };

//   const toggleViewMode = (cardId = null) => {
//     if (viewMode === 'cards' && cardId) {
//       setActiveCard(cardId);
//     }
//     setViewMode((prev) => (prev === 'cards' ? 'grid' : 'cards'));
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!fullscreenMedia) return;

//       if (e.key === 'Escape') {
//         closeFullscreen();
//       } else if (e.key === 'ArrowLeft') {
//         navigateMedia('prev');
//       } else if (e.key === 'ArrowRight') {
//         navigateMedia('next');
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [fullscreenMedia, currentMediaIndex]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && entry.target.tagName === 'VIDEO') {
//             entry.target
//               .play()
//               .catch((e) => console.log('Autoplay prevented:', e));
//           } else if (entry.target.tagName === 'VIDEO') {
//             entry.target.pause();
//           }
//         });
//       },
//       { threshold: 0.7 }
//     );

//     gridVideoRefs.current.forEach((video) => {
//       if (video) observer.observe(video);
//     });

//     return () => {
//       gridVideoRefs.current.forEach((video) => {
//         if (video) observer.unobserve(video);
//       });
//     };
//   }, [viewMode]);


import React, { useState, useRef, useEffect } from 'react';
import './MyWorld.css';

const AnniversaryGallery = () => {
  const [fullscreenMedia, setFullscreenMedia] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [viewMode, setViewMode] = useState('cards');
  const [activeCard, setActiveCard] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const videoRefs = useRef([]);
  const gridVideoRefs = useRef([]);

  // ✅ Fix for GitHub Pages asset loading
  const asset = (path) => new URL(`./assets/${path}`, import.meta.url).href;

  const memories = [
    {
      id: 1,
      title: 'Healing',
      description: 'Precious things in my life',
      icon: '❤️',
      color: '#FF6B6B',
      accentColor: '#FF3D3D',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
      thumbnail: asset('thumb1.jpg'),
      media: Array.from({ length: 31 }, (_, i) => ({
        type: 'video',
        src: asset(`VN/V${i + 1}.mp4`),
        thumbnail: asset(`thumbnails/thumb${i + 1}.jpg`),
      })),
    },
    {
      id: 2,
      title: 'Kutty laddu',
      description: 'Mini niranju 😂',
      icon: '🍬',
      color: '#4ECDC4',
      accentColor: '#2EB8B0',
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #2EB8B0 100%)',
      thumbnail: asset('myworld/mw (3).jpg'),
      media: [
        { type: 'image', src: asset('myworld/mw (1).jpg'), thumbnail: asset('myworld/mw (1).jpg') },
        { type: 'image', src: asset('myworld/mw (2).jpg'), thumbnail: asset('myworld/mw (2).jpg') },
        { type: 'image', src: asset('myworld/mw (3).jpg'), thumbnail: asset('myworld/mw (3).jpg') },
        { type: 'image', src: asset('myworld/mw (4).jpg'), thumbnail: asset('myworld/mw (4).jpg') },
        { type: 'image', src: asset('myworld/mw (5).jpg'), thumbnail: asset('myworld/mw (5).jpg') },
        { type: 'image', src: asset('myworld/mw (18).jpg'), thumbnail: asset('myworld/mw (18).jpg') },
        { type: 'image', src: asset('myworld/mw (19).jpg'), thumbnail: asset('myworld/mw (19).jpg') },
        { type: 'image', src: asset('myworld/mw (20).jpg'), thumbnail: asset('myworld/mw (20).jpg') },
        { type: 'image', src: asset('myworld/mw (21).jpg'), thumbnail: asset('myworld/mw (21).jpg') },
        { type: 'image', src: asset('myworld/mw (22).jpg'), thumbnail: asset('myworld/mw (22).jpg') },
        { type: 'image', src: asset('myworld/mw (23).jpg'), thumbnail: asset('myworld/mw (23).jpg') },
        { type: 'image', src: asset('myworld/mw (24).jpg'), thumbnail: asset('myworld/mw (24).jpg') },
        { type: 'image', src: asset('myworld/mw (25).jpg'), thumbnail: asset('myworld/mw (25).jpg') },
        { type: 'image', src: asset('myworld/mw (26).jpg'), thumbnail: asset('myworld/mw (26).jpg') },
        { type: 'image', src: asset('myworld/mw (27).jpg'), thumbnail: asset('myworld/mw (27).jpg') },
        { type: 'image', src: asset('myworld/mw (28).jpg'), thumbnail: asset('myworld/mw (28).jpg') },
        { type: 'image', src: asset('myworld/mw (29).jpg'), thumbnail: asset('myworld/mw (29).jpg') },
        { type: 'image', src: asset('myworld/mw (30).jpg'), thumbnail: asset('myworld/mw (30).jpg') },
        { type: 'image', src: asset('myworld/mw (31).jpg'), thumbnail: asset('myworld/mw (31).jpg') },
        { type: 'image', src: asset('myworld/mw (32).jpg'), thumbnail: asset('myworld/mw (32).jpg') },
        { type: 'image', src: asset('myworld/mw (33).jpg'), thumbnail: asset('myworld/mw (33).jpg') },
      ],
    },
    {
      id: 3,
      title: 'Gmeet parithabangal',
      description: 'Saviour in our long distance relationship',
      icon: '💻',
      color: '#FFA07A',
      accentColor: '#FF8C5A',
      gradient: 'linear-gradient(135deg, #FFA07A 0%, #FF8C5A 100%)',
      thumbnail: asset('myworld/mw (8).jpg'),
      media: [
        { type: 'image', src: asset('myworld/mw (6).jpg'), thumbnail: asset('myworld/mw (6).jpg') },
        { type: 'image', src: asset('myworld/mw (7).jpg'), thumbnail: asset('myworld/mw (7).jpg') },
        { type: 'image', src: asset('myworld/mw (8).jpg'), thumbnail: asset('myworld/mw (8).jpg') },
        { type: 'image', src: asset('myworld/mw (9).jpg'), thumbnail: asset('myworld/mw (9).jpg') },
        { type: 'image', src: asset('myworld/mw (10).jpg'), thumbnail: asset('myworld/mw (10).jpg') },
        { type: 'image', src: asset('myworld/mw (11).jpg'), thumbnail: asset('myworld/mw (11).jpg') },
        { type: 'image', src: asset('myworld/mw (12).jpg'), thumbnail: asset('myworld/mw (12).jpg') },
        { type: 'image', src: asset('myworld/mw (13).jpg'), thumbnail: asset('myworld/mw (13).jpg') },
        { type: 'image', src: asset('myworld/mw (14).jpg'), thumbnail: asset('myworld/mw (14).jpg') },
        { type: 'image', src: asset('myworld/mw (15).jpg'), thumbnail: asset('myworld/mw (15).jpg') },
        { type: 'image', src: asset('myworld/mw (16).jpg'), thumbnail: asset('myworld/mw (16).jpg') },
        { type: 'image', src: asset('myworld/mw (17).jpg'), thumbnail: asset('myworld/mw (17).jpg') },
        { type: 'video', src: asset('myworld/mw (1).mp4'), thumbnail: asset('myworld/mw (6).jpg') },
      ],
    },
  ];

  const openFullscreen = (media, index) => {
    setFullscreenMedia(media);
    setCurrentMediaIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenMedia(null);
    document.body.style.overflow = 'auto';
  };

  const navigateMedia = (direction) => {
    setCurrentMediaIndex((prev) => {
      const newIndex =
        direction === 'prev'
          ? prev === 0
            ? fullscreenMedia.length - 1
            : prev - 1
          : prev === fullscreenMedia.length - 1
          ? 0
          : prev + 1;

      setTimeout(() => {
        if (
          fullscreenMedia[newIndex].type === 'video' &&
          videoRefs.current[newIndex]
        ) {
          videoRefs.current[newIndex]
            .play()
            .catch((e) => console.log('Autoplay prevented:', e));
        }
      }, 100);

      return newIndex;
    });
  };

  const toggleViewMode = (cardId = null) => {
    if (viewMode === 'cards' && cardId) {
      setActiveCard(cardId);
    }
    setViewMode((prev) => (prev === 'cards' ? 'grid' : 'cards'));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!fullscreenMedia) return;

      if (e.key === 'Escape') {
        closeFullscreen();
      } else if (e.key === 'ArrowLeft') {
        navigateMedia('prev');
      } else if (e.key === 'ArrowRight') {
        navigateMedia('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenMedia, currentMediaIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.tagName === 'VIDEO') {
            entry.target
              .play()
              .catch((e) => console.log('Autoplay prevented:', e));
          } else if (entry.target.tagName === 'VIDEO') {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.7 }
    );

    gridVideoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      gridVideoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [viewMode]);
  return (
    <section className="ag-section">
      <div className="ag-container">
        <div className="ag-header">
          <h2 className="ag-title">Our First Anniversary</h2>
          <p className="ag-subtitle">
            365 days of love, laughter and beautiful memories
          </p>
          <div className="ag-heart-divider">
            <div className="ag-heart"></div>
          </div>
        </div>

        {viewMode === 'cards' ? (
          <div className="ag-cards-container">
            <div className="ag-cards">
              {memories.map((card) => (
                <div
                  key={card.id}
                  className="ag-card"
                  style={{
                    '--ag-card-color': card.color,
                    '--ag-card-accent': card.accentColor,
                    '--ag-card-gradient': card.gradient,
                  }}
                  onClick={() => toggleViewMode(card.id)}
                  onMouseEnter={() => setIsHovering(card.id)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div className="ag-card-heart">
                    <div className="ag-heart-shape"></div>
                    <div className="ag-heart-shape-inner"></div>
                    <div className="ag-card-thumbnail">
                      <img
                        src={card.thumbnail}
                        alt={card.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="ag-card-icon">{card.icon}</div>
                  </div>
                  <div className="ag-card-content">
                    <h3 className="ag-card-title">{card.title}</h3>
                    <p className="ag-card-description">{card.description}</p>
                    <div className="ag-media-count">
                      {card.media.length}{' '}
                      {card.media.length === 1 ? 'memory' : 'memories'}
                    </div>
                  </div>
                  <div className="ag-heart-pulse"></div>
                  <div className="ag-card-sparkles">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="ag-sparkle"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          opacity: isHovering === card.id ? 1 : 0,
                        }}
                      />
                    ))}
                  </div>
                  <div className="ag-card-floating-hearts">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="ag-floating-heart"
                        style={{
                          animationDelay: `${i * 0.3}s`,
                          left: `${10 + i * 15}%`,
                          opacity: isHovering === card.id ? 1 : 0,
                        }}
                      >
                        ❤️
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="ag-grid-view">
            <button
              className="ag-back-btn"
              onClick={() => toggleViewMode()}
              onMouseEnter={() => setIsHovering('back')}
              onMouseLeave={() => setIsHovering(null)}
            >
              <span
                className={`ag-back-arrow ${isHovering === 'back' ? 'ag-bounce' : ''}`}
              >
                ←
              </span>
              Back to Memories
            </button>

            {memories
              .filter((card) => !activeCard || card.id === activeCard)
              .map((card) => (
                <div key={card.id} className="ag-grid-section">
                  <div className="ag-grid-header">
                    <h3 className="ag-grid-title" style={{ color: card.color }}>
                      {card.title}
                    </h3>
                    <p className="ag-grid-description">{card.description}</p>
                  </div>
                  <div className="ag-grid">
                    {card.media.map((item, index) => (
                      <div
                        key={index}
                        className="ag-grid-item"
                        onClick={() => openFullscreen(card.media, index)}
                        onMouseEnter={() =>
                          setIsHovering(`item-${card.id}-${index}`)
                        }
                        onMouseLeave={() => setIsHovering(null)}
                      >
                        {item.type === 'video' ? (
                          <>
                            <video
                              ref={(el) => (gridVideoRefs.current[index] = el)}
                              muted
                              playsInline
                              loop
                              preload="auto"
                              poster={item.thumbnail}
                              loading="lazy"
                            >
                              <source src={item.src} type="video/mp4" />
                            </video>
                          </>
                        ) : (
                          <img
                            src={item.thumbnail}
                            alt={`Memory ${index + 1}`}
                            loading="lazy"
                          />
                        )}
                        <div className="ag-grid-item-overlay">
                          <span>
                            {card.title} #{index + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {fullscreenMedia && (
        <div className="ag-fullscreen" onClick={closeFullscreen}>
          <div className="ag-media-viewer">
            <button
              className="ag-nav-btn ag-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('prev');
              }}
            >
              ❮
            </button>

            <div className="ag-current-media">
              {fullscreenMedia[currentMediaIndex].type === 'video' ? (
                <video
                  key={currentMediaIndex}
                  ref={(el) => (videoRefs.current[currentMediaIndex] = el)}
                  controls
                  autoPlay
                  playsInline
                  onClick={(e) => e.stopPropagation()}
                >
                  <source
                    src={fullscreenMedia[currentMediaIndex].src}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={fullscreenMedia[currentMediaIndex].src}
                  alt={`Memory ${currentMediaIndex + 1}`}
                  onClick={(e) => e.stopPropagation()}
                  loading="eager"
                />
              )}
              <div className="ag-media-counter">
                {currentMediaIndex + 1} / {fullscreenMedia.length}
              </div>
            </div>

            <button
              className="ag-nav-btn ag-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('next');
              }}
            >
              ❯
            </button>
          </div>

          <div className="ag-media-thumbnails">
            {fullscreenMedia.map((item, index) => (
              <div
                key={index}
                className={`ag-media-thumb ${index === currentMediaIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentMediaIndex(index);
                }}
              >
                {item.type === 'video' ? (
                  <>
                    <video
                      muted
                      playsInline
                      preload="metadata"
                      poster={item.thumbnail}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <div className="ag-play-icon-small">▶</div>
                  </>
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    loading="lazy"
                  />
                )}
                <div className="ag-media-number">{index + 1}</div>
              </div>
            ))}
          </div>

          <button className="ag-close-btn" onClick={closeFullscreen}>
            ×
          </button>
          <div className="ag-fullscreen-bg"></div>
          <div className="ag-anniversary-text">Happy 1st Anniversary</div>
        </div>
      )}
    </section>
  );
};

export default AnniversaryGallery;
