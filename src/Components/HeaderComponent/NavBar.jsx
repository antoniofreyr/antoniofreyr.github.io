import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="heimButton"><Link to="">Heim</Link></li>
                    <li className="verkefniButton"><Link to="">Verkefni</Link></li>
                    <li className="starfsmennButton"><Link to="">Starfsmenn</Link></li>
                    <li className="samstarfButton"><Link to="">Samstarfsaðilar</Link></li>
                    <li className="birgjarButton"><Link to="">Birgjar</Link></li>
                </ul>
            </header>
        )
    }
}
export default NavBar;