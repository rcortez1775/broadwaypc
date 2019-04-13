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
    paddingTop: '25px',
    color: '#FFFFFF',
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
            <Tab label="Wellness Programs" />
            <Tab label="Dental Care" />
            <Tab label="Vaccinations & Microchipping" />
            <Tab label="Radiology & Ultrasound" />
            <Tab label="Internal Medicine" />
            <Tab label="Surgery" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import './Buttons.css';

// class ScrollDialog extends React.Component {
//   state = {
//     open: false,
//     scroll: 'paper',
//   };

//   handleClickOpen = scroll => () => {
//     this.setState({ open: true, scroll });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     return (
//         <div className="container">
//             <div className="box">
//         <Button id="button" onClick={this.handleClickOpen('paper')}><h2 className="category">Price<br></br>List</h2></Button>
//         <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           scroll={this.state.scroll}
//           aria-labelledby="scroll-dialog-title"
//         >
//           <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Cras mattis
//             </DialogContentText>
//           </DialogContent>
//         </Dialog>
//             </div>

//             <div className="box">
//          <Button id="button" onClick={this.handleClickOpen('paper')}><h2 className="category">Wellness<br></br>Programs</h2></Button>
//         <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           scroll={this.state.scroll}
//           aria-labelledby="scroll-dialog-title"
//         >
//           <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Cras mattis
//             </DialogContentText>
//           </DialogContent>
//         </Dialog>
//             </div>

//             <div className="box">
//          <Button id="button" onClick={this.handleClickOpen('paper')}><h2 className="category">Dental<br></br>Care</h2></Button>
//          <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           scroll={this.state.scroll}
//           aria-labelledby="scroll-dialog-title"
//         >
//           <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Cras mattis
//             </DialogContentText>
//           </DialogContent>
//           </Dialog>
//             </div>

//             <div className="box">
//          <Button id="button" onClick={this.handleClickOpen('paper')}><h2 className="category">Vaccinations &<br></br>Microchipping</h2></Button>
//          <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           scroll={this.state.scroll}
//           aria-labelledby="scroll-dialog-title"
//         >
//           <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Cras mattis
//             </DialogContentText>
//           </DialogContent>
//         </Dialog>
//             </div>

//             <div className="box">
//          <Button id="button" onClick={this.handleClickOpen('paper')}><h2 className="category">Radiology &<br></br>Ultrasound</h2></Button>
//          <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           scroll={this.state.scroll}
//           aria-labelledby="scroll-dialog-title"
//         >
//           <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Cras mattis
//             </DialogContentText>
//           </DialogContent>
//         </Dialog>
//             </div>


//             <div className="box">
//          <Button id="button" onClick={this.handleClickOpen('paper')}><h2 className="category">Internal<br></br>Medicine</h2></Button>
//          <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           scroll={this.state.scroll}
//           aria-labelledby="scroll-dialog-title"
//         >
//           <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Cras mattis
//             </DialogContentText>
//           </DialogContent>
//         </Dialog>
//             </div>


//             <div className="box">
//          <Button id="button" onClick={this.handleClickOpen('paper')}><h2 className="category">Surgical<br></br>Procedures</h2></Button>
//          <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           scroll={this.state.scroll}
//           aria-labelledby="scroll-dialog-title"
//         >
//           <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Cras mattis
//             </DialogContentText>
//           </DialogContent>
//         </Dialog>
//             </div>
//         </div>
//     );
//   }
// }

// export default ScrollDialog;