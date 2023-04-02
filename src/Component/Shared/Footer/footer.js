import React from 'react'
import { Button, Grid } from '@mui/material'
import './footer.css'
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';

function Footer() {
    const navigate = useNavigate();

    return (
        <div>
            <footer className="footer" >
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
{/* 
                <footer className="footer">
                    <div className="footer-left col-md-4 col-sm-6">
                        <p className="about">
                            <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                            ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                        </p>
                        <div className="icons">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-google-plus"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="footer-center col-md-4 col-sm-6">
                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span> Street name and number</span> City, Country</p>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <p> (+00) 0000 000 000</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="#"> office@company.com</a></p>
                        </div>
                    </div>
                    <div className="footer-right col-md-4 col-sm-6">
                        <h2> Company<span> logo</span></h2>
                        <p className="menu">
                            <a href="#"> Home</a> |
                            <a href="#"> About</a> |
                            <a href="#"> Services</a> |
                            <a href="#"> Portfolio</a> |
                            <a href="#"> News</a> |
                            <a href="#"> Contact</a>
                        </p>
                        <p className="name"> Company Name &copy; 2016</p>
                    </div>
                </footer> */}
                
                <Grid container spacing={2}>
                    <Grid item lg={3} xs={6}>
                        <Paper elevation={0}
                            style={{
                                backgroundColor: "transparent"
                            }}>
                            <li className="menu__item"><Button style={{
                                fontSize: "1.2rem",
                                color: "#fff",
                                display: "inline-block",
                                transition: "0.5s",

                            }} className="menu__link" onClick={() => { navigate("/home") }}>Home</Button></li>

                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <Paper elevation={0}
                            style={{
                                backgroundColor: "transparent"
                            }}> <li className="menu__item"><Button style={{
                                fontSize: "1.2rem",
                                color: "#fff",
                                display: "inline-block",
                                transition: "0.5s",

                            }} className="menu__link" onClick={() => { navigate("/,menu") }}>Menu</Button></li>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <Paper
                            elevation={0}
                            style={{
                                backgroundColor: "transparent"
                            }}>
                            <li className="menu__item"><Button style={{
                                fontSize: "1.2rem",
                                color: "#fff",
                                display: "inline-block",
                                transition: "0.5s",

                            }} className="menu__link" onClick={() => { navigate("/orders") }}>Orders</Button></li>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <Paper
                            elevation={0}
                            style={{
                                backgroundColor: "transparent"
                            }}
                        >
                            <li className="menu__item"><Button style={{
                                fontSize: "1.2rem",
                                color: "#fff",
                                display: "inline-block",
                                transition: "0.5s",

                            }} className="menu__link" onClick={() => { navigate("/about") }}>About_Us</Button></li>

                        </Paper>
                    </Grid>
                </Grid>


                <p>Rapid Basket</p>

            </footer>
        </div>
    )
}

export default Footer