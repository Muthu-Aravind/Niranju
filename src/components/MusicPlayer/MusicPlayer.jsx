import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

// Import your audio files
import S1 from '../../assets/songs/S7.mp3';
import S2 from '../../assets/songs/S10.mp3';
import S3 from '../../assets/songs/S3.mp3';
import S4 from '../../assets/songs/S2.mp3';
import S5 from '../../assets/songs/S5.mp3';
import S6 from '../../assets/songs/S6.mp3';
import S7 from '../../assets/songs/S1.mp3';
import S8 from '../../assets/songs/S8.mp3';
import S9 from '../../assets/songs/S9.mp3';
import S10 from '../../assets/songs/S4.mp3';

import T1 from '../../assets/niranju/lsp (1).jpg';
import T4 from '../../assets/niranju/lsp (4).jpg';
import T5 from '../../assets/niranju/lsp (5).jpg';
import T6 from '../../assets/niranju/lsp (6).jpg';
import T7 from '../../assets/niranju/lsp (7).jpg';
import T8 from '../../assets/niranju/lsp (8).jpg';
import T9 from '../../assets/niranju/lsp (9).jpg';
import T10 from '../../assets/niranju/lsp (10).jpg';
import T11 from '../../assets/niranju/lsp (11).jpg';
import T12 from '../../assets/niranju/lsp (12).jpg';
import T13 from '../../assets/niranju/lsp (13).jpg';
import T14 from '../../assets/niranju/lsp (14).jpg';
import T15 from '../../assets/niranju/lsp (15).jpg';
import T16 from '../../assets/niranju/lsp (16).jpg';
import T17 from '../../assets/niranju/lsp (17).jpg';
import T18 from '../../assets/niranju/lsp (18).jpg';
import T19 from '../../assets/niranju/lsp (19).jpg';
import T20 from '../../assets/niranju/lsp (20).jpg';
import T21 from '../../assets/niranju/lsp (21).jpg';
import T22 from '../../assets/niranju/lsp (22).jpg';
import T23 from '../../assets/niranju/lsp (23).jpg';
import T24 from '../../assets/niranju/lsp (24).jpg';
import T25 from '../../assets/niranju/lsp (25).jpg';
import T26 from '../../assets/niranju/lsp (26).jpg';
import T27 from '../../assets/niranju/lsp (27).jpg';
import T28 from '../../assets/niranju/lsp (28).jpg';
import T29 from '../../assets/niranju/lsp (29).jpg';
import T30 from '../../assets/niranju/lsp (30).jpg';
import T31 from '../../assets/niranju/lsp (31).jpg';
import T32 from '../../assets/niranju/lsp (32).jpg';
import T33 from '../../assets/niranju/lsp (33).jpg';
import T34 from '../../assets/niranju/lsp (34).jpg';
import T35 from '../../assets/niranju/lsp (35).jpg';
import T36 from '../../assets/niranju/lsp (36).jpg';
import T37 from '../../assets/niranju/lsp (37).jpg';
import T38 from '../../assets/niranju/lsp (38).jpg';
import T39 from '../../assets/niranju/lsp (39).jpg';
import T40 from '../../assets/niranju/lsp (40).jpg';
import T41 from '../../assets/niranju/lsp (41).jpg';
import T42 from '../../assets/niranju/lsp (42).jpg';
import T43 from '../../assets/niranju/lsp (43).jpg';
import T44 from '../../assets/niranju/lsp (44).jpg';
import T45 from '../../assets/niranju/lsp (45).jpg';
import T46 from '../../assets/niranju/lsp (46).jpg';
import T47 from '../../assets/niranju/lsp (47).jpg';
import T48 from '../../assets/niranju/lsp (48).jpg';
import T49 from '../../assets/niranju/lsp (49).jpg';
import T50 from '../../assets/niranju/lsp (50).jpg';
import T51 from '../../assets/niranju/lsp (51).jpg';
import T52 from '../../assets/niranju/lsp (52).jpg';
import T53 from '../../assets/niranju/lsp (53).jpg';
import T54 from '../../assets/niranju/lsp (54).jpg';
import T55 from '../../assets/niranju/lsp (55).jpg';
import T56 from '../../assets/niranju/lsp (56).jpg';
import T57 from '../../assets/niranju/lsp (57).jpg';
import T58 from '../../assets/niranju/lsp (58).jpg';
import T59 from '../../assets/niranju/lsp (59).jpg';
import T60 from '../../assets/niranju/lsp (60).jpg';
import T61 from '../../assets/niranju/lsp (61).jpg';
import T62 from '../../assets/niranju/lsp (62).jpg';
import T63 from '../../assets/niranju/lsp (63).jpg';
import T64 from '../../assets/niranju/lsp (64).jpg';
import T65 from '../../assets/niranju/lsp (65).jpg';
import T66 from '../../assets/niranju/lsp (66).jpg';
import T67 from '../../assets/niranju/lsp (67).jpg';
import T68 from '../../assets/niranju/lsp (68).jpg';
import T69 from '../../assets/niranju/lsp (69).jpg';
import T70 from '../../assets/niranju/lsp (70).jpg';
import T71 from '../../assets/niranju/lsp (71).jpg';
import T72 from '../../assets/niranju/lsp (72).jpg';
import T73 from '../../assets/niranju/lsp (73).jpg';
import T74 from '../../assets/niranju/lsp (74).jpg';
import T75 from '../../assets/niranju/lsp (75).jpg';
import T76 from '../../assets/niranju/lsp (76).jpg';
import T77 from '../../assets/niranju/lsp (77).jpg';
import T78 from '../../assets/niranju/lsp (78).jpg';

