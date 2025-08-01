import { useState } from 'react';
import './LoveLetter.css';
import L from '../../assets/l.jpg';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFolded, setIsFolded] = useState(true);

  const handleOpenLetter = () => {
    if (isFolded) {
      setIsFolded(false);
      setTimeout(() => setIsOpen(true), 500); // Perfect 1-second timing
    } else {
      setIsOpen(false);
      setTimeout(() => setIsFolded(true), 500);
    }
  };

  return (
    <section className="smooth-love-letter">
      <h2>A Letter For You</h2>
      <div
        className={`smooth-envelope ${isFolded ? 'folded' : ''} ${isOpen ? 'open' : ''}`}
        onClick={handleOpenLetter}
      >
        <div className="smooth-envelope-front">
          <div className="smooth-heart">💌</div>
        </div>
        <div className="smooth-letter">
          <div className="smooth-content">
            <img src={L} alt="Love" className="smooth-love-img" />
            <p className="smooth-message">
              En chellamae, Thanks for being with me and making every moment
              special. The best thing that happened just exactly a year ago is
              you.when ever I feel low , Enna seri panrathuku antha 3 vaarthai
              pothum enna da thangooo , ellame maranthu oru maari nimathiya feel
              aagum . Your presence alone is enough for my life. Happy
              Anniversary, En chellamae! 💖
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
