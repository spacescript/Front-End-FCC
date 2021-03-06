import React, {useEffect, useState} from 'react';
import './App.scss';
import COLORS_ARRAY from './colorsArray';

const quoteDataBaseURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quote, setQuote] = useState("I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.");
  const [author, setAuthor] = useState("Leonardo da Vinci");
  const [randomInteger, setRandomInteger] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);
  const [accentColor, setAccentColor] = useState("#282c34;")

  // const quoteAndAuthors = [
  //   {quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", author: "Leonardo da Vinci"}, {quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill"}, {quote: "A truly rich man is one whose children run into his arms when his hands are empty.", author: "Unknown"}
  // ]

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
  }

  useEffect(() => {
    fetchQuotes(quoteDataBaseURL); //eslint-disable-next-line
  }, [quoteDataBaseURL]) 
  

  const newNumber = () => {
    setRandomInteger(Math.floor(Math.random() * quotesArray.length));
  }
  
  const fullQuoteUpdate = () => {
    newNumber();
    setAccentColor(COLORS_ARRAY[(randomInteger / 2)])
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }
  // let quote = "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
  // let author = "Leonardo da Vinci"

  // const randomInteger = (Math.floor(Math.random() * 3))

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:accentColor}}>
        <div id="quote-box" style={{color:accentColor}}>
          <p id="text">
            "{quote}"
          </p>
          <p id="author">- {author}</p>
          <div className="tweet-button">
            <a id="tweet-quote" style={{backgroundColor: accentColor}} href={encodeURI('http://www.twitter.com/intent/tweet?text=${quote} -${author}')}target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
          </div>
          <button id="new-quote" style={{backgroundColor: accentColor}} onClick={fullQuoteUpdate} >New Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
