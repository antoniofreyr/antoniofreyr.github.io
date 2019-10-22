import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import Verkefni from './Verkefni';
import Starfsmenn from './Starfsmenn';
import Samstarfsaðilar from './Samstarfsaðilar';
import Birgjar from './Birgjar';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <Verkefni />
                    <Starfsmenn />
                    <Samstarfsaðilar />
                    <Birgjar />
                    <Footer />
                </div>
            </Router>
        )
    }
}
export default App;