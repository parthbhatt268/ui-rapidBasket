import React, { useEffect } from "react";
import "./orderHistory1.css";
import {
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getOrderHistory } from "../../Store/AsyncThunk/orderAsync";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Card,
  CardMedia,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ffede4", //"#ffede4",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function OrderHistory1(props) {
  useEffect(() => {
    let custId = localStorage.getItem("customer_id");
    props.getOrderHistory(custId);
  }, []);

  const totalPaidCalc = (order) => {
    let initialprice = 0;
    const total = order.map(
      (currentValue) => (initialprice = initialprice + currentValue.p_amount)
    );
    return total[total.length - 1];
  };

  return (
    <>
      <div className="order_history_wrap">
        <div className="headerTitle">Order History</div>
          {props.orderHistory != ""
            ? props.orderHistory.data.user.map((row) => {
                return (
                  <>
                  <Accordion
                    style={{
                      marginBottom: "1rem",
                    }}
                  >
                    <div className="paperParent">
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <div className="orderTotaldate">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                          
                            <Paper className="parentOrderdate">
                              <Paper className="PaperOrderyearMonth">{`${row.orderDate.split("-")[0]} ${
                                row.orderDate.split("-")[1]
                              } ${row.orderDate.split("-")[2]}`}</Paper>
                              <Typography className="orderDateTypo">
                              Amount Paid - ₹{totalPaidCalc(row.orderDetail)}
                              </Typography>
                            </Paper>
                            <Typography className="typoOrderId">
                              ({row._id})
                            </Typography>
                          </div>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails style={{ width: "100%" }}>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 100 }}
                            aria-label="customized table"
                          >
                            <TableHead>
                              <TableRow>
                                <StyledTableCell>Item Name</StyledTableCell>
                                <StyledTableCell align="left">
                                  Price(₹)
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  Qty
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  Amount Paid (₹)
                                </StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {row.orderDetail.map((item) => {
                                return (
                                  <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                      {item.p_name}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      ₹ {item.p_price}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      {item.p_itemCount}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      ₹ {item.p_amount}
                                    </StyledTableCell>
                                  </StyledTableRow>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </AccordionDetails>
                    </div>
                    
                  </Accordion>
                  <div className="accrodianmobileview">
                  <Accordion
                    style={{
                      maxWidth  : "100%"
                    }}
                  >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{width : "100%"}}
                      >
                        <div className="orderTotaldate">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              width : "100%"
                            }}
                          >
                          
                            <Paper className="parentOrderdate">
                              <Paper className="PaperOrderyearMonth">{`${row.orderDate.split("-")[0]} ${
                                row.orderDate.split("-")[1]
                              } ${row.orderDate.split("-")[2]}`}</Paper>
                              <Typography className="orderDateTypo">
                              Amount Paid - ₹{totalPaidCalc(row.orderDetail)}
                              </Typography>
                              <Typography className="typoOrderId">
                              ({row._id})
                            </Typography>
                            </Paper>
                          </div>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails style={{ width: "100%" }}>
                        <TableContainer component={Paper}>
                          <Table

                          >
                            <TableHead>
                              <TableRow>
                                <StyledTableCell>Item Name</StyledTableCell>
                                <StyledTableCell align="left">
                                  Price(₹)
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  Qty
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  Amount Paid (₹)
                                </StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {row.orderDetail.map((item) => {
                                return (
                                  <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                      {item.p_name}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      ₹ {item.p_price}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      {item.p_itemCount}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      ₹ {item.p_amount}
                                    </StyledTableCell>
                                  </StyledTableRow>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </AccordionDetails>
                    
                  </Accordion>
                  </div>
                  </>
                );
              })
            : "No data found"}
      </div>

    </>
  );
}

const mapStateToProps = (state) => {
  return {
    savedDish: state.savedDish,
    loginStatus: state.loginStatus,
    orderAck: state.orderAck,
    orderHistory: state.orderHistory,
  };
};

const mapDispatchToProps = {
  getOrderHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory1);
