import React, { Component } from 'react';
import { arnarInfo } from "../../Assets/content.js";
import  "./Footer.module.css"

class Footer extends Component {
    render() {
        
        return (
            <footer>
                <h4>Sími: {arnarInfo.phone}</h4>
        <a href={`mailto: ${arnarInfo.email}`}><h4>Netfang: {arnarInfo.email} </h4></a>
                <h6>@2019 Created by nonNameCompanyCorp</h6>
            </footer>
        )
    }
}
export default Footer;
