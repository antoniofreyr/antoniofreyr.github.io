import React, { Component } from 'react';
import IcelandLogo from "../Assets/Iceland.svg";
import { arnarInfo } from "../Assets/content.js";
class HomePage extends Component {
    render() {
        return (
            <div className="HomeScreen">
                <img src={IcelandLogo} alt="test"/>
                <div className="homeTextContainer">
                    <h1>
                        Arnar Rafvirki
                    </h1>
                    <h3>
                        Sími: {arnarInfo.phone}  
                    </h3>
                    
                    <h3>
                    <a href={`mailto: ${arnarInfo.email}`}>Netfang: {arnarInfo.email}</a>
                    </h3>
                    <h3>
                        Staðsetning: {arnarInfo.location}
                    </h3>
                </div>

            </div>
        )
    }
}
export default HomePage;