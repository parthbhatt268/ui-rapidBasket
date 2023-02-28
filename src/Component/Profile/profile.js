import React, { useState, useEffect } from 'react'
import './profile.css'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { padding } from '@mui/system';
import Box from '@mui/material/Box';
import { Container, FormControl, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ResponsiveAppBar from '../Shared/NavBar';
import NavBar from '../Shared/NavBar/navbar'
import Button from '@mui/material/Button';


function Profile() {
    const [showPassword, setShowPassword] = useState(false);
    const [disEdit, setDisEdit] = useState(true);
    const [profileData, setProfileData] = useState(
        {
            name: "Parth",
            email: "hello@gmail.com",
            // password: "",
            address: "Navi Mumbai, India"
        }
    )

    const handleName = (e) => {
        setProfileData(
            {
                ...profileData,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleEditButtonToggle = () => {
        setDisEdit(!disEdit)
        let payload = {}
        if (disEdit == false) {
            payload = profileData
        }
        console.log("dekho", payload)
    }
    // const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };
    return (
        <>
            <div className='profile_wrap'>
                <div className='nav_bar_profile'>
                    Your Profile
                </div>
                <Paper
                    className='profile_img'
                    style={{
                        padding: "20px",
                        margin: "20px",
                    }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4} xl={4}>
                            <div
                                className='center'
                            >
                                <Container>
                                    <Box
                                        component="img"
                                        sx={{
                                            padding: "20px",
                                            borderRadius: "1000px",
                                            border: '5px solid #ff1200',
                                            alignItems: 'center',
                                            height: 222,
                                            width: 222,
                                            maxHeight: { xs: 222, md: 222 },
                                            maxWidth: { xs: 222, md: 222 },
                                        }}
                                        alt="My image"
                                        src="\Image\default_person.png"
                                    />
                                </Container>

                            </div>
                        </Grid>
                        <Grid item xs={12} md={8} xl={8}>
                            <Paper
                                style={{
                                    height: "70vh",
                                    padding: "20px",
                                    backgroundColor: "#ffefde"
                                }}
                            >
                                <TextField
                                    required
                                    defaultValue={profileData.name}
                                    disabled={disEdit}
                                    name="name"
                                    variant='standard'
                                    onChange={(e) => { handleName(e) }}
                                />
                                <br />
                                <br />
                                <TextField
                                    required
                                    defaultValue={profileData.email}
                                    disabled={disEdit}
                                    name="email"
                                    variant='standard'
                                    onChange={(e) => { handleName(e) }}
                                />
                                <br />
                                {/* <br />
                            <FormControl variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                value={profileData.password}
                                disabled={disEdit}
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            disabled={disEdit}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <br /> */}
                                <br />
                                <TextareaAutosize
                                    defaultValue={profileData.address}
                                    name="address"
                                    disabled={disEdit}
                                    onChange={(e) => {handleName(e)}}
                                    maxRows={6}
                                    aria-label="Message"
                                    placeholder="Address..."
                                    style={{
                                        width: "250px",
                                        minHeight: "100px",
                                        backgroundColor: "transparent"
                                    }}
                                />
                                <br />
                                <Button
                                    variant='contained'
                                    onClick={handleEditButtonToggle}
                                    style={{
                                        backgroundColor: "orange"
                                    }}
                                >
                                    {disEdit ? "Edit" : "Save"}
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    )
}

export default Profile