import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Call from '@material-ui/icons/Call';
import Pets from '@material-ui/icons/Pets';
import {Link} from 'react-router-dom';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import "./Navbar.css";



const styles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#F7F9FB',
      },
  };
  
  class LabelBottomNavigation extends React.Component {
    state = {
      value: 'home',
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;
      
  
      return (
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.stickToBottom}>
          <Link to="/"><BottomNavigationAction label="Home" value="home" icon={<Home />} /></Link>
          <Link to="/favorites"><BottomNavigationAction label="Services" value="favorites" icon={<Pets />} /></Link>
          <BottomNavigationAction label="Contact" value="call" icon={<Call />} />
          <BottomNavigationAction label="About Us" value="nearby" icon={<SupervisedUserCircle />} />
        </BottomNavigation>
      );
    }
  } 
  
  LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LabelBottomNavigation);
