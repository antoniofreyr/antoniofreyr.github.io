import React, { Component } from 'react';
import raflogo from '../Assets/rafkauplogo.png'
import lumexlogo from '../Assets/lumexlogo.jpg'
class Birgjar extends Component {
    render() {
        return (

          <div>
              <h1>Birgjar</h1>
              <div className="samContainer">
              <a href="https://rafkaup.is/">
                  <img alt="Rafkaup" className="birgjalogo fade-in" src={raflogo} />
              </a>
              <p className="slide-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              </div>
              <div className="samContainer">
                  <p className="slide-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              <a href="https://lumex.is/">
                  <img alt="Lumex" className="birgjalogo fade-in" src={lumexlogo}/>
              </a>
                  
              </div>


          </div>

        )
    }
}
export default Birgjar;
