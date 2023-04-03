import React from 'react'
import { Button, Paper } from '@mui/material'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import NoOrderImg from "../../Image/orangeCat.png"


function NoOrder() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/menu");
    }
    return (
        <Paper>
            <Paper
                elevation={0}
                style={{
                    margin: "20px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5caa0",
                }}>
               Your Cart is empty Please select Item from Menu
            </Paper>
            <Paper
                elevation={0}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Box
                    component="img"
                    sx={{
                        borderRadius: "10px",
                        alignItems: 'center',
                        height: "400px",
                        width: "453px",
                    }}
                    alt="My image"
                    src={NoOrderImg}
                />
            </Paper>
            <Paper
                elevation={0}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    margin: "20px",
                    backgroundColor: "#f5caa0",
                }}>
                <Button onClick={handleNavigate} variant='contained'
                    style={{
                        backgroundColor: "#e35520"
                    }}>
                    Go To Menu
                </Button>
            </Paper>

        </Paper>
    )
}

export default NoOrder