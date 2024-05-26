import React, { useState } from 'react';
// import lodoimg from 'Quiz-App/src/assets/lofi.jpg'
import { cData } from './assets/data';
// import { TeamCard } from '@/assets';
import './App.css';

const App = () => {
  // Initial state setup
  const [cdv, setCdv] = useState(0);
  const [datq, setDatq] = useState(cData[0]);
  const [showAnswer, setShowAnswer] = useState(false);

  const shoot = () => {
    let newCdv = cdv + 1;
    if (newCdv >= cData.length) {
      newCdv = 0; // Restart from the beginning if we've reached the end
    }
    setCdv(newCdv);
    setDatq(cData[newCdv]);
    setShowAnswer(false); // Hide answer when moving to the next question
  };

  const reshoot = () => {
    let newCdv = cdv - 1;
    if (newCdv < 0) {
      newCdv = cData.length - 1; // Wrap around to the last question if we go below 0
    }
    setCdv(newCdv);
    setDatq(cData[newCdv]);
    setShowAnswer(false); // Hide answer when moving to the previous question
  };

  const showAns = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <div className="Main">
        <h1>QUIZ APP</h1>
        <div className="qs">
          <h2>
            Question: {datq.question}
          </h2>
          <div className='ans' id="ans">
            {showAnswer ? (
              <h3>{datq.answer}</h3>
            ) : (
              <button onClick={showAns}>Show Answer</button>
            )}
          </div>
          <p className='qtyp'>
           Level: {datq.question_type}
          </p>
          {/* <img src="lodoimg" id="lofiimg" alt="lofiimages" /> */}
        </div>
        <button id='butprev' onClick={reshoot}>Previous Question</button>
        <button id='butnext' onClick={shoot}>Next Question</button>
      </div>
    </div>
  );
};

export default App;
