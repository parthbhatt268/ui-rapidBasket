import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import {Table, TableBody, TableContainer, TableHead, TableRow, Paper, Radio, RadioGroup, 
  FormControlLabel, FormControl, FormLabel, Card, CardMedia} from '@mui/material';
  import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import './style.css';
import { connect } from "react-redux"
import { useEffect } from 'react';
import NoData from '../Shared/NoData';
import cartLogo from "../../Image/logo.png";
import {postOrderDetailPayment} from "../../Store/AsyncThunk/orderAsync"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f5bd89",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#fff4f1",
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

  const handlePayment = () => {
    let payload = {}
    payload.custId = "12345678" //filhal hard coded hai boz phele hummne login or register pe local me custId staore karna hoga fir next time se yaha se custID fetch karke yaha send karenge
    payload.orderDetail = props.savedDish
    console.log("aya kya ander")
    props.postOrderDetailPayment(payload)

  }
  return (

    <>
      <div className='Order'>

        <Paper
          sx={{
            padding: "10px 10px 10px 10px"
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={10} md={10} lg={11}>
              <Paper
              elevation={0}
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
                  image={cartLogo}
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

                {console.log("hhh", props.savedDish, props.loginStatus)}{
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



        <div 
        className='footer_bar_orders'
        style={{

          //backgroundColor: "orange",
          //borderTop:"2px solid red",
         

        }}>

          <Button
            variant="contained" color="success"
            onClick={handlePayment}
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
    savedDish: state.savedDish,
    loginStatus: state.loginStatus
  };
};

const mapDispatchToProps = {
  postOrderDetailPayment

};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);