import React,{Component} from 'react';
import Header from "./Header.js";
import './weather.css';
import WeatherDetails from './weatherDetails.js';
export default class Weather extends Component{
  constructor(props){
    super(props);
    this.state = {
      city:'',
      cityNameFound: null,
      cityNameError: false,
      loading: false,
      name : null,
      temp: null,
      weather: null,
      wind: null,
      humidity: null,
      maxTemp: null,
      minTemp: null,
      pressure: null,
      sunrise: null,
      sunset:  null,
      country: null,

    }
    this.weatherSearch = this.weatherSearch.bind(this);
  }
  setcity=(e)=>{
    this.setState({city:e.target.value})
}
  weatherSearch=(e)=>{
    this.setState({
      cityNameFound: false,
      loading: true,
      cityNameError: false
    })

    let that = this;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.state.city+"&appid=27a28558b06d8f69a72ca0170aee7179&units=metric")
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if(response.cod === "404") {
          that.setState({
            cityNameFound: false,
            cityNameError: true,
            loading: false
          })
        }
      else if(response.cod === 200) {
        console.log("Response from openweathermap api " , response);
        that.setState({
          cityNameFound: true,
          cityNameError: false,
          name: response.name,
          temp: response.main.temp,
          weather: response.weather[0].main,
          wind : response.wind.speed,
          humidity: response.main.humidity,
          maxTemp: response.main.temp_max,
          minTemp: response.main.temp_min,
          pressure: response.main.pressure,
          weatherIcon: response.weather[0].icon,
          loading: false,
          country: response.sys.country,
          sunrise: new Date(response.sys.sunrise*1000).toLocaleTimeString(),
          sunset: new Date(response.sys.sunset*1000).toLocaleTimeString()
  
        })
  
      } 
    });   
  }

  render(){
    let showErrorMessage = this.state.cityNameError === true ? (
      <div className='errormsg'>
        <h4>City Name not found</h4>
      </div>
    ) : (''
    )
    let showTemperatureDetails  = this.state.cityNameFound === true ? (
    <WeatherDetails 
    name={this.state.name} 
    temp={this.state.temp} 
    weather = {this.state.weather}
    wind = {this.state.wind}
    humidity = {this.state.humidity}
    maxTemp = {this.state.maxTemp}
    minTemp = {this.state.minTemp}
    pressure = {this.state.pressure}
    weatherIcon = {this.state.weatherIcon}
    sunset= {this.state.sunset}
    sunrise = {this.state.sunrise}
    country = {this.state.country}

    ></WeatherDetails>
    
    ) : (
      this.state.loading === true ? (
        <div className='loading'>
        <h5>Searching City name...</h5>
      </div>
      ):('')
    )

    return(
      <>
      <div>
        <Header/>
        <div>
          <form>
            <input type="text" placeholder='Enter City Name...' className='city-name'onChange={this.setcity}></input>
            <button type='button' className='search' value={this.state.city} onClick={this.weatherSearch}>Search</button>
          </form>
          {showErrorMessage}
          {showTemperatureDetails}
          
          
          
        </div>
      </div>
      </>
    )
  }
}
