import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Buttons.css';

class ScrollDialog extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
        <div className="container">
            <div className="box">
        <Button id="button" onClick={this.handleClickOpen('paper')}><h2>Price<br></br>List</h2></Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis
            </DialogContentText>
          </DialogContent>
        </Dialog>
            </div>

            <div className="box">
         <Button id="button" onClick={this.handleClickOpen('paper')}><h2>Wellness<br></br>Programs</h2></Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis
            </DialogContentText>
          </DialogContent>
        </Dialog>
            </div>

            <div className="box">
         <Button id="button" onClick={this.handleClickOpen('paper')}><h2>Dental<br></br>Care</h2></Button>
         <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis
            </DialogContentText>
          </DialogContent>
          </Dialog>
            </div>

            <div className="box">
         <Button id="button" onClick={this.handleClickOpen('paper')}><h2>Vaccinations &<br></br>Microchipping</h2></Button>
         <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis
            </DialogContentText>
          </DialogContent>
        </Dialog>
            </div>

            <div className="box">
         <Button id="button" onClick={this.handleClickOpen('paper')}><h2>Radiology &<br></br>Ultrasound</h2></Button>
         <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis
            </DialogContentText>
          </DialogContent>
        </Dialog>
            </div>


            <div className="box">
         <Button id="button" onClick={this.handleClickOpen('paper')}><h2>Internal<br></br>Medicine</h2></Button>
         <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis
            </DialogContentText>
          </DialogContent>
        </Dialog>
            </div>


            <div className="box">
         <Button id="button" onClick={this.handleClickOpen('paper')}><h2>Surgical<br></br>Procedures</h2></Button>
         <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis
            </DialogContentText>
          </DialogContent>
        </Dialog>
            </div>
        </div>
    );
  }
}

export default ScrollDialog;