import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import {Link} from 'react-router-dom';
import "./Navbar.css";



const styles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        margin: 'auto',
        top: '0',
        background: '#212025',
        fontFamily: 'PT Sans Narrow, sans-serif',
        overflow: 'hidden',
      },
    link: {
      padding: '15px',
      textDecoration: 'none',
      color: '#F7F9FB',
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
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/favorites" className={classes.link}>Services</Link>
          <Link to="/Contact" className={classes.link}>Contact Us</Link>
          <Link to="/AboutUs" className={classes.link}>About Us</Link>
        </BottomNavigation>
      );
    }
  } 
  
  LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LabelBottomNavigation);
