import { Button, Paper } from "@mui/material";
import React from "react";
import "./HomePage.css";
import biryani from "./biryani.jpg";
import RecipeReviewCard from "./Card";



function HomePage() {
  return (
    <>
      <div className="upperHomePageWrap">
        <img src={biryani} width="100%" height="100%" />
        <Paper
          elevation={0}
          sx={{ backgroundColor: "transparent", position: "absolute" }}
        >
          <div class="wrapper">
            <ul class="dynamic-txts">
              <li>
                <span>Fastest </span>
              </li>
              <li>
                <span>Tastiest </span>
              </li>
              <li>
                <span>Healthiest </span>
              </li>
              <li>
                <span>Fresh </span>
              </li>
              <li>
                <span>Fresh </span>
              </li>
            </ul>
          </div>
          <div className="tagLine">Food delivery at your Doorstep.</div>
          <button className="orderNow">Order Now</button>
        </Paper>
      </div>
      <div>
        
          <RecipeReviewCard/>
          
        
        {/* <Paper className="MenuCard" elevation={3}>
          <Button></Button>
        </Paper> */}
      </div>
    </>
  );
}

export default HomePage;
