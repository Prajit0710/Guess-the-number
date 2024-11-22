// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameIntro from './GameIntro';
import GuessTheNumber from './GuessTheNumber';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameIntro />} />
        <Route path="/game" element={<GuessTheNumber />} />
      </Routes>
    </Router>
  );
}

export default App;
