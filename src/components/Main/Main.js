import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Services from './Services/Services';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
    </Switch>
)

export default Main;