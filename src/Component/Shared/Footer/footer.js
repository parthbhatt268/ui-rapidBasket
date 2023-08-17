import React, { useEffect } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import './footer.css'
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import { color } from '@mui/system';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { postSubmitFeedback } from '../../../Store/AsyncThunk/userAsync'
import { connect } from "react-redux"



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Footer(props) {
    const navigate = useNavigate();
    const [toast, setToast] = React.useState({
        open: false,
        status: "",
        message: ""
    });
    const [data, setData] = React.useState({
        email: "",
        msg: ""
    })

    useEffect(() => {
        setData({
            email: "",
            msg: ""
        })
        setToast({
            open: false,
            status: "",
            message: ""
        })
    }, [])

    useEffect(() => {
        setToast({
            open: true,
            status: props.feedbackResponse.status,
            message: props.feedbackResponse?.data?.Message
        })
    }, [props.feedbackResponse])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setToast({
            ...toast,
            open: false
        })
    };

    const handleSubmit = async () => {
        if (data.email && data.msg) {
            let payload = {}
            payload.custId = localStorage.getItem("customer_id")
            payload.emailId = data.email
            payload.Message = data.msg
            await props.postSubmitFeedback(payload)
        }
        else {
            setToast({
                open: true,
                status: "error",
                message: "Please enter all mandatory Fields"
            })
        }
    }

    return (
        <div>
            {/* <Snackbar open={toast.open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={toast.status} sx={{ width: '100%' }}>
                    {toast.message}
                </Alert>
            </Snackbar> */}

            <footer className="footer" >
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>


                <Grid container spacing={2}>
                    <Grid item lg={6} xs={12}>
                        <Paper style={{
                            backgroundColor: '#ffe6c9',
                            width: "90%",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "20px",
                            justifyContent: "center",
                            padding: "5px"
                        }}>

                            Contact Details
                        </Paper>

                        <Paper elevation={0}
                            style={{
                                backgroundColor: '#ffe6c9',
                                color: "black",
                                width: "90%",
                                padding: "20px",
                                height: "auto",
                                display: "block",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "20px 0px 20px 0px"
                            }}>
                            <Paper style={{
                                width: "100%",
                            }} />
                            🏩 - Borivali, Mumbai, India
                            <Paper /><br /><br />
                            <Paper style={{
                                width: "100%",
                            }} />
                            📲 - +91-999 999 9999
                            <Paper /><br /><br />
                            <Paper style={{
                                width: "100%",
                            }} />
                            📨 - rapidbasketo@gmail.com
                            <Paper /><br /><br />

                        </Paper>


                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Paper
                            style={{
                                width: "90%",
                                padding: "5px",
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "px",
                                backgroundColor: "#ffe6c9"
                            }}>
                            Send us your feedback
                        </Paper>
                        <Paper elevation={0} style={{
                            backgroundColor: '#ffe6c9',
                            color: "White",
                            width: "90%",
                            padding: "20px",
                            height: "auto",
                            display: "block",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "20px 0px 20px 0px"
                        }}>
                            <TextField
                                onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                                value={data.email}
                                id="outlined-basic" style={{
                                    width: "100%",
                                    backgroundColor: "white"
                                }} label="Your Email ID*"
                                placeholder='Email@domain.com'
                                variant="outlined" color="secondary" />
                            <br />
                            <br />
                            <TextField
                                onChange={(e) => { setData({ ...data, msg: e.target.value }) }}
                                value={data.msg}
                                id="outlined-multiline-static"
                                label="Message*"
                                placeholder='Please enter your valuable feedback'
                                multiline
                                rows={4}
                                style={{
                                    width: "100%",
                                    backgroundColor: "white"

                                }}
                                color="secondary"
                            />
                            <br />
                            <br />

                            <Button variant='standard' style={{
                                backgroundColor: "#ff732d"
                            }}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>

                        </Paper>



                    </Grid>
                </Grid>


                <p>Copyright © 2023 All rights reserved | Rapid Basket</p>
                <p>Made with ❤️ in Mumbai, India</p>

            </footer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        savedDish: state.savedDish,
        menuItems: state.menuItems,
        checkoutCount: state.checkoutCount,
        feedbackResponse: state.feedbackResponse
    };
};

const mapDispatchToProps = {
    postSubmitFeedback
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);