import React, { useEffect } from 'react'
import './orderHistory.css'
import { Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getOrderHistory } from "../../Store/AsyncThunk/orderAsync"
import { connect } from "react-redux"
import { Table, TableBody, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Card, CardMedia } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

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




function OrderHistory(props) {


  useEffect(() => {
    let custId = '12345678901' //currently harded boz code pull nai liya jisme custID store hua hai
    props.getOrderHistory(custId)
  }, [])


  return (
    <>
      <div className='order_history_wrap'>
        <div className='nav_bar'>
          Your Order History
        </div>
        <Paper
          style={{
            margin: "20px"
          }}>
          <div>
            {props.orderHistory != "" ? props.orderHistory.data.user.map(row => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{row.orderDate} : Order Id - ({row._id})</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 100 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Item Name</StyledTableCell>
                            <StyledTableCell align="left">Price(₹)</StyledTableCell>
                            <StyledTableCell align="left">Qty</StyledTableCell>
                            <StyledTableCell align="left">Amount Paid (₹)</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>

                          {

                            row.orderDetail.map(item => {
                              return (
                                <StyledTableRow >
                                  <StyledTableCell component="th" scope="row">
                                    {item.p_name}
                                  </StyledTableCell>
                                  <StyledTableCell >₹ {item.p_price}
                                  </StyledTableCell>
                                  <StyledTableCell>{item.p_itemCount}
                                  </StyledTableCell>
                                  <StyledTableCell>₹ {item.p_amount}
                                  </StyledTableCell>
                                </StyledTableRow>
                              )
                            })
                          }



                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              )
            }) : "No data found"
            }
          </div>
        </Paper>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    savedDish: state.savedDish,
    loginStatus: state.loginStatus,
    orderAck: state.orderAck,
    orderHistory: state.orderHistory
  };
};

const mapDispatchToProps = {
  getOrderHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);