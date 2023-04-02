import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { generateUtilityClass, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux"


function DialogBox(props) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();


  const {status, msg, okBtn, closeBtn, refreshBtn} = props 

  // useEffect(() => {
  //   // setDialogOpen(open)
  //   console.log("jjj", props.errorMsg)
  // }, [props])
  
//   Schema For Props for making Dialog Box generate (Base on below message we will conditionally create custom dioalog box)
//   {
//     open: true/ false,
//     status: success/ Error/ Rejected,
//     Message: "",
//     okayButton: true/false,
//     closeButton: true/false,
//     RefreshButton: true/false,
//   }

  useEffect(()=>{
    setOpen(true)
  },[props.errorOpen])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/Home");
  };

  const handleRedirectToHome = () => {
    setDialogOpen(false);
    history.push("/home");

  };
  

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            {props.errorStatus=='Success'?<Paper
            style={{
                backgroundColor:"green",
                height:"40px",
                width:"350px",
                margin: "-16px -24px 0 -24px",
                borderRadius:"0px",
                display:"flex",
                justifyContent:"center"
            }}>
                {props.errorStatus}!
            </Paper>:

            <Paper
            style={{
                backgroundColor:"red",
                height:"40px",
                width:"350px",
                margin: "-16px -24px 0 -24px",
                borderRadius:"0px",
                display:"flex",
                justifyContent:"center"
            }}>
                {props.errorStatus}!
            </Paper>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {props.errorMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      savedDish: state.savedDish,
      menuItems: state.menuItems,
      errorOpen: state.errorOpen,
      errorMsg: state.errorMsg,
      errorStatus: state.errorStatus
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);