import { useEffect } from 'react';
import './HeartRain.css';

const HeartRain = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');

      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 3 + 2 + 's';
      heart.style.opacity = Math.random();
      heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;

      heart.innerText = ['💖', '💗', '💓', '💞', '💕', '💘'][
        Math.floor(Math.random() * 6)
      ];

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const interval = setInterval(createHeart, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default HeartRain;
