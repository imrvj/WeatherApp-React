import React, { useState } from 'react';

import './App.css';

function App() {
  const [weather, setweather] = useState('loading weather...')
  const [city, setCity] = useState('Enter Cityy')
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="weather-card one">
              <div className="top">
                <div className="wrapper">
                  <div className="mynav">
                    <a href="javascript:;"><span className="lnr lnr-chevron-left" /></a>
                    <a href="javascript:;"><span className="lnr lnr-cog" /></a>
                  </div>
  <h1 className="heading">{weather}</h1>
                  <h3 className="location">Dhaka, Bangladesh</h3>
                  <p className="temp">
                    <span className="temp-value">20</span>
                    <span className="deg">0</span>
                    <a href="javascript:;"><span className="temp-type">C</span></a>
                  </p>
                </div>
              </div>
              
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
