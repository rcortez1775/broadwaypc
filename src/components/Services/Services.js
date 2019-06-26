import { Component } from "react";
import React from 'react';
import './Services.css';
// import next from '../../images/next.png';
import Accordian from "../../components/Accordian/Accordian";



class Services extends Component {
    render() {
        return(
            <div>
                <div className="servicesContainer">
                    <p className="services">OUR SERVICES</p>
                </div>
                <div>
                    <Accordian />
                </div>
            </div>
        )
    }
}

export default Services;