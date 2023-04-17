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
                style={{
                    margin: "20px 0px 2px 0px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5caa0",
                }}>
              <b> Order Placed Successful</b>
            </Paper>
            <Paper
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
                        borderRadius: "10px",
                        alignItems: 'center',
                        height: "400px",
                        width: "453px",
                    }}
                    alt="Success image"
                    src={successImg2}
                />
            </Paper>
            <Paper
                elevation={0}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    margin: "4px 0px 20px 0px",
                    backgroundColor: "#f5caa0",
                }}>
                <Button onClick={handleNavigate} variant='contained'
                    style={{
                        backgroundColor: "#e35520"
                    }}>
                    Go To Home
                </Button>
            </Paper>

        </Paper>
    </div>
  )
}

export default SuccessScreen