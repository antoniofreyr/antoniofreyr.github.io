import React, { Component } from 'react';
import IcelandLogo from "../Assets/Iceland.svg";
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
                        Sími: 861-3515  
                    </h3>
                    <h3>
                        Netfang: arnar@arnar.is
                    </h3>
                    <h3>
                        Staðsetning: Hvanneyri, 311 Borgarnes
                    </h3>
                </div>

            </div>
        )
    }
}
export default HomePage;