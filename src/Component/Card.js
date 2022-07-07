import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { height } from '@mui/system';


export default function MediaCard(props) {
    const [itemCount, setItemCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    const handleAddToCart = () => {
        setToggle(false)
        setItemCount(itemCount + 1)
    }
    return (
        <Card sx={{
            height: '180px',
            width: '150px',
            borderTop: '20px',
            textAlign: 'center',
            padding: '8px',
            margin: '10px'
        }}>
            {props.name}
            <CardMedia
                component="img"
                image={props.image}
                alt="green"
            />
            <Paper
            elevation={0}
            style={{
                marginTop:"10px",
                backgroundColor:"rgb(224 181 103)"
            }}>

            {props.price}
            </Paper>
            <CardActions>
                {toggle === true &&
                    <Button
                        onClick={handleAddToCart}>
                        Add To Cart
                    </Button>
                }
                {toggle === false &&
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius:"5px",
                            minWidth: "30px",
                            minHeight: "20px"
                        }}
                onClick={() => {
                    if (itemCount > 1) {
                        setItemCount(itemCount - 1);
                    }
                    else {
                        setToggle(true)
                    }
                }}
                    >
                <RemoveIcon fontSize="small" />
            </Button>
                }
            {toggle === false &&

                <Paper
                elevation={0}
                style={{
                    margin:"5px",
                    marginLeft:"8px"
                }}>{itemCount}</Paper>
            }
            {toggle === false &&
                <Button
                    variant="contained"
                    sx={{
                        borderRadius:"5px",
                        minWidth: "40px",
                        minHeight: "20px"
                                        }}
                    onClick={() => {
                        setItemCount(itemCount + 1);
                    }}
                >
                    <AddIcon fontSize="small" />
                </Button>

            }
        </CardActions>
        </Card >
    );
}
