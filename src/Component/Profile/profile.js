import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./profile.css";
import Paper from "@mui/material/Paper";
import { TextField, Typography } from "@mui/material";
import ResponsiveAppBar from "../Shared/NavBar";
import Button from "@mui/material/Button";
import profileBackground from "../../Image/profilebackground.png";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import HomeIcon from "@mui/icons-material/Home";
import {
  postProfileChanges,
  getProfile,
} from "../../Store/AsyncThunk/userAsync";

function Profile(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [disEdit, setDisEdit] = useState(true);
  const [profileData, setProfileData] = useState({
    name: "Parth",
    email: "hello@gmail.com",
    // password: "",
    address: "Navi Mumbai, India",
  });

  useEffect(() => {
    props.getProfile();
  }, []);

  const handleName = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditButtonToggle = () => {
    setDisEdit(!disEdit);
    let payload = {};
    if (disEdit == false) {
      payload = profileData;
      props.postProfileChanges(payload);
    }
    console.log("Payload", payload);
  };

  return (
    <>
      <div className="rootPage">
        <div className="rootProfileCard">
          <Paper className="profilecardcontent">
            <Paper className="orangeBar">
              <Paper className="Profilepicture"></Paper>
              <Typography className="Profilename">Harry Potter</Typography>
            </Paper>
            <Paper className="contentCard">
              <div className="detailsSection">
                <div className="iconText">
                  <MarkunreadIcon />
                  <Typography className="textclass">harrypotter@hogwarts.com</Typography>
                </div>
                <div className="iconText">
                  <HomeIcon />
                  {disEdit ? <TextField className="textclass"></TextField> : <Typography className="textclass">
                    Bed 2A, Boys Gryffindor Room, 1st Floor, Hogwarts Dormitory,
                    England.
                  </Typography>}
                  
                </div>
              </div>
              <Button variant="contained" className="editButton" onClick={handleEditButtonToggle}>
                {disEdit ? `Save` : `Edit`}
              </Button>
            </Paper>
          </Paper>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  postProfileChanges,
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
