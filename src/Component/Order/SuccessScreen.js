import React from 'react'
import './style.css'
import successImg from '../../Image/successBG.gif'
import successImg1 from '../../Image/successBG2.gif'
import successImg2 from '../../Image/successBG3.gif'

import { Paper,Box, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";


function SuccessScreen() {
    const navigate = useNavigate();
    const handleNavigate =()=>{
    navigate("/Home")

    }
  return (
    <div className='success'>
        <Paper>
            <Paper
                elevation={0}
                square
                style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#4bb543",
                    fontSize:"28px"
                }}>
              <b> Order Placed Successfully</b>
            </Paper>
            <Paper
            square
                elevation={0}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:"#4BB543"
                }}>
                <Box
                
                    component="img"
                    sx={{
                        backgroundColor:"f75d10",
                        alignItems: 'center',
                        height: "570px",
                        width: "50%",
                        marginTop:"-100px"
                    }}
                    alt="Success image"
                    src={successImg2}
                />
            </Paper>
            <div
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
            </div>

        </Paper>
    </div>
  )
}

export default SuccessScreen