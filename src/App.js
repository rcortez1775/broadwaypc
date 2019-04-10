import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage/LandingPage';
import Services from './components/Services/Services';



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Services />
      </div>
    );
  }
}

export default App;
