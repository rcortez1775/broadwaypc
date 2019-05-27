import { Component } from "react";
import React from 'react';
import './Services.css';
import next from '../../images/next.png';


class Services extends Component {
    render() {
        return(
            <div>
                <div className="servicesContainer">
                    <p className="services">OUR SERVICES</p>
                </div>

                <div className="pricesCont">
                    <p className="serviceTitle"><img className="next" src={next} alt="next" />Price list of Services</p>
                    <ul>
                        <li>Physical exam - $45</li>
                        <li>In-house blood work - $149</li>
                        <li>Nail Trim - $20</li>
                        <li>Anal Gland Expression - $15</li>
                        <li>Microchip - $30</li>
                        <li>Ultrasound - $350</li>
                        <li>Radiographs - $100 for first view. $45 for each additional view</li>
                        <li>Dental - starts at $199(not including extractions/special circumstances)</li>
                        <p className="listItem">Vaccines:</p>
                        <li>DA2PP -$19</li>
                        <li>Corona - $19</li>
                        <li>Bordetella Booster - $19</li>
                        <li>FVRCP Booster - $19</li>
                        <li>FELV Booster - $22</li>
                        <li>Rabies Vaccine - $18</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Services;