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
                  hello
                </Grid>
                <Grid item xs={12}>
                  <div class="scroll">
                    <div class="timeline">
                      <div class="container left">
                        <div class="content">
                          <h2>2017</h2>
                          <p>Lorem ipsum dolor sit amet, qtracto..</p>
                        </div>
                      </div>
                      <div class="container right">
                        <div class="content">
                          <h2>2016</h2>
                          <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum .</p>
                        </div>
                      </div>
                      <div class="container left">
                        <div class="content">
                          <h2>2015</h2>
                          <p>Lorem ipsum dolor sit ametim fierent de eam.</p>
                        </div>
                      </div>
                      <div class="container right">
                        <div class="content">
                          <h2>2012</h2>
                          <p>Lorem ipsum dolor sit amet, q.</p>
                        </div>
                      </div>
                      <div class="container left">
                        <div class="content">
                          <h2>2011</h2>
                          <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </div>
                      </div>
                      <div class="container right">
                        <div class="content">
                          <h2>2007</h2>
                          <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
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
              elevation={10}
              style={{
                backgroundColor: "red",
                margin: "10px",
                padding: "10px",
              }}>


              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item lg={3} xs={6} >
                  <Paper
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      height: "150px",
                      width: "150px",
                      marginLeft: "10%"
                    }}>
                    5000+ download
                  </Paper>

                </Grid>
                <Grid item lg={3} xs={6}>
                  <Paper
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      height: "150px",
                      width: "150px",
                      marginLeft: "10%"
                    }}>
                    1000+ order per hr
                  </Paper>
                </Grid>
                <Grid item lg={3} xs={6}>
                  <Paper
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      height: "150px",
                      width: "150px",
                      marginLeft: "10%"
                    }}>
                    since 6+ yrs of service
                  </Paper>
                </Grid>
                <Grid item lg={3} xs={6}>
                  <Paper
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      height: "150px",
                      width: "150px",
                      marginLeft: "10%",
                      fontSize: "25px"
                    }}>
                    Total 100000+ meals delivered
                  </Paper>
                </Grid>

              </Grid>
            </Paper>

          </Grid>


          <Grid item xs={12}>
            <Paper
              elevation={10}
              style={{
                backgroundColor: "red",
                margin: "10px",
                padding: "10px",
              }}>

              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={6}>
                  <Paper
                    elevation={0}
                    style={{
                      fontSize: "400%",
                      textAlign: 'center',
                      borderRadius: "0px"
                    }}>
                    4.7
                  </Paper>

                  <Paper
                    elevation={0}
                    style={{
                      fontSize: "100%",
                      textAlign: 'center',
                      borderRadius: "0px"
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
                      borderRadius: "0px"
                    }}>
                    <Button>

                      <AppleIcon fontSize='medium' /> Download App
                    </Button>

                  </Paper>


                </Grid>
                <Grid item xs={6}>
                  <Paper
                    elevation={0}
                    style={{
                      fontSize: "400%",
                      textAlign: 'center',
                      borderRadius: "0px"
                    }}>
                    4.8
                  </Paper>

                  <Paper
                    elevation={0}
                    style={{
                      fontSize: "100%",
                      textAlign: 'center',
                      borderRadius: "0px"
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
                      borderRadius: "0px"
                    }}>
                    <Button>

                      <SendRoundedIcon fontSize='medium' /> Download App
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