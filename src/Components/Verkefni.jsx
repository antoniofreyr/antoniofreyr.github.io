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

class Verkefni extends Component {
    render() {
        return (
            <div>
                <h1>Verkefni</h1>
                <div className="verkefnaContainer">

                <img alt="Rafkaup" className="verkefnimynd fade-in" src={hhusafell} />

                <img alt="Rafkaup" className="verkefnimynd fade-in" src={hreykholt} />
  
                </div>
                <div className="verkefnatextaContainer">
                    <a>
                        <h2>
                            Hótel Húsafell
                        </h2>

                        <h2>
                            Hótel Reykholt
                        </h2>
                    </a>
                </div>
                <div className="verkefnaContainer">

                <img alt="Rafkaup" className="verkefnimynd fade-in" src={husafellbistro} />

                <img alt="Rafkaup" className="verkefnimynd fade-in" src={krauma} />

                </div>

                <div className="verkefnatextaContainer2">
                    <a>
                        <h2>
                            Húsafell Bistro
                        </h2>                    
                        <h2>
                            Krauma
                        </h2>
                    </a>
                </div>

                <div className="verkefnaContainer">

                <img alt="Rafkaup" className="verkefnimynd fade-in" src={grunnborg} />
                
                <img alt="Rafkaup" className="verkefnimynd fade-in" src={foodstation} />

                </div>

                <div className="verkefnatextaContainer3">
                    <a>
                        <h2>
                            Grunnskólinn Borgarnesi
                        </h2>

                        <h2>
                            Digranesgata 4
                        </h2>
                    </a>
                </div>

                <div className="verkefnaContainer">

                <img alt="Rafkaup" className="verkefnimynd fade-in" src={leikskoli} />

                <img alt="Rafkaup" className="verkefnimynd fade-in" src={einbylishus} />

                </div>

                <div className="verkefnatextaContainer4">
                    <a>
                        <h2>
                            Leikslólinn við GBF
                        </h2>

                        <h2>
                            Einbýlishús
                        </h2>
                    </a>
                </div>

                <div className="verkefnaContainer">

                <img alt="Rafkaup" className="verkefnimynd fade-in" src={sumarbustadir} />

                <img alt="Rafkaup" className="verkefnimynd fade-in" src={arnarstapi} />

                </div>

                <div className="verkefnatextaContainer5">
                    <a>
                        <h2>
                            Sumarbústaðir
                        </h2>

                        <h2>
                            Veitingastaður á Arnastapa
                        </h2>   
                    </a>
                </div>

            </div>
        )
    }
}
export default Verkefni;