import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,Typography,
} from "@mui/material";
import MediaCard2 from "../Shared/Card2";
import { connect } from "react-redux";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { getFoodItemByCategory } from "../../Store/AsyncThunk/menuAsync";
import "./Menu.css";
import Snacks from "../../Image/Snacks.png";
import Italian from "../../Image/Italian.png";
import Indian from "../../Image/Indian.png";
import Chinese from "../../Image/Chinese.png";
import Dessert from "../../Image/Desserts.png";

const Menu = (props) => {
  const [finQty, setFinQty] = useState();
  const [snackItem, setSnackItem] = useState([]);
  const [dessertItem, setDessertItem] = useState([]);
  const [indianItem, setIndianItem] = useState([]);
  const [italianItem, setItalianItem] = useState([]);
  const [chineseItem, setChineseItem] = useState([]);
  const [selectedFoodItem, setSelectedFoodItem] = useState([]);
  const navigate = useNavigate();

 

  useEffect(() => {
    props.menuItems !== ""
      ? setSelectedFoodItem(props.menuItems?.data?.user)
      : "";
    let a = 0;
    props.savedDish.length > 0
      ? props.savedDish.map((row) => {
          a = row.p_itemCount + a;
        })
      : "";
    setFinQty(a);
  }, [props.savedDish, props.menuItems]);

  useEffect(() => {
    props.getFoodItemByCategory({ category: "Snacks" });
  }, []);

  const handleCheckout = () => {
    navigate("/Orders");
  };

  const handleChange = (tab) => {
    if (tab == "Snacks" && snackItem.length == 0) {
      props.getFoodItemByCategory({ category: "Snacks" });
    } else if (tab == "Dessert" && dessertItem.length == 0) {
      props.getFoodItemByCategory({ category: "Dessert" });
    } else if (tab == "Indian" && indianItem.length == 0) {
      props.getFoodItemByCategory({ category: "Indian" });
    } else if (tab == "Italian" && italianItem.length == 0) {
      props.getFoodItemByCategory({ category: "Italian" });
    } else if (tab == "Chinese" && chineseItem.length == 0) {
      props.getFoodItemByCategory({ category: "Chinese" });
    }
  };

  return (
    <>
      <div className="Menu">
        <Paper
          style={{
            padding: "10px",
            paddingRight: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            backgroundColor: "#faddbd",
          }}
        >
            <div style={{marginTop :"4rem"}}>
          <Badge badgeContent={props.checkoutCount} color="success">
            <Button
              onClick={handleCheckout}
              variant="contained"
              style={{
                backgroundColor: "#e35520",
              }}
            >
              CheckOut
              <ShoppingCartCheckoutIcon fontSize="large" />
            </Button>
          </Badge>
          </div>
        </Paper>
        <div style={{ display: "flex", overflowX : "scroll", padding : "1rem" }}>
        <div className="MenuHeader" onClick={() => handleChange("Snacks")}>
            <img src={Snacks} />
            <Typography>Snacks</Typography>
          </div>
          <div className="MenuHeader" onClick={() => handleChange("Indian")}>
            <img src={Indian} />
            <Typography>Indian</Typography>
          </div>

          <div className="MenuHeader" onClick={() => handleChange("Dessert")}>
            <img src={Dessert} />
            <Typography>Dessert</Typography>
          </div>
          <div className="MenuHeader" onClick={() => handleChange("Italian")}>
            <img src={Italian} />
            <Typography>Italian</Typography>
          </div>
          <div className="MenuHeader" onClick={() => handleChange("Chinese")}>
            <img src={Chinese} />
            <Typography>Chinese</Typography>
          </div>
        </div>
        <Grid container spacing={1} style={{padding : "1rem"}}>
          {selectedFoodItem?.length > 0 &&
            selectedFoodItem.map((row) => {
              return (
                <Grid item xs={12} sm = {3}>
                  <MediaCard2
                    image={row.photo}
                    name={row.name}
                    price={row.price}
                  />
                  
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    savedDish: state.savedDish,
    menuItems: state.menuItems,
    checkoutCount: state.checkoutCount,
  };
};

const mapDispatchToProps = {
  getFoodItemByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
