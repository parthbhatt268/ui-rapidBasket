import * as React from 'react';
import {Card, CardActions, CardMedia,Button,Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { connect } from "react-redux"
import {saveDish} from "../../Store/AsyncThunk/orderAsync"

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
        <>
        <Card sx={{
            height: '270px',
            width: '180px',
            minHeight: '220px',
            minWidth: '180px',
            borderTop: '20px',
            textAlign: 'center',
            padding: '8px',
            margin: '10px',
        }}>
            {props.name}
            <CardMedia
            style={{
                height:"150px"
            }}
                component="img"
                image={`data:image/jpeg;base64,${props.image}`}
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
            <CardActions
            style={{
                marginLeft:"15px"
            }}>
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
        </>
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