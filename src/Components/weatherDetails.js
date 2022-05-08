import React,{Component} from "react";
import './weatherDetails.css';
import Comments from "./comment";
export default class WeatherDetails extends Component{
    render(){
        let dateNow = new Date();
        let icon = "http://openweathermap.org/img/w/" + this.props.weatherIcon + ".png"
        return (
       <div>
            <div className="description">
                <span className="header">{this.props.name}, {this.props.country},  {dateNow.toDateString()}</span>
                <br/>
                <div className="details">
                    <div className="temp">
                        <h1> 
                            <span  style={{fontSize: '100px' }}> {this.props.temp}&deg;C
                            <img src={icon}/>
                            </span>
                        </h1>
                    </div>
                    <div className="detailings">
                        <p style={{color: '#505050', marginTop:'-25px', fontSize: '22px'}}>
                            Weather: <b>{this.props.weather}</b><br/> 
                            Wind:  <b>{this.props.wind} km/hr</b> 
                            <br/>
                            <br/>
                            Humidity: <b>{this.props.humidity}%</b> <br/>
                            Pressure: <b> {this.props.pressure} Pa</b>
                            <br/>
                            <br/>
                            Max Temp: <b>{this.props.maxTemp}&deg;C </b><br/>
                            Min Temp: <b>{this.props.minTemp}&deg;C</b>
                            <br/> <br/>
                            Sunrise : <b> {this.props.sunrise}</b><br/>
                            Sunset: <b> {this.props.sunset}</b>
                            <br/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="comments">
              <Comments></Comments>
                   
          
          </div>
            <br/>
            <br/>
       </div>
        );
    }
}