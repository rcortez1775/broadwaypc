import { Component } from "react";
import React from 'react';
import './LandingPage.css';
import logo from '../../images/logo.png';

class LandingPage extends Component {
    render() {
        return(
            <div className="intro">
                <img className="image rotate-center" src={logo} alt="Logo" />
                <h1 className="title">BROADWAY PET CLINIC</h1>
                <p className="addy">1058 E. Broadway Long Beach, CA 90802<br />562.432.1413</p>
            </div>
        )
    }
}

export default LandingPage;