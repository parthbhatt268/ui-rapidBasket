import React from 'react'
import './Home.css';
import { Box, Paper, Grid, Button, TextField } from '@mui/material';
import { connect } from "react-redux"
import RecipeReviewCard from "./Card";
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
              <Paper
                elevation={0} sx={{
                  backgroundColor: 'transparent',
                  paddingTop:"50px", 
                  height: "450px",
                }}>
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
            <RecipeReviewCard />
        <Footer />
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