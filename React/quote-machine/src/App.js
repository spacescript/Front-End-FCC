import React, {useEffect, useState} from 'react';
import './App.css';



function App() {


  // const randomInteger = (Math.floor(Math.random() * 3))

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box" >
          <p>
            "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
          </p>
          <p>- Leonardo da Vinci</p>
          <button>New Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
