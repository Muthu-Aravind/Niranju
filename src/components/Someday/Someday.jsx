import './Someday.css';

const Someday = () => {
  return (
    <section className="someday-section">
      <h1 className="someday-title">Someday...</h1>

      <div className="someday-gallery">
        {/* Wedding */}
        <div className="someday-card">
          <img
            src="https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg"
            alt="Wedding"
            className="someday-image"
          />
          <div className="someday-text">
            <h2>Our Wedding Day</h2>
            <p>
              The day we say "I do", surrounded by love and joy, marking the
              beginning of our forever.
            </p>
          </div>
        </div>

        {/* Honeymoon */}
        <div className="someday-card">
          <img
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
            alt="Honeymoon"
            className="someday-image"
          />
          <div className="someday-text">
            <h2>Honeymoon Bliss</h2>
            <p>
              Exploring new places hand in hand, creating memories that last a
              lifetime.
            </p>
          </div>
        </div>

        {/* Family */}
        <div className="someday-card">
          <img
            src="https://images.pexels.com/photos/377058/pexels-photo-377058.jpeg"
            alt="Family"
            className="someday-image"
          />
          <div className="someday-text">
            <h2>Our Growing Family</h2>
            <p>
              Building a home filled with laughter, love, and the pitter-patter
              of little feet.
            </p>
          </div>
        </div>

        {/* Growing Old Together */}
        <div className="someday-card">
          <img
            src="https://images.pexels.com/photos/1586489/pexels-photo-1586489.jpeg"
            alt="Growing Old Together"
            className="someday-image"
          />
          <div className="someday-text">
            <h2>Forever and Always</h2>
            <p>
              Holding hands through the years, cherishing every moment together
              as we grow old.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Someday;
