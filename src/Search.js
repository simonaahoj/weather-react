import React from "react";
import "./Search.css";
import ReactAnimatedWeather from "react-animated-weather";


export default function Search() {
  let weatherData = {
    city: "Prague",
    temperature: 3,
    date: "Wednesday 12:00",
    description: "Sunny",
    humidity: 55,
    wind: 5
  };
const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 75,
  animate: true
};

 
  return (
    <div className="Search">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Type city ... "
                  className="form-control"
                />
              </div>
              <input type="submit" class="btn btn-primary" value="Search" />
            </div>
          </form>

          <h1>{weatherData.city}</h1>

          <div className="row">
            <div className="col-sm-4">
              <ul>
                <li>{weatherData.date}</li>
                <li className="description">{weatherData.description}</li>
              </ul>
            </div>

            <div className="col-sm-4">
                
          <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />


              <div className="main-pic">
                <strong className="temperature"> {weatherData.temperature}</strong>
                <a href="#">
                  <strong> ℃ |</strong>
                </a>
                <a href="#">
                  <strong> ℉</strong>
                </a>
              </div>
            </div>

            <div className="col-sm-4">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
            
            <div class="col-sm-2" >
                <h6 class="card-title">Thursday</h6>
                <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
                />
                <strong >6°</strong>                  
            </div>
            
             <div class="col-sm-2" >
                <h6 class="card-title">Friday</h6>
                <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
                />
                <strong >6°</strong>                  
            </div>

             <div class="col-sm-2" >
                <h6 class="card-title">Saturday</h6>
                <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
                />
                <strong >6°</strong>                  
            </div>

             <div class="col-sm-2" >
                <h6 class="card-title">Sunday</h6>
                <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
                />
                <strong >6°</strong>                  
            </div>

             <div class="col-sm-2" >
                <h6 class="card-title">Monday</h6>
                <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
                />
                <strong >6°</strong>                  
            </div>

             <div class="col-sm-2" >
                <h6 class="card-title">Tuesday</h6>
                <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
                />
                <strong >6°</strong>                  
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
