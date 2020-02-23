import React from 'react';

import './App.css';

function App() {
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
                  <h1 className="heading">Clear night</h1>
                  <h3 className="location">Dhaka, Bangladesh</h3>
                  <p className="temp">
                    <span className="temp-value">20</span>
                    <span className="deg">0</span>
                    <a href="javascript:;"><span className="temp-type">C</span></a>
                  </p>
                </div>
              </div>
              <div className="bottom">
                <div className="wrapper">
                  <ul className="forecast">
                    <a href="javascript:;"><span className="lnr lnr-chevron-up go-up" /></a>
                    <li className="active">
                      <span className="date">Yesterday</span>
                      <span className="lnr lnr-sun condition">
                        <span className="temp">23<span className="deg">0</span><span className="temp-type">C</span></span>
                      </span>
                    </li>
                    <li>
                      <span className="date">Tomorrow</span>
                      <span className="lnr lnr-cloud condition">
                        <span className="temp">21<span className="deg">0</span><span className="temp-type">C</span></span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="weather-card rain">
              <div className="top">
                <div className="wrapper">
                  <div className="mynav">
                    <a href="javascript:;"><span className="lnr lnr-chevron-left" /></a>
                    <a href="javascript:;"><span className="lnr lnr-cog" /></a>
                  </div>
                  <h1 className="heading">Rainy day</h1>
                  <h3 className="location">Sylhet, Bangladesh</h3>
                  <p className="temp">
                    <span className="temp-value">16</span>
                    <span className="deg">0</span>
                    <a href="javascript:;"><span className="temp-type">C</span></a>
                  </p>
                </div>
              </div>
              <div className="bottom">
                <div className="wrapper">
                  <ul className="forecast">
                    <a href="javascript:;"><span className="lnr lnr-chevron-up go-up" /></a>
                    <li className="active">
                      <span className="date">Yesterday</span>
                      <span className="lnr lnr-sun condition">
                        <span className="temp">22<span className="deg">0</span><span className="temp-type">C</span></span>
                      </span>
                    </li>
                    <li>
                      <span className="date">Tomorrow</span>
                      <span className="lnr lnr-cloud condition">
                        <span className="temp">18<span className="deg">0</span><span className="temp-type">C</span></span>
                      </span>
                    </li>
                  </ul>
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
