import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { borderTop, textAlign } from '@mui/system';
import MediaCard from './Card'


const Menu = () => {
  return (
    <div>

      <Paper
        elevation={3}
        sx={{
          backgroundColor: 'red',
          height: '40px',
          borderTop:'20px',
          textAlign: 'center',
          padding:'8px',

        }}

      >First Counter</Paper>

      <Grid item lg={12} xs={12} container
        direction="row"
        justifyContent="flex-start"
        alignItems="center">

        <Grid item xl={2} xs={2}>
          {/* <Paper
          elevation={3}
          sx={{
            backgroundColor: 'red',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}
          >1.1</Paper> */}
          <MediaCard/>
        </Grid>
        <Grid item xl={2} xs={2}>
          <Paper
           elevation={3}
           sx={{
             backgroundColor: 'red',
             height: '160px',
             width:'150px',
             borderTop:'20px',
             textAlign: 'center',
             padding:'8px',
             margin:'10px'
   
           }}>1.2</Paper>
        </Grid>
        <Grid item xl={2} xs={2}>
          <Paper
           elevation={3}
          sx={{
            backgroundColor: 'red',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>1.3</Paper>
        </Grid>
        <Grid item xl={2} xs={2}>
          <Paper
           elevation={3}
          sx={{
            backgroundColor: 'red',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>1.4</Paper>
        </Grid>
        <Grid item xl={2} xs={2}>
          <Paper
           elevation={3}
          sx={{
            backgroundColor: 'red',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>1.5</Paper>
        </Grid>
        <Grid item xl={2} xs={2}>
          <Paper
           elevation={3}
          sx={{
            backgroundColor: 'red',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>1.6</Paper>
        </Grid>

      </Grid>

      <Paper>Second Counter</Paper>

      <Grid item lg={12} xs={12}>
        <Grid item lg={12} xs={12} container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">

          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Blue',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>2.1</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Blue',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>2.2</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Blue',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>2.3</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Blue',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>2.4</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Blue',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>2.5</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Blue',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>2.6</Paper>
          </Grid>

        </Grid>
      </Grid>
      <Paper>Third Counter</Paper>

      <Grid item lg={12} xs={12}>
        <Grid item lg={12} xs={12} container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">

          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'green',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>3.1</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'green',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>3.2</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'green',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>3.3</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'green',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>3.4</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'green',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>3.5</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'green',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>3.6</Paper>
          </Grid>

        </Grid>
      </Grid>

      <Paper>Fourth Counter</Paper>

      <Grid item lg={12} xs={12}>
        <Grid item lg={12} xs={12} container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">

          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Yellow',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>4.1</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Yellow',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>4.2</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Yellow',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>4.3</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Yellow',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>4.4</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Yellow',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>4.5</Paper>
          </Grid>
          <Grid item xl={2} xs={2}>
            <Paper
             elevation={3}
          sx={{
            backgroundColor: 'Yellow',
            height: '160px',
            width:'150px',
            borderTop:'20px',
            textAlign: 'center',
            padding:'8px',
            margin:'10px'
  
          }}>4.6</Paper>
          </Grid>

        </Grid>
      </Grid>
      <Paper>Fifth Counter</Paper>

<Grid item lg={12} xs={12}>
  <Grid item lg={12} xs={12} container
    direction="row"
    justifyContent="flex-start"
    alignItems="center">

    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Black',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.1</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Black',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.2</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Black',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.3</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Black',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.4</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Black',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.5</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Black',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.6</Paper>
    </Grid>

  </Grid>
</Grid>
<Paper>Sixth Counter</Paper>

<Grid item lg={12} xs={12}>
  <Grid item lg={12} xs={12} container
    direction="row"
    justifyContent="flex-start"
    alignItems="center">

    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Purple',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.1</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Purple',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.2</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Purple',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.3</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Purple',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.4</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Purple',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.5</Paper>
    </Grid>
    <Grid item xl={2} xs={2}>
      <Paper
       elevation={3}
    sx={{
      backgroundColor: 'Purple',
      height: '160px',
      width:'150px',
      borderTop:'20px',
      textAlign: 'center',
      padding:'8px',
      margin:'10px'

    }}>3.6</Paper>
    </Grid>

  </Grid>
</Grid>

    </div>
  )
}

export default Menu
