import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import dog1 from '../../images/dog1.jpg';

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
    paddingTop: '80px',
    color: '#111111',
  },
  text: {
    color: '#31708E',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#F7F9FBbb',
    margin: 'auto',
    borderRadius: '100px',
    marginBottom: '20px',
    left: 0,
    right: 0,
    padding: '20px',
    width: '160px',
    height: '160px',
    textAlign: 'center',
    boxSizing: 'borderbox',
    boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  container: {
    width: '100%',
    height: '80%',
    marginTop: '120px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceAround',
    flexFlow: 'wrap',
  },
  price: {
    fontSize: '40px',
    fontFamily: 'Roboto, sans-serif',
  },
  dollar: {
    fontSize: '20px',
    top: 0,
    verticalAlign: '11px',
  },
  intro: {
    textAlign: 'center',
    marginTop: '130px',
    fontFamily: 'Rajdhani, sans-serif',
    padding: '10px',
    color: '#F7F9FB',
    fontSize: '18px',
    width: '70%',
    margin: 'auto',
  },
  hr: {
      width: '50px',
  }
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
        <AppBar position="fixed" className={classes.transparentBar}>
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
             <h3>Anal Gland Expression</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>15</h2>
             </div>

             <div className={classes.text}>
             <h3>Rabies Vaccine</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>18</h2>
             </div>

             <div className={classes.text}>
             <h3>DA2PP, Corona, Bordetella, FVRCP</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>19</h2>
             </div>

             <div className={classes.text}>
             <h3>Nail Trim</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>20</h2>
             </div>

             <div className={classes.text}>
             <h3>PFELV Booster</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>22</h2>
             </div>

             <div className={classes.text}>
             <h3>Microchip</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>30</h2>
             </div>

             <div className={classes.text}>
             <h3>Phsyical Exam</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>45</h2>
             </div>

             <div className={classes.text}>
             <h3>Radiographs</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>100</h2>
             </div>

             <div className={classes.text}>
             <h3>In-House Blood work</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>149</h2>
             </div>

             <div className={classes.text}>
             <h3>Dental</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>199</h2>
             </div>


             <div className={classes.text}>
             <h3>Ultrasound</h3>
             <h2 className={classes.price}><span className={classes.dollar}>$</span>350</h2>
             </div>

            </div>
        </TabContainer>}
        {value === 1 && <TabContainer>
            <div>
                <div className={classes.intro}>
                    <hr className={classes.hr} />
                {/* <img src={dog1} alt="dog" className={classes.dog1}></img> */}
                    <p>At Broadway Pet Clinic we firmly believe that getting your pet neutered/spayed is the best 
                    option when considering his/her health! 
                    We are now dedicating our time to service our existing clients, along with the City of 
                    Long Beach and surrounding areas, to make these procedures more 
                    affordable while still maintaining quality care.
                    </p> 
                    <p>Your pet will have a devoted team, from beginning to end, 
                    monitoring your fur baby's progress throughout the procedure, ready to give kisses and hugs when they 
                    wake from anesthesia!
                    </p>
                    <hr className={classes.hr} />
                </div>
            </div>
            </TabContainer>}
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