import React from 'react'
import './style.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <div className='header'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5} >

          <Grid item xs={12} md={7}>
            <Paper
              elevation={0} sx={{ backgroundColor: '#f8dabf' }}>
              <main className='tagLine'>
                Fastest
                Delivery <br />in
                your
                <div>Town</div>
              </main>

              <button className='orderNow'>
                Order Now
              </button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}

              sx={{
                backgroundColor: '#f8dabf'

              }}>
              <Grid container >
                <Grid item md={4}>
                  <Paper
                    sx={{
                      margin: '10px 10px 10px 10px',
                      padding: '10px 10px 10px 10px',
                      width: '140px',
                      height: '165px',
                      backgroundColor: "red",
                      borderRadius: '30px'
                    }}
                  >1
                  </Paper>
                </Grid>
                <Grid item md={4}>
                  <Paper
                    sx={{
                      margin: '10px 10px 10px 10px',
                      padding: '10px 10px 10px 10px',
                      width: '140px',
                      height: '165px',
                      backgroundColor: "red",
                      borderRadius: '30px'

                    }}>2</Paper>
                </Grid>
                <Grid item md={4}>
                  <Paper
                    sx={{
                      margin: '10px 10px 10px 10px',
                      padding: '10px 10px 10px 10px',
                      width: '140px',
                      height: '165px',
                      backgroundColor: "red",
                      borderRadius: '30px'

                    }}>3</Paper>
                </Grid>
                <Grid item md={4}>
                  <Paper
                    sx={{
                      margin: '10px 10px 10px 10px',
                      padding: '10px 10px 10px 10px',
                      width: '140px',
                      height: '165px',
                      backgroundColor: "red",
                      borderRadius: '30px'

                    }}>4</Paper>
                </Grid>
                <Grid item md={4}>
                  <Paper
                    sx={{
                      margin: '10px 10px 10px 10px',
                      padding: '10px 10px 10px 10px',
                      width: '140px',
                      height: '165px',
                      backgroundColor: "red",
                      borderRadius: '30px'

                    }}>4</Paper>
                </Grid>
                <Grid item md={4}>
                  <Paper
                    sx={{
                      margin: '10px 10px 10px 10px',
                      padding: '10px 10px 10px 10px',
                      width: '140px',
                      height: '165px',
                      backgroundColor: "red",
                      borderRadius: '30px'

                    }}>4</Paper>
                </Grid>
                
              </Grid>
            </Paper>
          </Grid>

        </Grid>
      </Box>






    </div>
  )
}

export default Home