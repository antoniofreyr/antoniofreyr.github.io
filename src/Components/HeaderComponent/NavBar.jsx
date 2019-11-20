import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
      return (
          <header>
              <ul id="headerButtons">
                  <Link className="navbuttons" to="">Heim</Link>
                  <Link className="navbuttons" to="/verkefni">Verkefni</Link>
                  <Link className="navbuttons" to="/starfsmenn">Starfsmenn</Link>
                  <Link className="navbuttons" to="/samstarfsadilar">Samstarfsaðilar</Link>
                  <Link className="navbuttons" to="/birgjar">Birgjar</Link>
              </ul>
          </header>
      )
  }
}
export default NavBar;
