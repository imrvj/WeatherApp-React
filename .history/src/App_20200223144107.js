import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [weather, setweather] = useState('loading weather...')
  const [city, setCity] = useState('Enter City')
  const [temperature, settemperature] = useState(0)
  const [Entercity, setEntercity] = useState("Delhi")

  useEffect(() => {
   
    handleit(Entercity);
  }, []);

  const handleit=(cityname)=>
  {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=6fe84926b061ee8a1bdcb83831837575')
    .then(res=>res.json())
    .then(result=>
      {
         
         settemperature(result.main.temp)
         setCity(result.name)
         setweather(result.weather[0].main)
        
      })
  }
  return (
    <>
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
                                      <h3 className="location">{city}</h3>
                                      <p className="temp">
                      <span className="temp-value">{temperature}</span>
                                        <span className="deg">0</span>
                                        <a href="javascript:;"><span className="temp-type">C</span></a>
                  </p>
                  <input placeholder="City Name" value={Entercity} type="text" onChange={(e)=>setEntercity(e.target.value)}></input>
                   <button onClick={handleit(Entercity)}>GET IT</button>
                </div>
              </div>
              
            </div>
          </div>
         
        </div>
      </div>
    </div>

    
    </>
  );
}

export default App;
