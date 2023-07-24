import { Button, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import {
    Table, TableBody, TableContainer, TableHead, TableRow, Paper, Box,
    Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, List, ListItem, ListItemIcon, ListItemText,
    Card, CardActions, CardContent, CardMedia, Accordion, AccordionSummary, AccordionDetails, Typography
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { borderRadius, textAlign } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MediaCard from '../Shared/Card'
import { connect } from "react-redux"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";
import { getFoodItemByCategory } from "../../Store/AsyncThunk/menuAsync"




const Menu2 = (props) => {
    const [finQty, setFinQty] = useState();
    const [snackItem, setSnackItem] = useState([]);
    const [dessertItem, setDessertItem] = useState([]);
    const [indianItem, setIndianItem] = useState([]);
    const [italianItem, setItalianItem] = useState([]);
    const [chineseItem, setChineseItem] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        if (props.menuItems != "" ? props.menuItems.data.user[0].category == 'Snacks' : "") {
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

        let a = 0;
        props.savedDish.length > 0 ? props.savedDish.map(row => {
            a = row.p_itemCount + a
        }) : ""
        setFinQty(a)
    }, [props.savedDish, props.menuItems])

    const handleCheckout = () => {
        navigate("/Orders");
    }

    const handleChange = (tab) => {
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
            <div className='Order'>
                <Paper
                    style={{
                        padding: "10px",
                        paddingRight: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                        backgroundColor:"#faddbd"
                    }}>
                    <Badge badgeContent={props.checkoutCount} color="success">
                        <Button
                            onClick={handleCheckout}
                            variant="contained"
                            style={{
                                backgroundColor: "#f75d10"
                            }}
                        >
                            CheckOut
                            <ShoppingCartCheckoutIcon
                                fontSize="large" />
                        </Button>    </Badge>

                </Paper>
                <Accordion
                    onChange={() => { handleChange('Snacks') }}
                    style={{
                        margin:"20px 2px 20px 2px"
                    }}
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
                    style={{
                        margin:"20px 2px 20px 2px"
                    }}
                >
                    <AccordionSummary
                        style={{
                            backgroundColor: "#e4f563"
                        }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography align="center" sx={{ width: '100%' }}>Dessert</Typography>
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
                    style={{
                        margin:"20px 2px 20px 2px"
                    }}
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
                    style={{
                        margin:"20px 2px 20px 2px"
                    }}
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
                    style={{
                        margin:"20px 2px 20px 2px"
                    }}
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
            </div >
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        savedDish: state.savedDish,
        menuItems: state.menuItems,
        checkoutCount: state.checkoutCount
    };
};

const mapDispatchToProps = {
    getFoodItemByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu2);