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
import { connect } from "react-redux"
import {saveDish} from "../../Store/AsyncThunk/userAsync"

const MediaCard = (props) => {
    const [itemCount, setItemCount] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [selectedItem, setSelectedItem] = useState([]);
    //const [finalItemCount, setfinalIItemCount] = useState(0);

    //const [jack, setJack] = useState([]);

    let count = 0
    const handleAdd = () => {
        count = count + 1
        setToggle(false)
        setItemCount(itemCount + 1);

        
        let payload = {}
        payload.p_name = props.name
        payload.p_itemCount = itemCount + 1
        payload.p_price = props.price
        payload.p_amount = props.price * (itemCount + 1)

        setSelectedItem(payload)
        //console.log("Add payload", payload)
        props.saveDish(payload)

    }

    const handleSub = () => {
        
        if(itemCount>1){

            setItemCount(itemCount - 1);
            count = count - 1

        }
        else{
            setToggle(true)
        }

        let payload = {}
        payload.p_name = props.name
        payload.p_itemCount = itemCount - 1
        payload.p_price = props.price
        payload.p_amount = props.price * (itemCount-1)

        setSelectedItem(payload)
        //console.log("Sub payload", payload)
        props.saveDish(payload)

    }
    return (
        <Card sx={{
            height: '200px',
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
            <Paper               //Price
                elevation={0}
                style={{
                    marginTop: "10px",
                    backgroundColor: "rgb(224 181 103)"
                }}>

                ₹{props.price}
                {/* {console.log(props.savedDish)} */}
                
            </Paper>
            <CardActions>
                {toggle === true &&
                    <Button
                        onClick={handleAdd}>
                        Add To Cart
                    </Button>
                }
                {toggle === false &&
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "5px",
                            minWidth: "30px",
                            minHeight: "20px"
                        }}
                        onClick={handleSub}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                }
                {toggle === false &&

                    <Paper
                        elevation={0}
                        style={{
                            margin: "5px",
                            marginLeft: "8px"
                        }}>{itemCount}</Paper>
                }
                {toggle === false &&
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "5px",
                            minWidth: "40px",
                            minHeight: "20px"
                        }}
                        onClick={handleAdd}
                    >
                        <AddIcon fontSize="small" />
                    </Button>

                }
            </CardActions>
        </Card >
    );
}

const mapStateToProps = (state) => {
    return {
        savedDish:state.savedDish
    };
};

const mapDispatchToProps = {
  saveDish
};


export default connect(mapStateToProps, mapDispatchToProps)(MediaCard);