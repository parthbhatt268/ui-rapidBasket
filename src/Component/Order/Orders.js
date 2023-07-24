import { loadStripe } from "@stripe/stripe-js";
import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Card,
  CardMedia,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import "./style.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import NoData from "../Shared/NoData";
import { postOrderDetailPayment } from "../../Store/AsyncThunk/orderAsync";
import NoOrder from "./NoOrder";
import DialogBox from "../Shared/DialogBox/DialogBox";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#faebd7",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fffbf9",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Orders = (props) => {
  const publishKey =
    "pk_test_51MqHSBSGD0NxWjnWu2dT5naINF4Qzc9FzmgnDmbkUBQrgxfUeXL28om4lMoalOElZta7TiHAnQ740nE1beSN31sM00tnoi6ny2";

  const [orderList, setOrderList] = React.useState();
  const [billAmt, setBillAmt] = React.useState();
  const [finAmt, setFinAmt] = React.useState();
  const [toggle, setToggle] = React.useState();
  const [modeofPayment, setmodeofPayment] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let a = 0;
    props.savedDish.length > 0
      ? props.savedDish.map((row) => {
          a = row.p_amount + a;
        })
      : "";
    setBillAmt(a);
    setFinAmt(a - a * (25 / 100));
  }, []);

  const handlePayment = async () => {
    let payload = {};
    let custId = localStorage.getItem("customer_id");
    payload.custId = custId;
    payload.orderDetail = props.savedDish;

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    switch (new Date().getMonth() + 1) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      case 12:
        month = "December";
    }
    let currentDate = `${day}-${month}-${year}`;
    let stripe;
    payload.orderDate = currentDate;
    if (modeofPayment === "card") {
      stripe = await loadStripe(publishKey);
    }
    props
      .postOrderDetailPayment(payload)
      .unwrap()
      .then(async (response) => {
        if (modeofPayment === "card") {
          const result = await stripe.redirectToCheckout({
            sessionId: response.id,
          });
        } else {
          navigate("/success");
        }
        if (result.error) {
        }
      });
  };

  const handlePaymentMode = (e, value) => {
    setmodeofPayment(value);
  };

  useEffect(() => {
    setToggle(true);
  }, [props.orderAck]);
  return (
    <>
      <div className="Order">
        <Paper
          sx={{
            padding: "0px 10px 10px 10px",
            background: "#ffffff",
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
                  background: "transparent ",
                }}
              >
                My Cart
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {props.savedDish.length > 0 ? (
          <>
            <Grid
              sx={{
                padding: "10px 15px 10px 15px",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Item Name</StyledTableCell>
                      <StyledTableCell align="left">
                        Item Price(₹)
                      </StyledTableCell>
                      <StyledTableCell align="left">Qty</StyledTableCell>
                      <StyledTableCell align="left">Amount (₹)</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.savedDish.length > 0 ? (
                      props.savedDish.map((row) => {
                        return (
                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              {row.p_name}
                            </StyledTableCell>
                            <StyledTableCell>₹ {row.p_price}</StyledTableCell>
                            <StyledTableCell>
                              {row.p_itemCount}
                              </StyledTableCell>
                            <StyledTableCell>₹ {row.p_amount}</StyledTableCell>
                          </StyledTableRow>
                        );
                      })
                    ) : (
                      <NoData />
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid
              sx={{
                padding: "10px 15px 10px 15px",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Billing Details</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {billAmt ? (
                      <>
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            Total Amount - {billAmt}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            Discount - 25%
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            Final Amount - {finAmt}
                          </StyledTableCell>
                        </StyledTableRow>
                      </>
                    ) : (
                      <NoData />
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid
              sx={{
                padding: "10px 15px 10px 15px",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Payment Method</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {billAmt ? (
                      <>
                        <StyledTableRow>
                          <Paper
                            sx={{
                              padding: "10px",
                            }}
                          >
                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Cash On Delivery"
                                name="radio-buttons-group"
                                value={modeofPayment}
                                onChange={handlePaymentMode}
                              >
                                <FormControlLabel
                                  value="cash"
                                  control={<Radio />}
                                  label="Cash On Delivery"
                                />
                                <FormControlLabel
                                  value="upi"
                                  disabled
                                  control={<Radio />}
                                  label="Online Payment (Not available for your Location)"
                                />
                                <FormControlLabel
                                  value="card"
                                  control={<Radio />}
                                  label="Credit/Debit Card"
                                />
                              </RadioGroup>
                            </FormControl>
                          </Paper>
                        </StyledTableRow>
                      </>
                    ) : (
                      <NoData />
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <div
              //className="footer_bar_orders"
              style={
                {
                  backgroundColor: "#f75d10",
                  position:"fixed",
                  bottom:'0',
                  width:"100vw",
                  //borderTop:"2px solid red",
                }
              }
            >
              <Button
                variant="contained"
                color="success"
                onClick={handlePayment}
                sx={{
                  padding: "10px",
                  margin: "10px",
                  //margin: "2% 10% 2% 10%"
                }}
                disabled = {modeofPayment !== "" ? false : true}
              >
                Pay Amount: {finAmt > 0 ? finAmt : 0}/-{" "}
                {finAmt > 0 ? "& Place Order" : ""}
              </Button>
            </div>
          </>
        ) : (
          <>
            <NoOrder />
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    savedDish: state.savedDish,
    loginStatus: state.loginStatus,

    orderAck: state.orderAck,
  };
};

const mapDispatchToProps = {
  postOrderDetailPayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
