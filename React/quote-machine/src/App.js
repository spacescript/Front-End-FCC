import React, {useState} from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("It is never too late to be what you might have been.")
  const [author, setAuthor] = useState("George Eliot");
  const [randomInteger, setRandomInteger] = useState(0);

  const changeQuoteAndAuthor = () => {
    setQuote("Dream big and dare to fail.")
    setAuthor("Norman Vaughan")
  }

  // const randomInteger = (Math.floor(Math.random() * 3))

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box" >
          <h1>Random Number: </h1>
          <button onClick={()=> setRandomInteger(Math.floor(Math.random() * 3))} >Random Number: {randomInteger}</button>
          <p>
            "{quote}"
          </p>
          <p>- {author}</p>
          <button onClick={changeQuoteAndAuthor} >Change Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
