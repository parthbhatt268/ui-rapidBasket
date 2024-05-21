import React from 'react';
import { Paper, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style.css';
import CloseIcon from '@mui/icons-material/Close'; // Importing an X icon

const ErrorScreen = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/Home');
    };

    return (
        <div className='error'>
            <div className='error-content'>
                <Paper className='error-message' elevation={0} square>
                    <b>Oops, the transaction got cancelled</b>
                </Paper>
                <Box className='error-icon-container'>
                    <Box className='error-icon'>
                        <CloseIcon style={{ fontSize: '5rem' }} />
                    </Box>
                </Box>
            </div>
            <div className='error-button-container'>
                <Button
                    onClick={handleNavigate}
                    variant='contained'
                    className='error-button'
                >
                    Go To Home
                </Button>
            </div>
        </div>
    );
};

export default ErrorScreen;
