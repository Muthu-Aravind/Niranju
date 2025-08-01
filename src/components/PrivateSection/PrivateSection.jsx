import { useState } from 'react';
import './PrivateSection.css';
import prankVideo from '../../assets/prank.mp4';

const PrivateSection = () => {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const [quizAnswers, setQuizAnswers] = useState(Array(5).fill(''));
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [showPrank, setShowPrank] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);

  const correctPassword = 'thangameyyy';
  const quizQuestions = [
    {
      question: 'My Best day in life ?',
      options: ['July 3', 'Oct 27', 'Oct 29', 'June 3'],
      answer: 'Oct 27',
    },
    {
      question: "What's my favorite color?",
      options: ['Blue', 'Pink', 'Black', 'Red'],
      answer: 'Black',
    },
    {
      question: 'What makes me happy?',
      options: [
        'Rcb lifting the cup',
        'Mutton Briyani',
        'My chellam',
        'Football',
      ],
      answer: 'My chellam',
    },
    {
      question: '28*7 ?',
      options: ['184', '196', '189', '190'],
      answer: '196',
    },
    {
      question: "Which of my Chellam's dresses do I admire the most??",
      options: ['Casual Pichakaari get up', 'Saree', 'Formal', 'Western wear'],
      answer: 'Saree',
    },
  ];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setStep(2);
      setError('');
    } else {
      setError(
        "Again ithukum en name tha password but this time it end's with 3 y's"
      );
      triggerShake();
    }
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let correct = 0;
    const wrong = [];

    quizAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].answer) {
        correct++;
      } else {
        wrong.push(quizQuestions[index].question);
      }
    });

    setScore(correct * 20);
    setWrongQuestions(wrong);

    if (correct >= 4) {
      setVerified(true);
      setError('');
    } else {
      setError(`You scored ${correct * 20}%. Need 80% to unlock our memories.`);
      triggerShake();
    }
    setQuizSubmitted(true);
  };

  const handleOptionChange = (questionIndex, option) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = option;
    setQuizAnswers(newAnswers);
  };

  const handlePrankClick = () => {
    setShowPrank(true);
    setTimeout(() => setShowPrank(false), 12000);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="ps-main-container">
      {!verified ? (
        <div className={`ps-auth-box ${shake ? 'ps-shake' : ''}`}>
          <div className="ps-heart">💖</div>

          {step === 1 && (
            <form onSubmit={handlePasswordSubmit} className="ps-password-form">
              <h2 className="ps-title">Exclusive (wet) VN's for my girl</h2>
              <p className="ps-subtitle">Say my name</p>

              <div className="ps-input-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="ps-input"
                  placeholder="Whisper it to me..."
                  required
                  autoFocus
                />
              </div>
              {error && <p className="ps-error">{error}</p>}
              <button type="submit" className="ps-button">
                Continue to Our Love
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleQuizSubmit} className="ps-quiz-form">
              <h2 className="ps-title">Love Quiz</h2>
              <p className="ps-subtitle">
                Avlo easy aa Kadachudumaa 😂 athella kella irukura quiz la 80%
                edutha tha kedaikum
              </p>

              <div className="ps-quiz-questions">
                {quizQuestions.map((question, qIndex) => (
                  <div
                    key={qIndex}
                    className={`ps-quiz-question ${
                      wrongQuestions.includes(question.question)
                        ? 'ps-wrong-question'
                        : ''
                    }`}
                  >
                    <h3 className="ps-quiz-question-text">
                      {question.question}
                    </h3>
                    <div className="ps-quiz-options">
                      {question.options.map((option, oIndex) => (
                        <label
                          key={oIndex}
                          className={`ps-quiz-option ${
                            quizAnswers[qIndex] === option &&
                            wrongQuestions.includes(question.question)
                              ? 'ps-wrong-answer'
                              : ''
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${qIndex}`}
                            checked={quizAnswers[qIndex] === option}
                            onChange={() => handleOptionChange(qIndex, option)}
                            className="ps-quiz-radio"
                          />
                          <span className="ps-quiz-custom-radio"></span>
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {error && (
                <div className="ps-error-box">
                  <p className="ps-error-message">{error}</p>
                  {wrongQuestions.length > 0 && (
                    <div className="ps-wrong-questions">
                      <p className="ps-wrong-title">
                        Oops! These need attention:
                      </p>
                      <ul className="ps-wrong-list">
                        {wrongQuestions.map((question, index) => (
                          <li key={index} className="ps-wrong-item">
                            <span className="ps-wrong-icon">❌</span> {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {quizSubmitted && score < 80 && (
                <p className="ps-try-again">Try again , Chellame!!</p>
              )}
              <button type="submit" className="ps-button">
                {quizSubmitted ? 'Try Again' : 'Check Our Love'}
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="ps-content">
          <div className="ps-success">
            <div className="ps-hearts">💖💖💖</div>
            <h2 className="ps-welcome">Welcome to Our Private Space</h2>
            <p className="ps-message">
              This is just for us. No one else can see what's here.
            </p>

            <div className="ps-premium-video-card" onClick={handlePrankClick}>
              <div className="ps-premium-glare"></div>
              <div className="ps-premium-content">
                <div className="ps-premium-lock-icon">🔒</div>
                <div className="ps-premium-text">
                  <div className="ps-premium-title">Private Collection</div>
                  <div className="ps-premium-subtitle">
                    Click to unlock exclusive content
                  </div>
                </div>
              </div>
              <div className="ps-premium-shine"></div>
              <div className="ps-premium-blur"></div>
            </div>
            {showPrank && (
              <div className="ps-prank-message">
                <div className="ps-prank-inner">
                  <div className="ps-prank-emoji">😂😂</div>
                  <video
                    className="prank-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={prankVideo} type="video/mp4" />
                  </video>
                  <h3
                    className="prank-text"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Ithula Ethum ila Keela potru 😂
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateSection;
