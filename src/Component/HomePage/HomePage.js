import { Button, Paper } from "@mui/material";
import React from "react";
import "./HomePage.css";
import biryani from "../../Image/food1.jpg";
import RecipeReviewCard from "./Card";
import ResponsiveAppBar from "../Shared/NavBar/navBar";
import DialogBox from "../Shared/DialogBox/DialogBox";



function HomePage() {
  return (
    <>
      <div className="upperHomePageWrap">
        <Paper>
        <img src={biryani} minheight = {"86vh"} width={"100%"}/>
        </Paper>
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
          <div className="tagLine">Food delivery at
          <br/> your Doorstep.</div>
          <button className="orderNow">Order Now</button>
          <DialogBox open="false" status="Success" msg="Order Successfully Placed" okBtn="true"   />
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
