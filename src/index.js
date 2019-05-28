import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Contact from './pages/contact';
import AboutUs from './pages/aboutUs'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router} from 'react-router-dom';

const routing = (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/favorites' component={Favorites}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact path='/AboutUs' component={AboutUs}/>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
