import React, { Component } from 'react';
import hhusafell from "../Assets/projects/hotelhusaimg.png";
import hreykholt from "../Assets/projects/hotelreykholtimg.jpg";
import husafellbistro from "../Assets/projects/husafellbistroimg.jpg";
import krauma from "../Assets/projects/kraumaimg.jpg";
import grunnborg from "../Assets/projects/grunnborgimg.jpg";
import foodstation from "../Assets/projects/foodstationimg.jpg";
import leikskoli from "../Assets/projects/leikskoliimg.png";
import einbylishus from "../Assets/projects/einbylishusimg.jpg";
import sumarbustadir from "../Assets/projects/sumarhusimg.jpg";
import arnarstapi from "../Assets/projects/arnarstapiimg.jpg";
import { Link } from 'react-router-dom';
import { Projects } from "../Assets/content.js";
import Project from "./Project/Project";

class Verkefni extends Component {
    render() {
        let duration = 0.2;
        const project = Projects.map(pro => { 
            duration += 0.3;
            return (
                <Project
                    key={pro.name} 
                    name={pro.name}
                    text={pro.text}
                    image={pro.image}
                    animateDuration={duration}
                />
            )
        });
        return (
            <div>
                <h1>Verkefni</h1>
                <div className="verkefniContainer">
                    {project}
                </div>
            </div>
        )

    }
}
export default Verkefni;