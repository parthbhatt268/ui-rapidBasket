import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Grid, Paper } from "@mui/material";
import snacks from "../../Image/burger.jpg";
import "./HomePage.css";

const categories = ["Snacks", "Dessert", "Indian", "Italian", "Chinese", "Indian cuisine"]


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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={1}>
      {
        categories.map(row => <>
          <Grid style={{
            //margin:"5px"
          }} item xs={12} md={4}>

            <Card style={{
              background: "#f75d10", 
              maxWidth: "100%",
              borderRadius: "15px",
              marginTop: "10px",
              }}>
              <CardMedia
                component="img"
                height="194"
                image={snacks}
                alt="Paella dish"
              />
              <CardContent sx={{ background: "black" }} >
                <Typography variant="body2" sx={{ color: "white" }}>
                  This impressive paella is a perfect party dish and a fun meal to
                  cook together with your guests. Add 1 cup of frozen peas along
                  with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ justifyContent: "center" }}>
                <Button
                  className="button-89"
                  sx={{ color: "white", padding: "1rem" }}
                >
                  {row}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </>)
      }
    </Grid>
  );
}
