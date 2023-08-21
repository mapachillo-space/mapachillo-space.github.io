import React from 'react';
import './App.css';

const App = () => {
  const numberOfStars = 100;
  const stars = Array.from({ length: numberOfStars }).map((_, i) => ({
    key: i,
    left: Math.random() * 100 + 'vw',
    top: Math.random() * 100 + 'vh',
  }));

  return (
    <div className="App">
      <img
        src="https://i.imgur.com/dNKSJSb.png"
        alt="Under Construction"
        className="bouncingImage"
      />
      <div className="message">Come Back Soon</div>
      {stars.map((star) => (
        <div
          className="star"
          key={star.key}
          style={{ left: star.left, top: star.top }}
        ></div>
      ))}
    </div>
  );
};

export default App;
