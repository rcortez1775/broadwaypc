import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  transparentBar: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: '-10px',
  },
  text: {
    color: '#F7F9FB',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '15px',
    backgroundColor: '#111111bb',
    margin: '20px',
    padding: '20px',
    width: '180px',
    height: '180px',
    textAlign: 'center',
    boxSizing: 'borderbox',
  },
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceAround',
    flexFlow: 'wrap',
    margin: 'auto',
  },
  price: {
    fontSize: '40px',
  },
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.transparentBar}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            
          >
            <Tab label="Price List" />
            <Tab label="Spay/Neuter" />
            <Tab label="Wellness Programs" />
            <Tab label="Dental Care" />
            <Tab label="Vaccinations & Microchipping" />
            <Tab label="Radiology & Ultrasound" />
            <Tab label="Internal Medicine" />
            <Tab label="Surgery" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
            <div className={classes.container}>
             <div className={classes.text}>
             <h5>Phsyical Exam</h5>
             <h2 className={classes.price}>$45</h2>
             </div>

             <div className={classes.text}>
             <h5>DA2PP | Corona | Bordetella Booster | FVRCP Booster</h5>
             <h2 className={classes.price}>$19</h2>
             </div>

             <div className={classes.text}>
             <h5>PFELV Booster</h5>
             <h2 className={classes.price}>$22</h2>
             </div>

             <div className={classes.text}>
             <h5>Rabies Vaccine</h5>
             <h2 className={classes.price}>$18</h2>
             </div>

             <div className={classes.text}>
             <h5>In-House Blood work</h5>
             <h2 className={classes.price}>$149</h2>
             </div>

             <div className={classes.text}>
             <h5>Radiographs</h5>
             <h2 className={classes.price}>$100</h2>
             </div>

             <div className={classes.text}>
             <h5>Ultrasound</h5>
             <h2 className={classes.price}>$350</h2>
             </div>

             <div className={classes.text}>
             <h5>Nail Trim</h5>
             <h2 className={classes.price}>$20</h2>
             </div>

             <div className={classes.text}>
             <h5>Anal Gland Expression</h5>
             <h2 className={classes.price}>$15</h2>
             </div>

             <div className={classes.text}>
             <h5>Microchip</h5>
             <h2 className={classes.price}>$30</h2>
             </div>

             <div className={classes.text}>
             <h5>Dental</h5>
             <h2 className={classes.price}>$199</h2>
             </div>

            </div>
        </TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
        {value === 7 && <TabContainer>Item Seven</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);