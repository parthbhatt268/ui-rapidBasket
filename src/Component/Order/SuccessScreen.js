import React from 'react';
import { Paper, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import successImg from '../../Image/successBG.gif';
import './style.css';

const SuccessScreen = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/Home');
    };

    return (
        <div className='success'>
            <div className='success-content'>
                <Paper className='success-message' elevation={0} square>
                    <b>Order Placed Successfully</b>
                </Paper>
                <Box className='success-image-container' square>
                    <img
                        className='success-image'
                        alt='Success image'
                        src={successImg}
                    />
                </Box>
            </div>
            <div className='success-button-container'>
                <Button
                    onClick={handleNavigate}
                    variant='contained'
                    className='success-button'
                >
                    Go To Home
                </Button>
            </div>
        </div>
    );
};

export default SuccessScreen;
