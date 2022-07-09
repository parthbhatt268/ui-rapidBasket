import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { borderTop, textAlign } from '@mui/system';
import MediaCard from './Card'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import { connect } from "react-redux"

const Menu = (props) => {
  return (
    <div>
      <Grid
      justifyContent={'flex-end'}>
      
        <Button
         variant="contained">
          CheckOut 
        <ShoppingCartCheckoutIcon
        fontSize = "large"/>

        </Button>

      
      </Grid>

      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'red',
          height: '40px',
          borderTop: '20px',
          textAlign: 'center',
          padding: '8px',

        }}

      >Asian Food</Paper>

      <Grid item lg={12} xs={12} container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor=" #FF7F7F"
       >

        <Grid item xl={2} xs={2}>
          {/* <Paper
          elevation={3}
          sx={{
            backgroundColor: 'red',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}
          >1.1</Paper> */}
          <MediaCard 
          image="\Image\home2.png"
          name="Apple"
          price="20"
          qty = " "
          />
        </Grid>
        <Grid item xl={2} xs={2}>
         
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>

        </Grid>
        <Grid item xl={2} xs={2}>
        <MediaCard
          image = "\Image\home2.png"
          name="Grapes"
          price="40"/>
        </Grid>
        <Grid item xl={2} xs={2}>
        <MediaCard
          image = "\Image\home2.png"
          name="Jack"
          price="40"/>
        </Grid>
        <Grid item xl={2} xs={2}>
        <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
        </Grid>
        <Grid item xl={2} xs={2}>
        <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
        </Grid>

      </Grid>

      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'Yellow',
          height: '40px',
          borderTop: '20px',
          textAlign: 'center',
          padding: '8px',

        }}

      >Snacks & Beverages</Paper>

      <Grid item lg={12} xs={12}>
        <Grid item lg={12} xs={12} container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          backgroundColor=" #FFFFE0">

          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>

        </Grid>
      </Grid>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'purple',
          height: '40px',
          borderTop: '20px',
          textAlign: 'center',
          padding: '8px',

        }}

      >Packed Food</Paper>
      <Grid item lg={12} xs={12}>
        <Grid item lg={12} xs={12} container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          backgroundColor=" #FFFFE0">


          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>

        </Grid>
      </Grid>

      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'red',
          height: '40px',
          borderTop: '20px',
          textAlign: 'center',
          padding: '8px',

        }}

      >Fruits</Paper>
      <Grid item lg={12} xs={12}>
        <Grid item lg={12} xs={12} container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          backgroundColor=" #FF7F7F">


          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>

        </Grid>
      </Grid>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'green',
          height: '40px',
          borderTop: '20px',
          textAlign: 'center',
          padding: '8px',

        }}

      >Vegetables</Paper>
      <Grid item lg={12} xs={12}>
        <Grid item lg={12} xs={12} container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          backgroundColor=" #FF7F7F">


          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>

        </Grid>
      </Grid>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'Blue',
          height: '40px',
          borderTop: '20px',
          textAlign: 'center',
          padding: '8px',

        }}

      >Ice Cream and Dairy Product {console.log(props.savedDish)}
      </Paper>
      <Grid item lg={12} xs={12}>
        <Grid item lg={12} xs={12} container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          backgroundColor=" #FF7F7F">


          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <MediaCard
          image = "\Image\home2.png"
          name="Mango"
          price="40"/>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      savedDish:state.testReducer.savedDish
  };
};

const mapDispatchToProps = {
  
};


export default connect(mapStateToProps, mapDispatchToProps)(Menu);