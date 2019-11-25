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

class Verkefni extends Component {
    render() {
        return (
            <div>
                <h1>Verkefni</h1>
                <div className="verkefnaAnimation1">
                    <div className="verkefnaContainer">
                    <a href="/hotelHusafell">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={hhusafell} />
                    </a>

                    <a href="/hotelReykholt">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={hreykholt} />
                    </a>
                
    
                    </div>
                    <div className="verkefnatextaContainer">
                            <Link className="verkefniNav" id="nav1" to="/hotelHusafell">Nánar</Link>
                            <h2>
                                Hótel Húsafell
                            </h2>

                            <h2>
                                Hótel Reykholt
                            </h2>
                            <Link className="verkefniNav" id="nav2" to="/hotelReykholt">Nánar</Link>
                    </div>
                </div>
                <div className="verkefnaAnimation2">
                    <div className="verkefnaContainer">
                    <a href="/husafellBistro">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={husafellbistro} />
                    </a>
                    
                    <a href="/Krauma">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={krauma} />
                    </a>
                    

                    </div>

                    <div className="verkefnatextaContainer2">
                        <Link className="verkefniNav" id="nav3" to="/husafellBistro">Nánar</Link>
                            <h2>
                                Húsafell Bistro
                            </h2>                    
                            <h2>
                                Krauma
                            </h2>
                        <Link className="verkefniNav" id="nav4" to="/Krauma">Nánar</Link>
                    </div>
                </div>
                <div className="verkefnaAnimation3">
                    <div className="verkefnaContainer">
                    <a href="/GrunnskoliBorgarnes">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={grunnborg} />
                    </a>
                    <a href="/Digranesgata">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={foodstation} />
                    </a>

                    </div>

                    <div className="verkefnatextaContainer3">
                        <Link className="verkefniNav" id="nav5" to="/GrunnskoliBorgarnes">Nánar</Link>
                            <h2>
                                Grunnskólinn Borgarnesi
                            </h2>

                            <h2>
                                Digranesgata 4
                            </h2>
                        <Link className="verkefniNav" id="nav6" to="/Digranesgata">Nánar</Link>
                    </div>
                </div>
                <div className="verkefnaAnimation4">
                    <div className="verkefnaContainer">
                    <a href="/Leikskoli">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={leikskoli} />
                    </a>
                    <a href="/Einbyli">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={einbylishus} />
                    </a>
                

                    </div>

                    <div className="verkefnatextaContainer4">
                        <Link className="verkefniNav" id="nav7" to="/Leikskoli">Nánar</Link>
                            <h2>
                                Leikslólinn við GBF
                            </h2>

                            <h2>
                                Einbýlishús
                            </h2>
                        <Link className="verkefniNav"  id="nav8" to="/Einbyli">Nánar</Link>
                    </div>
                </div>
                <div className="verkefnaAnimation5">
                    <div className="verkefnaContainer">
                    <a href="/Sumarhus">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={sumarbustadir} />
                    </a>

                    <a href="Arnarstapi">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={arnarstapi} /> 
                    </a>


                    </div>

                    <div className="verkefnatextaContainer5">
                        <Link className="verkefniNav" id="nav9" to="/Sumarhus">Nánar</Link>
                            <h2>
                                Sumarbústaðir
                            </h2>

                            <h2>
                                Veitingastaður á Arnastapa
                            </h2>   
                        <Link className="verkefniNav" id="nav10" to="/Arnarstapi">Nánar</Link>
                    </div>
                </div>

            </div>
        )
    }
}
export default Verkefni;