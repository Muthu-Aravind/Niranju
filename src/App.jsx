import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import Anniversary from './Pages/Anniversary';
import AuthGate from './components/AuthGate/AuthGate';
import Ghibli from './components/Ghibli/Ghibli';
import MyWorld from './components/MyWorld/MyWorld';
import Someday from './components/Someday/Someday';
import PrivateSection from './components/PrivateSection/PrivateSection';
import './App.css';
import CubeComponent from './components/CubeComponent/CubeComponent';
import Gallery from './components/Gallery/Gallery';
import Homepage from './components/Trail/Trail';
import Homepag from './components/Trail/Trail1';
import Homepa from './components/Trail/tr';
import LoveSection from './components/LoveSection/LoveSection';
import RomanticExpression from './components/LoveSection/LoveSection';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {authenticated ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/anniversary" element={<Anniversary />} /> */}
              {/* <Route path="/anniversary" element={<LoveSection />} /> */}
              <Route path="/anniversary" element={<RomanticExpression />} />
              <Route path="/ghibli" element={<Ghibli />} />
              <Route path="/myworld" element={<MyWorld />} />
              <Route path="/s" element={<Someday />} />
              <Route path="/private" element={<PrivateSection />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/cube" element={<CubeComponent />} />
              <Route path="/trail" element={<Homepage />} />
              <Route path="/trail1" element={<Homepag />} />
              <Route path="/tr" element={<Homepa />} />
            </Routes>
          </>
        ) : (
          <AuthGate setAuthenticated={setAuthenticated} />
        )}
      </div>
    </Router>
  );
}

export default App;
