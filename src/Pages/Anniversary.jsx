import Memories from '../components/Memories/Memories';
import Gallery from '../components/Gallery/Gallery';
import LoveLetter from '../components/LoveLetter/LoveLetter';

const Anniversary = () => {
  return (
    <main className="main-content">
      <div className="anniversary-container">
        <Memories />
        <Gallery />
        <LoveLetter />
      </div>
    </main>
  );
};

export default Anniversary;
