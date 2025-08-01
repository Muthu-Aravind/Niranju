import LoveLetter from '../components/LoveLetter/LoveLetter';
import MainContent from '../components/MainContent/MainContent';
import PrivateSectionCTA from '../components/PrivateSectionCTA/PrivateSectionCTA';
import Homepa from '../components/Trail/tr';
import CubeComponent from '../components/CubeComponent/CubeComponent';

const Home = () => {
  return (
    <main className="main-content">
      <MainContent />
      <Homepa />
      <LoveLetter />
      {/* <CubeComponent/> */}
      <PrivateSectionCTA />
    </main>
  );
};

export default Home;
