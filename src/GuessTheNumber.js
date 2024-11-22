import React, { useState } from 'react';
import './GuessTheNumber.css';

const generateRandomNumber = (size) => {
  let number;
  
  do {
    number = '';
    const digits = new Set();

    while (digits.size < size) {
      const digit = Math.floor(Math.random() * 10).toString();
      if (digits.size === 0 && digit === '0') continue;
      digits.add(digit);
    }

    number = Array.from(digits).join('');
  } while (number.length !== size);

  return number;
};

const GuessTheNumber = () => {
  const [size, setSize] = useState(3); 
  const [target, setTarget] = useState(generateRandomNumber(3));
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setTarget(generateRandomNumber(newSize));
    setGuess('');
    setFeedback([]);
    setAttempts(0);
    setGameOver(false);
    setGaveUp(false);
  };

  const calculateFeedback = (guess) => {
    let B = 0;
    let G = 0;
    const guessArr = guess.split('');
    const targetArr = target.split('');
    const targetMatched = Array(target.length).fill(false);
    const guessMatched = Array(guess.length).fill(false);

    for (let i = 0; i < guessArr.length; i++) {
      if (guessArr[i] === targetArr[i]) {
        B++;
        guessMatched[i] = true;
        targetMatched[i] = true;
      }
    }

    for (let i = 0; i < guessArr.length; i++) {
      if (!guessMatched[i]) {
        for (let j = 0; j < targetArr.length; j++) {
          if (!targetMatched[j] && guessArr[i] === targetArr[j]) {
            G++;
            targetMatched[j] = true;
            break;
          }
        }
      }
    }

    return { B, G };
  };

  const handleGuess = () => {
    if (guess.length !== size || isNaN(guess) || guess[0] === '0') {
      alert(`Please enter a valid ${size}-digit number (no leading zeros).`);
      return;
    }

    const guessSet = new Set(guess);
    if (guessSet.size !== guess.length) {
      alert("Please enter a number with all unique digits.");
      return;
    }

    // Check if the guess has already been made
    if (feedback.some(f => f.guess === guess)) {
      alert("You've already guessed this number. Try a different one.");
      return;
    }

    const { B, G } = calculateFeedback(guess);
    setFeedback([...feedback, { guess, B, G, attempt: attempts + 1 }]);
    setAttempts(attempts + 1);
    setGuess('');

    if (B === size) {
      setGameOver(true);
    }
  };

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGiveUp = () => {
    setGameOver(true);
    setGaveUp(true);
  };

  const handleReset = () => {
    setTarget(generateRandomNumber(size));
    setGuess('');
    setFeedback([]);
    setAttempts(0);
    setGameOver(false);
    setGaveUp(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !gameOver) {
      handleGuess();
    }
  };

  return (
    <div className="game-container container p-4 my-4 shadow-lg rounded">
      <h1 className="text-center mb-4">🎯 Guess The Number Game 🎯</h1>
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <label className="form-label">
          <strong>Select Number Size:</strong>
          <select 
            value={size} 
            onChange={handleSizeChange} 
            className="form-select d-inline-block mx-2" 
            disabled={feedback.length > 0}
          >
            <option value="3">3 Digits</option>
            <option value="4">4 Digits</option>
            <option value="5">5 Digits</option>
          </select>
        </label>
        <button onClick={handleReset} className="btn btn-outline-primary">
          🔄 Start New Game
        </button>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          value={guess}
          onChange={handleInputChange}
          placeholder={`Enter your ${size}-digit guess`}
          maxLength={size}
          className="form-control"
          onKeyDown={handleKeyDown}
          disabled={gameOver}
        />
        <button onClick={handleGuess} className="btn btn-primary" disabled={gameOver}>
          🚀 Submit Guess
        </button>
        <button 
          onClick={handleGiveUp} 
          className="btn btn-warning ms-2" 
          disabled={gameOver || attempts < 5}
        >
          😅 Give Up
        </button>
      </div>

      {gameOver && (
        <div className="alert alert-success mt-3" role="alert">
          {gaveUp ? (
            <>Better luck next time! The number was: <strong>{target}</strong></>
          ) : (
            <>🎉 Congratulations! You guessed the number: <strong>{target}</strong> in {attempts} attempts.</>
          )}
        </div>
      )}

      <h3 className="mt-4">Feedback</h3>
      <ul className="list-group">
        {feedback.map((f, index) => (
          <li key={index} className="list-group-item">
            <span><strong>Attempt {f.attempt}:</strong> {f.guess}</span> |
            <span className="text-success"> Hits: {f.B}</span> | 
            <span className="text-warning"> Misses: {f.G}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuessTheNumber;
