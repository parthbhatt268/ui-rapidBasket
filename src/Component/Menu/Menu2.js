import { Button, Grid } from '@mui/material'
import React, { useEffect } from 'react'
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
import MediaCard from '../Card'

//import './style.css';
import { connect } from "react-redux"
import ResponsiveAppBar from '../NavBar';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';


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

const cardData = [{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
}
]

const cardData2 = [{
    image: "\\Image\\home2.png",
    name: "guva",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "noapple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
},
{
    image: "\\Image\\home2.png",
    name: "Apple",
    price: "20",
}
]

const Menu2 = (props) => {
    const [finQty, setFinQty] = React.useState();

    useEffect(() => {
        let a = 0;
        props.savedDish.length > 0 ? props.savedDish.map(row => {
            a = row.p_itemCount + a
        }) : ""
        setFinQty(a)
        console.log("update hua me")
    }, [props.savedDish])

    return (

        <>
            {console.log("Save Dish in Mune2 component", props.savedDish)}
            <ResponsiveAppBar />
            <div className='Order'>

                <Paper
                    style={{
                        padding: "10px"
                    }}>
                    <Badge badgeContent={finQty} color="success">
                        <Button
                            variant="contained">
                            CheckOut
                            <ShoppingCartCheckoutIcon
                                fontSize="large" />
                        </Button>    </Badge>

                </Paper>
                <Paper
                    elevation={3}
                    sx={{
                        backgroundColor: 'red',
                        height: '40px',
                        borderTop: '20px',
                        textAlign: 'center',
                        padding: '8px',

                    }}

                >Snacks</Paper>
                <Grid item lg={12} xs={12} container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    backgroundColor="#FF7F7F"
                >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    {cardData.map(row => {
                                        return (
                                            <TableCell>


                                                <Grid item xl={2} xs={2}>

                                                    <MediaCard
                                                        image={row.image}
                                                        name={row.name}
                                                        price={row.price}
                                                    />
                                                </Grid>
                                            </TableCell>

                                        )
                                    })}


                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
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
                >Meals</Paper>
                <Grid item lg={12} xs={12} container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    backgroundColor=" #FF7F7F"
                >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    {cardData.map(row => {
                                        return (
                                            <TableCell>
                                                <Grid item xl={2} xs={2}>

                                                    <MediaCard
                                                        image={row.image}
                                                        name={row.name}
                                                        price={row.price}
                                                    />
                                                </Grid>
                                            </TableCell>

                                        )
                                    })}


                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
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
                >Sweets</Paper>
                <Grid item lg={12} xs={12} container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    backgroundColor=" #FF7F7F"
                >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    {cardData.map(row => {
                                        return (
                                            <TableCell>
                                                <Grid item xl={2} xs={2}>

                                                    <MediaCard
                                                        image={row.image}
                                                        name={row.name}
                                                        price={row.price}
                                                    />
                                                </Grid>
                                            </TableCell>

                                        )
                                    })}


                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
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
                >Dairy Products</Paper>
                <Grid item lg={12} xs={12} container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    backgroundColor=" #FF7F7F"
                >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    {cardData.map(row => {
                                        return (
                                            <TableCell>
                                                <Grid item xl={2} xs={2}>

                                                    <MediaCard
                                                        image={row.image}
                                                        name={row.name}
                                                        price={row.price}
                                                    />
                                                </Grid>
                                            </TableCell>

                                        )
                                    })}


                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
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
                >Ice Cream and Frozen Products</Paper>
                <Grid item lg={12} xs={12} container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    backgroundColor=" #FF7F7F"
                >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    {cardData.map(row => {
                                        return (
                                            <TableCell>
                                                <Grid item xl={2} xs={2}>

                                                    <MediaCard
                                                        image={row.image}
                                                        name={row.name}
                                                        price={row.price}
                                                    />
                                                </Grid>
                                            </TableCell>

                                        )
                                    })}


                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
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

                >Drinks and Juice</Paper>

                <Grid item lg={12} xs={12} container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    backgroundColor=" #FF7F7F"
                >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    {cardData.map(row => {
                                        return (
                                            <TableCell>


                                                <Grid item xl={2} xs={2}>

                                                    <MediaCard
                                                        image={row.image}
                                                        name={row.name}
                                                        price={row.price}
                                                    />
                                                </Grid>
                                            </TableCell>

                                        )
                                    })}
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Grid>
            </div >
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        savedDish: state.testReducer.savedDish
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Menu2);