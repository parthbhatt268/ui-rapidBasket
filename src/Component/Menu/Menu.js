import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";
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
import Beverage from "../../Image/Beverage.png"

const Menu = (props) => {
  const [finQty, setFinQty] = useState();
  const [selectedFoodItem, setSelectedFoodItem] = useState([]);
  const [tabSelected, setTabSelected] = useState("");
  const [randomIndex, setrandomIndex] = useState()

  const navigate = useNavigate();
  const FoodCategories = [Snacks, Indian, Dessert, Italian, Chinese, Beverage];
  const FoodCategoriesText = [
    "Snacks",
    "Indian",
    "Dessert",
    "Italian",
    "Chinese",
    "Beverages"
  ];

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
    const randIndex = Math.floor(Math.random() * props.menuItems?.data?.user.length);
    setrandomIndex(randIndex)
  }, [props.savedDish, props.menuItems]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const section = queryParams.get('section');
    if (section) {
      setTabSelected(section);
      props.getFoodItemByCategory({ category: section });
    } else {
      setTabSelected("Snacks");
      props.getFoodItemByCategory({ category: "Snacks" });
    }
  }, []);

  const handleCheckout = () => {
    navigate("/Orders");
  };

  const handleChange = (tab) => {
    setTabSelected(tab);
    props.getFoodItemByCategory({ category: tab });
  };

  const selectedFoodItemhighlight = () => {
    return "#f75d10";
  };

  const selectedFoodItemBoldtext = () => {
    return "700";
  };

  return (
    <>
      <div className="Menu">
        <Grid
          container
          style={{
            display: "flex",
            padding: "1rem",
            marginTop: "5rem",
            backgroundColor: "antiquewhite"
          }}
        >
          {FoodCategories?.length > 0 &&
            FoodCategories.map((row, index) => {
              return (
                <Grid
                  item
                  xs={4}
                  sm={2}
                  className="MenuHeader"
                  onClick={() => handleChange(FoodCategoriesText[index])}
                >
                  <img src={row} style={{ width: "100px", height: "100px" }} />
                  <Typography
                    style={{
                      color:
                        tabSelected === FoodCategoriesText[index]
                          ? selectedFoodItemhighlight()
                          : "",
                      fontWeight:
                        tabSelected === FoodCategoriesText[index]
                          ? selectedFoodItemBoldtext()
                          : "",
                    }}
                  >
                    {`${FoodCategoriesText[index]}`}
                  </Typography>
                </Grid>
              );
            })}
        </Grid>
        <Grid container spacing={1} style={{ padding: "1rem", paddingBottom: "70px" }}>
          {selectedFoodItem?.length > 0 &&
            selectedFoodItem.map((row, index) => {
              return (
                <Grid item xs={12} sm={3}>
                  <MediaCard2
                    image={row.photo}
                    name={row.name}
                    price={row.price}
                    discoutIndex={index === randomIndex ? randomIndex : ""}
                  />
                </Grid>
              );
            })}
        </Grid>
        {props.savedDish && props.savedDish.length > 0 &&
          <AppBar style={{ bottom: 0, top: "auto", backgroundColor: "#f75d10" }}>
            <Toolbar>
              <Badge badgeContent={props.checkoutCount} color="success">
                <Button
                  onClick={handleCheckout}
                  variant="contained"
                  style={{
                    backgroundColor: "#ffffff",
                    color:"#c06f2c"
                  }}
                >
                  CheckOut
                  <ShoppingCartCheckoutIcon fontSize="large" />
                </Button>
              </Badge>
            </Toolbar>
          </AppBar>
        }
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
