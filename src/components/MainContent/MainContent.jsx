import Countdown from '../Countdown/Countdown';
import HeartRain from '../HeartRain/HeartRain';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content-container">
      <h1 className="main-title">Happy 1st Anniversary, My Love!</h1>
      <Countdown />
      <HeartRain />
      <MusicPlayer />
    </div>
  );
};

export default MainContent;
