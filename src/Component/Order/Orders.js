import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { borderRadius, textAlign } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './style.css';
import { connect } from "react-redux"
import ResponsiveAppBar from '../Shared/NavBar';
import { useEffect } from 'react';
import NoData from '../Shared/NoData';
import Badge from '@mui/material/Badge';
import NavBar from '../Shared/NavBar/navbar'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f37806",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#ffecdb",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const Orders = (props) => {
  const [orderList, setOrderList] = React.useState();
  const [billAmt, setBillAmt] = React.useState();
  const [finAmt, setFinAmt] = React.useState();


  useEffect(() => {
    let a = 0;
    props.savedDish.length > 0 ? props.savedDish.map(row => {
      a = row.p_amount + a
    }) : ""
    setBillAmt(a)
    setFinAmt(a - a * (25 / 100))
  }, [])
  return (

    <>
      <NavBar />
      <div className='Order'>

        <Paper
          sx={{
            padding: "10px 10px 10px 10px"
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={10} md={10} lg={11}>
              <Paper
                sx={{
                  height: "45px",
                  textAlign: "start",
                  padding: "12px 0px 0px 5px",
                  margin: "0px",
                  fontSize: "20px",
                  background: "transperant"
                }}>My Cart</Paper>
            </Grid>
            <Grid item xs={2} md={2} lg={1}>
              <Card>
                <CardMedia
                  component="img"
                  image="\Image\logo.png"
                  alt="green"
                  height="50px"
                //width="400px"
                />
              </Card>
            </Grid>
          </Grid>
        </Paper>
        <Grid
          sx={{
            padding: "10px 15px 10px 15px",
            borderRadius: "10px",
            marginRight: "20px"


          }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Item Name</StyledTableCell>
                  <StyledTableCell align="left">Item Price(₹)</StyledTableCell>
                  <StyledTableCell align="left">Qty</StyledTableCell>
                  <StyledTableCell align="left">Amount (₹)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {console.log("hhh", props.savedDish)}{
                  props.savedDish.length > 0 ? props.savedDish.map(row => {
                    return (
                      <StyledTableRow >
                        <StyledTableCell component="th" scope="row">
                          {row.p_name}
                        </StyledTableCell>
                        <StyledTableCell >₹ {row.p_price}
                        </StyledTableCell>
                        <StyledTableCell>{row.p_itemCount}
                        </StyledTableCell>
                        <StyledTableCell>₹ {row.p_amount}
                        </StyledTableCell>
                      </StyledTableRow>
                    )
                  }) : <NoData />
                }


              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
          sx={{
            padding: "10px 15px 10px 15px",
            borderRadius: "10px",
            marginRight: "20px"


          }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Billing Details</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  billAmt ?
                    <>
                      <StyledTableRow >
                        <StyledTableCell component="th" scope="row">
                          Total Amount - {billAmt}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow >
                        <StyledTableCell component="th" scope="row">
                          Discount - 25%
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow >
                        <StyledTableCell component="th" scope="row">
                          Final Amount - {finAmt}
                        </StyledTableCell>
                      </StyledTableRow>
                    </>
                    : <NoData />
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid
          sx={{
            padding: "10px 15px 10px 15px",
            borderRadius: "10px",
            marginRight: "20px"

          }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Payment Method</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  billAmt ?
                    <>
                      <StyledTableRow >
                        <Paper
                          sx={{
                            padding: "10px"
                          }}>
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="Cash On Delivery"
                              name="radio-buttons-group"
                            >
                              <FormControlLabel value="female" control={<Radio />} label="Cash On Delivery" />
                              <FormControlLabel value="male" disabled control={<Radio />} label="Online Payment (Not available for your Location)" />
                              <FormControlLabel value="other" disabled control={<Radio />} label="Credit/Debit Card (Not available for your Location)" />
                            </RadioGroup>
                          </FormControl>
                        </Paper>
                      </StyledTableRow>
                    </>
                    : <NoData />
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>



        <div style={{

          backgroundColor: "orange",
          //borderTop:"2px solid red",
          position: "fixed",
          width: "100%",
          height: "80px",
          bottom: "0",
          //top:"0",
          color: "white",
          fontSize: "25px",
          display: "flex",
          justifyContent: "center",

        }}>

          <Button
            variant="contained" color="success"
            sx={{
              padding: "10px",
              margin: "10px"
              //margin: "2% 10% 2% 10%"
            }}>
            Pay Amount: {finAmt > 0 ? finAmt : 0}/- {finAmt > 0 ? "& Place Order" : ""}
          </Button>
        </div>





      </div >
    </>

  )
}

const mapStateToProps = (state) => {
  return {
    savedDish: state.savedDish
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);