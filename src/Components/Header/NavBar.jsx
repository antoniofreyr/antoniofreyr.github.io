import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'
class NavBar extends Component {
  render() {
      return (
          <header>
              <ul className={styles.navContainer}>
                  <Link className={styles.navbuttons} to="">Heim</Link>
                  <Link className={styles.navbuttons} to="/verkefni">Verkefni</Link>
                  <Link className={styles.navbuttons} to="/starfsmenn">Starfsmenn</Link>
                  <Link className={styles.navbuttons} to="/samstarfsadilar">Samstarfsaðilar</Link>
                  <Link className={styles.navbuttons} to="/birgjar">Birgjar</Link>
              </ul>
          </header>
      )
  }
}
export default NavBar;
