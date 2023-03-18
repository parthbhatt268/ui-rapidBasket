import React, { useState } from 'react'
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
import ResponsiveAppBar from '../Shared/NavBar';
//import {} from "../ReduxStore/Actions/itemAction"
//import store from "../ReduxStore/ReduxStore"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom";
import NavBar from '../Shared/NavBar/navbar'
import CarouselSet from './carousel'
import Loading from '../Shared/Loading/Loading';

const Home = (props) => {
  const navigate = useNavigate();
  const [loadState, setLoadState] = useState(false)

  const handleOrder = () => {
    setLoadState(!loadState)
    //navigate("/ORDERS");
  }
  return (
    <>
    {loadState&&<Loading/>}
      <div className='Home'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5} >

            <Grid item xs={12} md={7}>
              <Paper
                elevation={0} sx={{ backgroundColor: 'transparent' }}>
                    <div class="wrapper">
                    <ul class="dynamic-txts">
                      <li><span>Fastest </span></li>
                      <li><span>Tastiest </span></li>
                      <li><span>Healthiest </span></li>
                      <li><span>Fresh </span></li>
                      <li><span>Fresh </span></li>
                    </ul>
                  </div>
                <div className='tagLine'>
                  Food delivery in your Town
                </div>

                <button className='orderNow' onClick={handleOrder}>
                  Order Now
                </button>
              </Paper>
            </Grid>
            <Grid>

              {/* <img src="Image/DeliveryMan.gif" alt="Delivery Man Logo"
                style={{
                  height: "300px",
                  width: "350px",
                  margin: "20px",
                  borderRadius: "10px",
                  backgroundColor: "yellow"

                }} /> */}

            </Grid>
                

            <ButtonBases />

          </Grid>
        </Box>
        <Paper elevation={0}
                style={{
                  height:"80px",
                  backgroundColor:'transparent'
                }}>
                </Paper>
                {/* <CarouselSet/> */}

      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    fruit: state.fruit
  };
};

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(Home);