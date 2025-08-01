import { useState } from 'react';
import './AuthGate.css';
import HeartRain from '../HeartRain/HeartRain';

const AuthGate = ({ setAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const correctPassword = 'thangameyy';

  const handleSubmit = (e) => {
    e.preventDefault();
    const lowerCasePassword = password.toLowerCase();
    if (lowerCasePassword === correctPassword) {
      setAuthenticated(true);
    } else {
      setAttemptCount((prev) => prev + 1);
      if (attemptCount === 0) {
        setError("Incorrect password. Hint: Try something that ends with 'yy'");
      } else if (attemptCount === 1) {
        setError(
          "Incorrect password. Hint: Try something that starts with 'tha'"
        );
      } else if (attemptCount >= 2) {
        setError('thangameyy tha passwod poi thola 😏');
      }
    }
  };

  return (
    <>
      <HeartRain />
      <div className="auth-gate-container">
        <div className="auth-gate-card">
          <h1 className="auth-gate-title">Welcome to Our Anniversary</h1>
          <p className="auth-gate-subtitle">My name is the password 🤭</p>
          <form onSubmit={handleSubmit} className="auth-gate-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Our secret code"
              required
              className="auth-gate-input"
            />
            {error && <p className="auth-gate-error">{error}</p>}
            <button type="submit" className="auth-gate-button">
              Unlock Memories
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthGate;
