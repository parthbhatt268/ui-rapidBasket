import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { generateUtilityClass, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";


function DialogBox(props) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const navigate = useNavigate();


  const {open, status, msg, okBtn, closeBtn, refreshBtn} = props 

  useEffect(() => {
    setDialogOpen(open)
  }, [props])
  
//   Schema For Props for making Dialog Box generate (Base on below message we will conditionally create custom dioalog box)
//   {
//     open: true/ false,
//     status: success/ Error/ Rejected,
//     Message: "",
//     okayButton: true/false,
//     closeButton: true/false,
//     RefreshButton: true/false,
//   }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleRedirectToHome = () => {
    setDialogOpen(false);
    history.push("/home");

  };
  

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            {status=='Success'?<Paper
            style={{
                backgroundColor:"green",
                height:"40px",
                width:"240px",
                margin: "-16px -24px 0 -24px",
                borderRadius:"0px",
                display:"flex",
                justifyContent:"center"
            }}>
                {status}!
            </Paper>:

            <Paper
            style={{
                backgroundColor:"red",
                height:"40px",
                width:"240px",
                margin: "-16px -24px 0 -24px",
                borderRadius:"0px",
                display:"flex",
                justifyContent:"center"
            }}>
                {status}!
            </Paper>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {okBtn &&<Button onClick={handleClose}>Okay</Button>}
          {closeBtn &&<Button onClick={handleClose}>Close</Button>}
          {refreshBtn &&<Button onClick={handleRedirectToHome}>Refresh</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogBox;