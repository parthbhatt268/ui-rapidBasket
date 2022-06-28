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
import { borderRadius } from '@mui/system';

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
    backgroundColor:"#ffecdb",
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
  createData('Frozen ', 159, 6.0, 24, 4.0),
  createData('Ice ', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Orders = () => {
  return (
    <div>
      <Paper
          sx={{
            padding :"10px 10px 10px 10px" 
          }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
        
            <Paper
              sx={{
                height:"45px",
                textAlign:"start",
                padding:"20px 0px 0px 20px"
              }}>Place order</Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper>image</Paper>
          </Grid>
        </Grid>
      </Paper>
      <Grid
      sx={{
        padding: "10px 10px 10px 10px",
        borderRadius:"10px"

      }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sr.</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Qty</StyledTableCell>
                <StyledTableCell align="right">Price&nbsp;(₹)</StyledTableCell>
                {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Box>
        <Paper
          sx={{
            height: "123px",
            margin: "10px",
            padding: "10px 0px 10px 0px",
            width: "350px",
            backgroundColor: "#f37806",
            borderRadius: "10px",
            color:"white"
          }}>
          Payment Details
          <Paper elevation={0}
            sx={{
              borderRadius: "0px"
            }}>
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
            height: "145px",
            margin: "10px",
            padding: "10px 0px 10px 0px",
            width: "350px",
            backgroundColor: "#f37806",
            borderRadius: "10px",
            color:"white"
          }}>
            Payment Method <br/>
            <Paper
         >
            
            
           
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
        <Button
          sx={{
            backgroundColor: "Green",
            color:"white"
          }}>
          PLace Order
        </Button>
      
    </Box>
    </div >
  )
}

export default Orders