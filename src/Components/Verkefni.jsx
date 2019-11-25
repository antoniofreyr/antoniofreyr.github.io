import React, { Component } from 'react';
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