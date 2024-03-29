import React from 'react'
import './style.css'
import errorImg from '../../Image/error2.png'

import { Paper,Box, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";


function ErrorScreen() {
    const navigate = useNavigate();
    const handleNavigate =()=>{
    navigate("/Home")

    }
  return (
    <div className='success'>
        <Paper>
            <Paper
                elevation={0}
                style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fc1313",
                    fontSize:"26px"
                }}>
              <b> Oops transaction got Cancelled</b>
            </Paper>
            <Paper
                elevation={0}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:"#fc1313"
                }}>
                <Box
                    component="img"
                    sx={{
                        alignItems: 'center',
                        height: "590px",
                        width: "453px",
                    }}
                    alt="Success image"
                    src={errorImg}
                />
            </Paper>
            <Paper
                elevation={0}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    backgroundColor: "#f75d10",
                    position:"fixed",
                    bottom:"0",
                    width:"110vw"
                }}>
                <Button onClick={handleNavigate} variant='contained'
                    style={{
                        backgroundColor: "#fff",
                        color:"#f75d10"
                    }}>
                    Go To Home
                </Button>
            </Paper>

        </Paper>
    </div>
  )
}

export default ErrorScreen