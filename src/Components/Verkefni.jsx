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

                        <div class="HoverImg">
                            <img alt="Rafkaup" className="verkefnimynd fade-in" src={hhusafell} />
                                    <div class="HoverImg-layer_top">
                                        <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                                    </div>  
                        </div>
                        <div class="HoverImg">
                            <img alt="Rafkaup" className="verkefnimynd fade-in" src={hreykholt} />
                                    <div class="HoverImg-layer_top">
                                        <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                                    </div>  
                        </div>
                        

                
    
                    </div>
                    <div className="verkefnatextaContainer">
                            <h2>
                                Hótel Húsafell
                            </h2>

                            <h2>
                                Hótel Reykholt
                            </h2>
                    </div>
                </div>
                <div className="verkefnaAnimation2">
                    <div className="verkefnaContainer">
                        <div class="HoverImg">
                        <img alt="Rafkaup" className="verkefnimynd fade-in" src={husafellbistro} />
                                    <div class="HoverImg-layer_top">
                                        <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                                    </div>  
                        </div>

                        <div class="HoverImg">
                            <img alt="Rafkaup" className="verkefnimynd fade-in" src={krauma} />
                                    <div class="HoverImg-layer_top">
                                        <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                                    </div>  
                        </div>
                        

                    </div>

                    <div className="verkefnatextaContainer2">
                            <h2>
                                Húsafell Bistro
                            </h2>                    
                            <h2>
                                Krauma
                            </h2>
                    </div>
                </div>
                <div className="verkefnaAnimation3">
                    <div className="verkefnaContainer">
                    
                        <div class="HoverImg">
                            <img alt="Rafkaup" className="verkefnimynd fade-in" src={grunnborg} />
                                    <div class="HoverImg-layer_top">
                                        <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                                    </div>  
                        </div>

                        <div class="HoverImg">
                            <img alt="Rafkaup" className="verkefnimynd fade-in" src={foodstation} />
                                    <div class="HoverImg-layer_top">
                                        <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                                    </div>  
                        </div>


                       

                    </div>

                    <div className="verkefnatextaContainer3">
                            <h2>
                                Grunnskólinn Borgarnesi
                            </h2>

                            <h2>
                                Digranesgata 4
                            </h2>
                    </div>
                </div>
                <div className="verkefnaAnimation4">
                    <div className="verkefnaContainer">
                        <div class="HoverImg">
                            <img alt="Rafkaup" className="verkefnimynd fade-in" src={leikskoli} />  
                                <div class="HoverImg-layer_top">
                                    <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                                </div>  
                        </div>

                        <div class="HoverImg">
                            <img alt="Rafkaup" className="verkefnimynd fade-in" src={einbylishus} />
                                <div class="HoverImg-layer_top">
                                    <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                                </div>  
                        </div>


                

                    </div>

                    <div className="verkefnatextaContainer4">
                            <h2>
                                Leikslólinn við GBF
                            </h2>

                            <h2>
                                Einbýlishús
                            </h2>
                    </div>
                </div>
                <div className="verkefnaAnimation5">
                    <div className="verkefnaContainer">

                        <div class="HoverImg">
                            <img alt="Rafkaup" className="verkefnimynd fade-in" src={sumarbustadir} />
                            <div class="HoverImg-layer_top">
                                <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                            </div>  
                        </div>

                        <div class="HoverImg">
                            <img alt="Rafkaup" className="verkefnimynd fade-in" src={arnarstapi} /> 
                            <div class="HoverImg-layer_top">
                                <div class="HoverImg-text"> HERNA KEMUR TEXTI UM ÞETTA VERKEFNI</div>
                            </div>  
                        </div>






                    </div>

                    <div className="verkefnatextaContainer5">
                            <h2>
                                Sumarbústaðir
                            </h2>

                            <h2>
                                Veitingastaður á Arnastapa
                            </h2>   
                    </div>
                </div>

            </div>
        )
    }
}
export default Verkefni;