const songs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', src: S1 },
  { id: 2, title: 'Song 2', artist: 'Artist 2', src: S2 },
  { id: 3, title: 'Song 3', artist: 'Artist 3', src: S3 },
  { id: 4, title: 'Song 4', artist: 'Artist 4', src: S4 },
  { id: 5, title: 'Song 5', artist: 'Artist 5', src: S5 },
  { id: 6, title: 'Song 6', artist: 'Artist 6', src: S6 },
  { id: 7, title: 'Song 7', artist: 'Artist 7', src: S7 },
  { id: 8, title: 'Song 8', artist: 'Artist 8', src: S8 },
  { id: 9, title: 'Song 9', artist: 'Artist 9', src: S9 },
  { id: 10, title: 'Song 10', artist: 'Artist 9', src: S10 },
];

const photos = [
  T1,
  T4,
  T5,
  T6,
  T7,
  T8,
  T33,
  T35,
  T36,
  T37,
  T38,
  T39,
  T40,
  T41,
  T42,
  T43,
  T44,
  T45,
  T46,
  T47,
  T48,
  T49,
  T50,
  T51,
  T52,
  T53,
  T54,
  T55,
  T56,
  T57,
  T58,
  T59,
  T60,
  T61,
  T62,
  T63,
  T64,
  T65,
  T66,
  T67,
  T68,
  T69,
  T70,
  T71,
  T72,
  T73,
  T74,
  T75,
  T76,
  T77,
  T78,
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const audioRef = useRef(null);

  // Initialize audio and attempt autoplay
  useEffect(() => {
    const audio = audioRef.current;

    const attemptAutoplay = () => {
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Autoplay prevented, waiting for user interaction');
            setIsPlaying(false);
            // Enable audio on first user interaction
            const enableOnInteraction = () => {
              audio
                .play()
                .then(() => {
                  setIsPlaying(true);
                  console.log('Playback started after user interaction');
                })
                .catch((error) => {
                  console.log('Playback failed even after user interaction');
                });
              document.removeEventListener('click', enableOnInteraction);
            };
            document.addEventListener('click', enableOnInteraction, {
              once: true,
            });
          });
      }
    };

    // When audio is loaded, attempt to play
    const handleLoadedData = () => {
      audio.currentTime = 0;
      setProgress(0);
      attemptAutoplay();
    };

    audio.addEventListener('loadeddata', handleLoadedData);

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.pause();
    };
  }, []);

  // Handle song changes
  useEffect(() => {
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Playback prevented on song change');
        });
      }
    }
  }, [currentSongIndex, isPlaying]);

  // Smooth photo slideshow effect
  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // Change photo every 4 seconds

    return () => clearInterval(photoInterval);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Playback prevented');
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio.duration) {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleProgressChange = (e) => {
    const newValue = e.target.value;
    const audio = audioRef.current;
    const newTime = (newValue / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(newValue);
  };

  const handleSongEnd = () => {
    handleNext();
  };

  return (
    <div className="music-player-container">
      <div className="music-player">
        <h3>Our Love Songs</h3>
        <div className="player-container">
          <div className="song-info">
            <h4>{songs[currentSongIndex].title}</h4>
            <p>{songs[currentSongIndex].artist}</p>
          </div>
          <div className="progress-container">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="progress-bar"
              style={{
                background: `linear-gradient(to right, var(--primary-color) ${progress}%, #e0e0e0 ${progress}%)`,
              }}
            />
          </div>
          <div className="controls">
            <button onClick={handlePrev} className="control-btn">
              ⏮
            </button>
            <button onClick={togglePlay} className="play-btn">
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button onClick={handleNext} className="control-btn">
              ⏭
            </button>
          </div>
        </div>
        <audio
          ref={audioRef}
          src={songs[currentSongIndex].src}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleSongEnd}
          autoPlay
        />
      </div>

      <div className="photo-slideshow">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-container"
            style={{
              opacity: index === currentPhotoIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: index === currentPhotoIndex ? 1 : 0,
            }}
          >
            <img src={photo} alt={`Memory ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
