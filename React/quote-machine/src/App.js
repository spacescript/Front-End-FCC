import React, {useEffect, useState} from 'react';
import './App.css';



function App() {
  const [quote, setQuote] = useState("I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.")

  // let quote = "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
  let author = "Leonardo da Vinci"

  // const randomInteger = (Math.floor(Math.random() * 3))

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box" >
          <p>
            "{quote}"
          </p>
          <p>- {author}</p>
          <button onClick={() => setQuote("Whatever the mind of man can conceive and believe, it can achieve.")} >New Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
