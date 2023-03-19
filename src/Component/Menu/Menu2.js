import { Button, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MediaCard from '../Shared/Card'
//import './style.css';
import { connect } from "react-redux"
import ResponsiveAppBar from '../Shared/NavBar';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import NavBar from '../Shared/NavBar/navbar'
import { useNavigate } from "react-router-dom";
import { getFoodItemByCategory } from "../../Store/AsyncThunk/userAsync"


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
    const [finQty, setFinQty] = useState();

    const [snackItem, setSnackItem] = useState([]);
    const [dessertItem, setDessertItem] = useState([]);
    const [indianItem, setIndianItem] = useState([]);
    const [italianItem, setItalianItem] = useState([]);
    const [chineseItem, setChineseItem] = useState([]);

    const navigate = useNavigate();

    // // useEffect(() => {
    // // props.getFoodItemByCategory({ category: "Snacks" })

    // // }, [props])

    useEffect(() => {
        if (props.menuItems != "" ? props.menuItems.data.user[0].category == 'Snacks' : "") {
            console.log("alone here")
            setSnackItem(props.menuItems.data.user)
        }
        if (props.menuItems != "" ? props.menuItems.data.user[0].category == 'Dessert' : "") {
            setDessertItem(props.menuItems.data.user)
        }
        if (props.menuItems != "" ? props.menuItems.data.user[0].category == 'Indian' : "") {
            setIndianItem(props.menuItems.data.user)
        }
        if (props.menuItems != "" ? props.menuItems.data.user[0].category == 'Italian' : "") {
            setItalianItem(props.menuItems.data.user)
        }
        if (props.menuItems != "" ? props.menuItems.data.user[0].category == 'Chinese' : "") {
            setChineseItem(props.menuItems.data.user)
        }

    }, [props.menuItems])


    useEffect(() => {
        let a = 0;
        props.savedDish.length > 0 ? props.savedDish.map(row => {
            a = row.p_itemCount + a
        }) : ""
        setFinQty(a)
        console.log("update hua me")
    }, [props.savedDish])

    const handleCheckout = () => {
        navigate("/Orders");
    }

    const handleChange = (tab) => {
        console.log("tab clicked ", tab)
        console.log("Props.MenuItem ", props.menuItems)
        console.log("s", snackItem)
        console.log("d", dessertItem)
        console.log("I", indianItem)

        if (tab == 'Snacks' && snackItem.length == 0) {
            props.getFoodItemByCategory({ category: "Snacks" })
        }
        else if (tab == 'Dessert' && dessertItem.length == 0) {
            props.getFoodItemByCategory({ category: "Dessert" })
        }
        else if (tab == 'Indian' && indianItem.length == 0) {
            props.getFoodItemByCategory({ category: "Indian" })
        }
        else if (tab == 'Italian' && italianItem.length == 0) {
            props.getFoodItemByCategory({ category: "Italian" })
        }
        else if (tab == 'Chinese' && chineseItem.length == 0) {
            props.getFoodItemByCategory({ category: "Chinese" })
        }
    }
    return (

        <>
            {console.log("Save Dish in Menu2 component", props.savedDish)}
            <div className='Order'>
                <Paper
                    style={{
                        padding: "10px",
                        paddingRight: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right"
                    }}>
                    <Badge badgeContent={finQty} color="success">
                        <Button
                            onClick={handleCheckout}
                            variant="contained"
                            style={{
                                backgroundColor: "#e35520"
                            }}
                        >
                            CheckOut
                            <ShoppingCartCheckoutIcon
                                fontSize="large" />
                        </Button>    </Badge>

                </Paper>
                <Accordion
                    onChange={() => { handleChange('Snacks') }}
                >
                    <AccordionSummary
                        style={{
                            backgroundColor: "orange"
                        }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography align="center" sx={{ width: '100%' }}>Snacks</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{
                            backgroundColor: "#f3d4c5"
                        }}>
                        <Grid item lg={12} xs={12} container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            backgroundColor="#fff2da"
                        >
                            {snackItem.length > 0 ? <TableContainer component={Paper} style={{
                                backgroundColor: "transparent"
                            }}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            {snackItem.map(row => {
                                                return (
                                                    <TableCell>


                                                        <Grid item xl={2} xs={2}>

                                                            <MediaCard
                                                                image={row.photo}
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
                            </TableContainer> : "Preparing Your Food Item"}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    onChange={() => { handleChange('Dessert') }}
                >
                    <AccordionSummary
                    style={{
                        backgroundColor: "#e4f563"
                    }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography align="center" sx={{ width: '100%' }}>Dessert and Drinks</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item lg={12} xs={12} container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            backgroundColor="#FF7F7F"
                        >
                            {dessertItem.length > 0 ? <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            {dessertItem.map(row => {
                                                return (
                                                    <TableCell>


                                                        <Grid item xl={2} xs={2}>

                                                            <MediaCard
                                                                image={row.photo}
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
                            </TableContainer> : "Preparing Your Food Item"}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    onChange={() => { handleChange('Indian') }}
                >
                    <AccordionSummary
                    style={{
                        backgroundColor: "#34f9b1"
                    }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography align="center" sx={{ width: '100%' }}>Indian Cuisine</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item lg={12} xs={12} container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            backgroundColor="#FF7F7F"
                        >
                            {indianItem.length > 0 ? <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            {indianItem.map(row => {
                                                return (
                                                    <TableCell>


                                                        <Grid item xl={2} xs={2}>

                                                            <MediaCard
                                                                image={row.photo}
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
                            </TableContainer> : "Preparing Your Food Item"}
                        </Grid>
                    </AccordionDetails>
                </Accordion>


                <Accordion
                    onChange={() => { handleChange('Italian') }}
                >
                    <AccordionSummary
                    style={{
                        backgroundColor: "#00fff5"
                    }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography align="center" sx={{ width: '100%' }}>Italian Cuisine</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item lg={12} xs={12} container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            backgroundColor="#FF7F7F"
                        >
                            {italianItem.length > 0 ? <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            {italianItem.map(row => {
                                                return (
                                                    <TableCell>


                                                        <Grid item xl={2} xs={2}>

                                                            <MediaCard
                                                                image={row.photo}
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
                            </TableContainer> : "Preparing Your Food Item"}
                        </Grid>
                    </AccordionDetails>
                </Accordion>


                <Accordion
                    onChange={() => { handleChange('Chinese') }}
                >
                    <AccordionSummary
                    style={{
                        backgroundColor: "#f884af"
                    }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography align="center" sx={{ width: '100%' }}>Chinese Cuisine</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item lg={12} xs={12} container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            backgroundColor="#FF7F7F"
                        >
                            {chineseItem.length > 0 ? <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            {chineseItem.map(row => {
                                                return (
                                                    <TableCell>


                                                        <Grid item xl={2} xs={2}>

                                                            <MediaCard
                                                                image={row.photo}
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
                            </TableContainer> : "Preparing Your Food Item"}
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* <Paper
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
                </Grid> */}
            </div >
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        savedDish: state.savedDish,
        menuItems: state.menuItems
    };
};

const mapDispatchToProps = {
    getFoodItemByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu2);