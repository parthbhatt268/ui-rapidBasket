import React from 'react'
import './homeStyle.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBases from './tiles'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, TextField } from '@mui/material';
//import {} from "../ReduxStore/Actions/itemAction"
//import store from "../ReduxStore/ReduxStore"
import { connect } from "react-redux"

const Home = (props) => {
  return (
    <div className='header'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5} >

          <Grid item xs={12} md={7}>
            <Paper

              elevation={0} sx={{ backgroundColor: 'transparent' }}>
              <main className='tagLine'>
                Fastest Food <br />
                Delivery in
                your
                <div>Town</div>
              </main>

              <button className='orderNow'>
                Order Now
              </button>
            </Paper>
          </Grid>
          <Grid>

            <img src="Image/deliveryMan.png" alt="Delivery Man Logo"
              style={{
                height: "350px",
                width: "350px",
                margin: "20px",
                borderRadius: "20%",
                backgroundColor: "yellow"

              }} />

          </Grid>

          {/* <Grid item xs={12} md={5}>
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
                  >complex button in mui check it
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
          </Grid> */}
          <ButtonBases />

        </Grid>
      </Box>

      <TextField
        value={props.fruit}
        id="standard-basic" label="Standard" variant="standard" />

    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    fruit: state.testReducer.fruit
  };
};

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(Home);