import React from 'react'
import './Home.css';
import {Box, Paper, Grid, Button, TextField} from '@mui/material';
import ButtonBases from './tiles'
import {Card,CardActions, CardContent, CardMedia  } from '@mui/material/Card';
import { connect } from "react-redux"
import CarouselSet from './carousel'
import RecipeReviewCard from "../HomePage/Card";
import Footer from '../Shared/Footer/footer';
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    history.push("/Orders");
  }
  return (
    <>
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
                <button className='orderNow' onClick={() => { navigate("/menu") }}>
                  Order Now
                </button>
              </Paper>
            </Grid>
            {/* <ButtonBases /> */}
            <RecipeReviewCard />
          </Grid>
        </Box>
        <Footer />
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