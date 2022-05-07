import React,{Component} from 'react';
import Header from "./Header.js";
import './weather.css';
export default class Weather extends Component{
  render(){
    return(
      <>
      <div>
        <Header/>
        <div>
          <form>
            <input type="text" placeholder='Enter City Name...' className='city-name'></input>
            <button type='button' className='search'>Search</button>
          </form>
        </div>
      </div>
      </>
    )
  }
}
