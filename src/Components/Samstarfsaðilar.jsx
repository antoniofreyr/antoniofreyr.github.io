import React, { Component } from 'react';
import { samstarfsadilarInfo } from "../Assets/content.js";
import SamstarfsadilarContents from "./BirgjarComponent/SamstarfsadilarContent";

class Samstarfsaðilar extends Component {
    render() {
        console.log(samstarfsadilarInfo);
        let left = true
        const samContent = samstarfsadilarInfo.map(birg => {
            left = !left;
            return (
                <SamstarfsadilarContents
                    key={birg.name}
                    name={birg.name}
                    text={birg.text}
                    slideLeft={left}
                    />
            )
        });
        return(
            <div>
                <h1>Samstarfsaðilar</h1>
                <div>
                    {samContent}
                </div>
            </div>
        )
        
    }
}
export default Samstarfsaðilar;
