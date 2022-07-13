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
import { FormControl } from '@mui/material';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Arima&display=swap');
</style>


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const About = () => {
  return (
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
            <Paper
              elevation={10}
              className="Cover"
              style={{
                //backgroundColor: "white",
                margin: "10px",
                padding: "10px",
              }}>


              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item lg={3} md={3} xs={6} >
                  <Paper

                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      height: "150px",
                      width: "150px",
                      margin: "auto",
                      backgroundColor: "#f8dabf",
                      fontSize: "20px",
                      textAlign: "center"


                    }}>
                    <Paper
                      elevation={0}
                      style={{
                        width: "150px",
                        margin: "auto",
                        backgroundColor: "#f8dabf",
                        fontSize: "40px",
                        borderRadius: "0px",
                        textAlign: "center"

                      }}>
                      3M+
                    </Paper>
                    Downloads on App
                  </Paper>

                </Grid>
                <Grid item lg={3} md={3} xs={6}>
                  <Paper
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      height: "150px",
                      width: "150px",
                      margin: "auto",
                      backgroundColor: "#f8dabf",
                      fontSize: "20px",
                      textAlign: "center"

                    }}>
                    <Paper
                      elevation={0}
                      style={{
                        width: "150px",
                        margin: "auto",
                        backgroundColor: "#f8dabf",
                        fontSize: "40px",
                        borderRadius: "0px",
                        textAlign: "center"

                      }}>
                      1000+
                    </Paper>
                    Orders per hour
                  </Paper>
                </Grid>
                <Grid item lg={3} md={3} xs={6}>
                  <Paper
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      height: "150px",
                      width: "150px",
                      margin: "auto",
                      backgroundColor: "#f8dabf",
                      fontSize: "20px",
                      textAlign: "center"

                    }}>
                    <Paper
                      elevation={0}
                      style={{
                        width: "150px",
                        margin: "auto",
                        backgroundColor: "#f8dabf",
                        fontSize: "40px",
                        borderRadius: "0px",
                        textAlign: "center"

                      }}>
                      6+
                    </Paper> Years of service
                  </Paper>
                </Grid>
                <Grid item lg={3} md={3} xs={6} >
                  <Paper
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      height: "150px",
                      width: "150px",
                      margin: "auto",
                      backgroundColor: "#f8dabf",
                      fontSize: "20px",
                      textAlign: "center"
                    }}>

                    <Paper
                      elevation={0}
                      style={{
                        width: "150px",
                        margin: "auto",
                        backgroundColor: "#f8dabf",
                        fontSize: "40px",
                        borderRadius: "0px",
                        textAlign: "center"

                      }}>
                      10000+
                    </Paper>
                    Total meals delivered 
                  </Paper>
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
                Download Our iOS and Android Apps
              </u>...
            </Paper>

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
            <Paper>xs=8</Paper>
          </Grid>
        </Grid>
      </Paper>
    </main>
  )
}

export default About