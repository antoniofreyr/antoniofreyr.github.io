import React, { Component } from 'react';
import { birgjarInfo } from "../Assets/content.js";
import BirgjarContents from "./BirgjarComponent/BirgjarContent";

class Birgjar extends Component {
    render() {
        let left = true
        const birgjarcontent = birgjarInfo.map(birg => {
            left = !left;
            return (
                <BirgjarContents
                    key={birg.text}
                    text={birg.text}
                    logo={birg.logo}
                    link={birg.link}
                    slideLeft={left}
                    />
            )
        });
        return(
            <div>
                <h1>Birgjar</h1>
                <div>
                    {birgjarcontent}
                </div>
            </div>
        )
        
    }
}
export default Birgjar;
