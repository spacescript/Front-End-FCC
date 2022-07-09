import React, {useEffect, useState} from 'react';
import './App.css';

let quoteDataBaseURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const [quote, setQuote] = useState("It is never too late to be what you might have been.")
  const [author, setAuthor] = useState("George Eliot");
  const [randomInteger, setRandomInteger] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);

  const changeQuoteAndAuthor = () => {
    setQuote("Dream big and dare to fail.")
    setAuthor("Norman Vaughan")
  }

  const generateRandomNumber = () => {
    let randomInteger = Math.floor(Math.random() * 3)
    setRandomInteger(randomInteger)
  }

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON)
  }

  useEffect(() => {
    fetchQuotes(quoteDataBaseURL)
  }, [quoteDataBaseURL])

  // const randomInteger = (Math.floor(Math.random() * 3))

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box" >
          <h1>Random Number: </h1>
          <button onClick={generateRandomNumber} >Random Number: {randomInteger}</button>
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
