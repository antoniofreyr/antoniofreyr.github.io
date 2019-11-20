import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './Components/Homepage';
import NavBar from './Components/HeaderComponent/NavBar';
import Footer from './Components/FooterComponent/Footer';
import Verkefni from './Components/Verkefni';
import Starfsmenn from './Components/Starfsmenn';
import Samstarfsaðilar from './Components/Samstarfsaðilar';
import Birgjar from './Components/Birgjar';
import './App.css';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="verkefni" exact path="/verkefni" component={Verkefni} />
                    <Route name="starfsmenn" exact path="/starfsmenn" component={Starfsmenn} />
                    <Route name="Samstarfsaðilar" exact path="/samstarfsadilar" component={Samstarfsaðilar} />
                    <Route name="birgjar" exact path="/birgjar" component={Birgjar} />
                    <Footer />
                </div>
            </Router>
        )
    }
}
export default App;
