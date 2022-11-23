import { Button, Grid } from '@mui/material'
import React from 'react'
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
import ResponsiveAppBar from '../NavBar';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('11 ', 159, 6.0, 24, 4.0),
  createData('Ice ', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('1', 356, 16.0, 49, 3.9),
];


const Orders = (props) => {
  return (

    <>
    <ResponsiveAppBar/>
    <div className='Order'>

      <Paper
        sx={{
          padding: "10px 10px 10px 10px"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={10}>

            <Paper
              sx={{
                height: "45px",
                textAlign: "start",
                padding: "12px 0px 0px 5px",
                margin: "1px",
                fontSize: "20px"
              }}>My Cart</Paper>
          </Grid>
          <Grid item xs={6} md={2}>
            <Card>
              <CardMedia
                component="img"
                image="\Image\logo.png"
                alt="green"
                height="100px"
                width="1000px"
              />
            </Card>


          </Grid>
        </Grid>
      </Paper>
      <Grid
        sx={{
          padding: "10px 10px 10px 10px",
          borderRadius: "10px"

        }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Item Name</StyledTableCell>
                <StyledTableCell align="left">Item Price(₹)</StyledTableCell>
                <StyledTableCell align="left">Qty</StyledTableCell>
                <StyledTableCell align="left">Amount (₹)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                <StyledTableRow >
                  <StyledTableCell component="th" scope="row">
                    {/* {props.savedDish.p_name} */}check first if empty or not is empty thrn show "plz select some item " and if order then show it
                    {console.log("mall", props.savedDish)}
                  </StyledTableCell>
                  <StyledTableCell align="left">₹ Second</StyledTableCell>
                  
                  <StyledTableCell align="left">Third</StyledTableCell>
                  <StyledTableCell align="left">₹ fourth</StyledTableCell>
                </StyledTableRow>
              
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Box>
        <Paper
          sx={{

            margin: "10px",
            padding: "10px 0px 0px 0px",
            width: "45%",
            backgroundColor: "#f37806",
            borderRadius: "5px",
            color: "white"
          }}>
          Payment Details

          <Paper elevation={0}
            sx={{
              borderRadius: "0px",
              padding: "10px"
            }}>
            {/* 
            <ul>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
            </ul> */}
            <Grid container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-Start"
            >
              <Grid item
                margin={"5px"}
                padding={"2px"}
              >
                MRP Total :  30000 <br />
              </Grid>

              <Grid item
                margin={"5px"}
                padding={"2px"}
              >
                Discount :  -4000<br />
              </Grid>

              <Grid item
                margin={"5px"}
                padding={"2px"}
              >
                Final Amt : 26000
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Box>
      <Box>
        <Paper
          sx={{
            margin: "10px",
            padding: "10px 0px 0px 0px",
            width: "45%",
            backgroundColor: "#f37806",
            borderRadius: "5px",
            color: "white"
          }}>
          Payment Method <br />
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
                <FormControlLabel value="male" disabled control={<Radio />} label="Online Payment " />
                <FormControlLabel value="other" disabled control={<Radio />} label="Credit/Debit Card" />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Paper>

      </Box>
      <Box>
        <Paper fullwidth
          style={{
            backgroundColor: "Orange"
          }}
        >

          <Button
            variant="contained" color="success"
            sx={{
              margin: "2% 10% 2% 10%"
            }}>
            Pay Amount: 2000/- & Place Order
          </Button>
        </Paper>

      </Box>
    </div >
    </>

  )
}

const mapStateToProps = (state) => {
    return {
        savedDish:state.testReducer.savedDish
    };
};

const mapDispatchToProps = {
  
};

export default  connect(mapStateToProps, mapDispatchToProps)(Orders);