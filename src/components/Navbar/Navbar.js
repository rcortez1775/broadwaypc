import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Call from '@material-ui/icons/Call';
import Pets from '@material-ui/icons/Pets';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import "./Navbar.css";


const styles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
      },
  };
  
  class LabelBottomNavigation extends React.Component {
    state = {
      value: 'recents',
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;
  
      return (
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.stickToBottom}>
          <BottomNavigationAction label="Home" value="recents" icon={<Home />} href="/" />
          <BottomNavigationAction label="Services" value="favorites" icon={<Pets />} href="/services" />
          <BottomNavigationAction label="About Us" value="nearby" icon={<SupervisedUserCircle />} href="/aboutus" />
          <BottomNavigationAction label="Contact" value="call" icon={<Call />} href="/contact" />
        </BottomNavigation>
      );
    }
  }
  
  LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LabelBottomNavigation);
