import React,{Component} from "react";
import "./header.css";
export default class Header extends Component{
    render(){
        return(
            <>
            <div className="header">
                <span className="text">Weather App</span>
            </div>
            </>
        )
    }
}