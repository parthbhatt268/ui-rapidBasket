import React from 'react'
import './style.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import StarIcon from '@mui/icons-material/Star';
import AppleIcon from '@mui/icons-material/Apple';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { color, width } from '@mui/system';
import { Container, FormControl, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AboutPerformance from './AboutPerformance';
import ResponsiveAppBar from '../Shared/NavBar';
import NavBar from '../Shared/NavBar/navbar'




// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const About = () => {
  return (
    <>
      <main
        className='Header'>

        <Paper
          style={{
            marginTop: "15px",
            backgroundColor: "transparent"
          }}>
          <Grid container spacing={2}>


            <Grid item xs={12}>
              <Paper
                style={{
                  backgroundColor: "transparent"
                }}>
                <Grid container>


                  <Grid item xs={6}>
                    <Paper
                      elevation={0}
                      style={{
                        margin: "10px 40px 0px 20px",
                        padding: "4px 0px 4px 4px",
                        fontSize: "30px",
                        backgroundColor: "transparent",
                        width: "280px"
                      }}>
                      <u>
                        Our Journe
                      </u>y...
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <div class="scroll">
                      <div class="timeline">
                        <div class="container left">
                          <div class="content">
                            <h2>2022</h2>
                            <p>We manged to raise Third round of funding rasing and partnered with "Flipkart Groceries" did introduced 10 minutes Delivery Model in 10+ cities.</p>
                          </div>
                        </div>
                        <div class="container right">
                          <div class="content">
                            <h2>2021</h2>
                            <p>Sales and Delivery number Sky rockted and we manged to raise second round of funding rasing from Shark Tank .</p>
                          </div>
                        </div>
                        <div class="container left">
                          <div class="content">
                            <h2>2020</h2>
                            <p> We launched our first Android and iOS app in market.</p>
                          </div>
                        </div>
                        <div class="container right">
                          <div class="content">
                            <h2>2019</h2>
                            <p>We did our first round of fund rasing and hired more people for team </p>
                          </div>
                        </div>
                        <div class="container left">
                          <div class="content">
                            <h2>2018</h2>
                            <p> We publish our first Web Based App and did organic marketing and to our suprise we started receving positive response from customer. </p>
                          </div>
                        </div>
                        <div class="container right">
                          <div class="content">
                            <h2>2017</h2>
                            <p>We started Rapid Basket in this year and we were 4 Friends which started this Business. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>


            <Grid item xs={12}>
              <Paper
                elevation={0}
                style={{
                  margin: "10px 40px 0px 20px",
                  padding: "4px 0px 4px 4px",
                  fontSize: "30px",
                  backgroundColor: "transparent"
                }}>
                <u>
                  Our Performance
                </u>...
              </Paper>
              <AboutPerformance />

            </Grid>


            <Grid item xs={12}>
              <Paper
                elevation={0}
                style={{
                  margin: "10px 40px 0px 20px",
                  padding: "4px 0px 4px 4px",
                  fontSize: "30px",
                  backgroundColor: "transparent"
                }}>
                <u>
                  Download Our iOS and Android Apps
                </u>...
              </Paper>
              {/* <AboutDownload/> */}

              <Paper
                elevation={10}
                className='Cover'
                style={{
                  // backgroundColor: "red",
                  margin: "10px",
                  padding: "10px",
                }}>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item xs={6}>
                    <Paper
                      elevation={0}
                      style={{
                        fontSize: "120%",
                        textAlign: 'center',
                        borderRadius: "0px",
                        backgroundColor: "#f8dabf"
                      }}>
                      App Store Rating
                    </Paper>
                    <Paper
                      elevation={0}
                      style={{
                        fontSize: "400%",
                        textAlign: 'center',
                        borderRadius: "0px",
                        backgroundColor: "#f8dabf"
                      }}>
                      4.7
                    </Paper>

                    <Paper
                      elevation={0}
                      style={{
                        fontSize: "100%",
                        textAlign: 'center',
                        borderRadius: "0px",
                        backgroundColor: "#f8dabf"

                      }}>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </Paper>

                    <Paper
                      elevation={0}
                      style={{
                        fontSize: "150%",
                        textAlign: 'center',
                        borderRadius: "0px",
                        backgroundColor: "#f8dabf"

                      }}>
                      <Button
                        color='primary'
                        variant="contained"
                        style={{
                          margin: "6px"
                        }}>

                        <AppleIcon fontSize='medium' /> Download
                      </Button>

                    </Paper>


                  </Grid>
                  <Grid item xs={6}>
                    <Paper
                      elevation={0}
                      style={{
                        fontSize: "120%",
                        textAlign: 'center',
                        borderRadius: "0px",
                        backgroundColor: "#f8dabf"
                      }}>
                      Play Store Rating
                    </Paper>
                    <Paper
                      elevation={0}
                      style={{
                        fontSize: "400%",
                        textAlign: 'center',
                        borderRadius: "0px",
                        backgroundColor: "#f8dabf"

                      }}>
                      4.8
                    </Paper>

                    <Paper
                      elevation={0}
                      style={{
                        fontSize: "100%",
                        textAlign: 'center',
                        borderRadius: "0px",
                        backgroundColor: "#f8dabf"

                      }}>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </Paper>

                    <Paper
                      elevation={0}
                      style={{
                        fontSize: "150%",
                        textAlign: 'center',
                        borderRadius: "0px",
                        backgroundColor: "#f8dabf"

                      }}>
                      <Button
                        color='primary'
                        variant="contained"
                        style={{
                          margin: "6px"
                        }}>
                        <SendRoundedIcon fontSize='medium' /> Download
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>


            <Grid item xs={12}>

              <Paper
                style={{
                  backgroundColor: "transparent",
                  padding: "10px"

                }}>
                <Paper
                  elevation={0}
                  style={{
                    margin: "10px 5px 20px 5px",
                    padding: "2px",
                    backgroundColor: "transparent"
                  }}>

                  <Paper
                    elevation={0}
                    style={{
                      margin: "10px 40px 0px 20px",
                      padding: "4px 0px 4px 4px",
                      fontSize: "30px",
                      backgroundColor: "transparent"
                    }}>
                    <u>
                      Contact Us
                    </u>...
                  </Paper>

                </Paper>
                {/* ----------------------- */}

                <div class="profile-cards">

                  <div class="card card-1">

                    <div class="card-description">

                      <h2 class="card-description-title">Wilford Remy Bardsley</h2>

                      <span class="card-description-profession">Back-End Developer</span>

                      <span class="card-description-company">@Google</span>

                      <div class="card-description-social">


                        <ul>
                          <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg></a></li>
                          <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg></a></li>
                          <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg></a></li>
                        </ul>

                      </div>

                    </div>

                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-image" />

                  </div>

                  <div class="card card-2">

                    <div class="card-description">

                      <h2 class="card-description-title">Marilyn Troy</h2>

                      <span class="card-description-profession">Front-End Developer</span>

                      <span class="card-description-company">@Google</span>

                      <div class="card-description-social">

                        <ul>
                          <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg></a></li>
                          <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg></a></li>
                          <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg></a></li>
                        </ul>

                      </div>

                    </div>

                    <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-image" />

                  </div>

                </div>
                {/* ----------------------- */}

              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </>
  )
}

export default About