import React, {useEffect, useState} from 'react';
import './App.css';



function App() {
  const [quote, setQuote] = useState("I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.");
  const [author, setAuthor] = useState("Leonardo da Vinci");
  const [randomInteger, setRandomInteger] = useState(0);

  const fullQuoteUpdate = () => {
    setQuote("Whatever the mind of man can conceive and believe, it can achieve.")
    setAuthor("Napoleon Hill")
  }

  const newNumber = () => {
    setRandomInteger(Math.floor(Math.random() * 3));
  }

  // let quote = "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
  // let author = "Leonardo da Vinci"

  // const randomInteger = (Math.floor(Math.random() * 3))

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <h1>Random Number: {randomInteger}</h1>
          <button onClick={newNumber} >Randomize Number</button>
          <p>
            "{quote}"
          </p>
          <p>- {author}</p>
          <button onClick={fullQuoteUpdate} >New Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
