import React, {useState} from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("It is never too late to be what you might have been.")

  const author = "George Eliot"
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box" >
          <p>
            "{quote}"
          </p>
          <p>- {author}</p>
          <button onClick={() => setQuote("Dream big and dare to fail.")} >Change Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
