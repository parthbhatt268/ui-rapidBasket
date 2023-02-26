import React from 'react'
import { Button, Paper } from '@mui/material'
import Box from '@mui/material/Box';
import { padding } from '@mui/system';
import { useNavigate } from "react-router-dom";


function NotFound() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/Home");
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
                404 - Page Not Found
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
                        width: "333px",
                    }}
                    alt="My image"
                    src="Image\404.png"
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
                    GO Back To Home
                </Button>
            </Paper>

        </Paper>
    )
}

export default NotFound