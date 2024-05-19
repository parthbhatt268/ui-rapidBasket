import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getFoodItemByCategory } from "../../Store/AsyncThunk/menuAsync";
// import { saveSelectedItem } from "../../Store/Reducer";
import snacks from "../../Image/burger.jpg";
import dessert from "../../Image/dessert.jpg";
import indian from "../../Image/indian.jpg";
import italian from "../../Image/italian.jpg";
import chinese from "../../Image/chinese.jpg";
import cuisine from "../../Image/cuisine.jpg";
import "./Home.css";
const categories = [
  {
    Item: "Snacks",
    Img: snacks,
    msg: "With our wide variety of snacks, you can choose the perfect nibble to accompany your main meal or to enjoy on its own."
  },
  {
    Item: "Dessert",
    Img: dessert,
    msg: "End your meal on a high note with our delectable desserts, ranging from classic favorites to indulgent specialties."
  },
  {
    Item: "Indian",
    Img: indian,
    msg: "Spice up your mealtime with our mouthwatering Indian dishes, crafted with traditional recipes and delivered straight to you."
  },
  {
    Item: "Italian",
    Img: italian,
    msg: "Indulge in our flavorful Chinese dishes, made with fresh ingredients and delivered straight to your door."
  },
  {
    Item: "Chinese",
    Img: chinese,
    msg: "Treat yourself to our delicious Italian cuisine, featuring classic and modern twists, all delivered straight to you."
  },
  {
    Item: "Indian cuisine",
    Img: cuisine,
    msg: "Satisfy your appetite for Indian cuisine with mouthwatering selection of dishes, made with fresh ingredients."
  }
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleButtonClick = (category) => {
    //props.saveSelectedItem(category);
    props.getFoodItemByCategory({ category });
    navigate("/Menu");
  };

  return (
    <Grid container spacing={1}>
      {categories.map((row, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card
            style={{
              background: "#f75d10",
              maxWidth: "100%",
              borderRadius: "15px",
              marginTop: "10px",
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={row.Img}
              alt={row.Item}
            />
            <CardContent sx={{ background: "#462211" }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                {row.msg}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: "center" }}>
              <Button
                className="button-89"
                sx={{ color: "white", padding: "1rem" }}
                onClick={() => handleButtonClick(row.Item)}
              >
                {row.Item}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const mapDispatchToProps = {
  getFoodItemByCategory,
  //saveSelectedItem,
};

export default connect(null, mapDispatchToProps)(RecipeReviewCard);
