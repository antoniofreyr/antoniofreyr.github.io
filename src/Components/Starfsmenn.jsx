import React, { Component } from 'react';
import Card from "./Card/Card";
import "../App.css"

class Starfsmenn extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { employees: [
            {
                name: "Arnar Hólmarsson",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
            {
                name: "Gísli Már",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
            {
                name: "Hannes Þór",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
            {
                name: "Þorgeir",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
            {
                name: "Bergþór Ægir",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
            {
                name: "Jón á Báreksstöðum",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
            {
                name: "Jónas",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
            {
                name: "Hjörvar Óli",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
            {
                name: "Sigurður Óskar",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
            {
                name: "Áslaug Ella",
                title: "Starfsmaður",
                phone: "432-1235",
                email: "example@example.com",
                image: "http://via.placeholder.com/500",
            },
        ] };
      }

    render() {
        const cards = this.state.employees.map(emp => (
            <Card 
                name={emp.name}
                title={emp.title}
                phone={emp.phone}
                email={emp.email}
                image={emp.image}
            />
        ));
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
