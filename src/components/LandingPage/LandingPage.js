import { Component } from "react";
import React from 'react';
import './LandingPage.css';
import logo from '../../images/logo.jpg';


class LandingPage extends Component {
    render() {
        return(
            <div className="intro">
                <div>
                    <img className="image bounce-top" src={logo} alt="Logo" />
                </div>
                <div className="titleContainer">
                    <p className="title text-focus-in">BROADWAY PET CLINIC
                        <p className="addy">1058 E. Broadway Long Beach, CA 90802<br />562.432.1413</p>
                    </p>
                </div>
            </div>
        )
    }
}

export default LandingPage;