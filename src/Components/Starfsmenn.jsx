import React, { Component } from 'react';
import Card from "./Card/Card";
import "../App.css"
import { employees } from "../Assets/content.js";

class Starfsmenn extends Component {
    render() {
        let duration = 0.2;
        const cards = employees.map(emp => { 
            duration += 0.3;
            return (
                <Card
                    key={emp.name} 
                    name={emp.name}
                    title={emp.title}
                    phone={emp.phone}
                    email={emp.email}
                    image={emp.image}
                    animateDuration={duration}
                />
            )
        });
        return (
            <div>
                <h1>Starfsmenn</h1>
                <div className="cardsContainer">
                    {cards}
                </div>
            </div>
        )
    }
}
export default Starfsmenn;
