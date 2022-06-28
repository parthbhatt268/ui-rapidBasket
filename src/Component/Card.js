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


export default function MediaCard(props) {
    const [itemCount, setItemCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    const handleAddToCart = () => {
        setToggle(false)
        setItemCount(itemCount + 1)
    }
    return (
        <Card sx={{
            height: '160px',
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
            {props.price}
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
                            borderRadius: '100%'
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

                    <Paper>{itemCount}</Paper>
                }
                {toggle === false &&
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: '100%'
                        }}
                        onClick={() => {
                            setItemCount(itemCount + 1);
                        }}
                    >
                        <AddIcon fontSize="small" />
                    </Button>

                }
            </CardActions>
        </Card>
    );
}
