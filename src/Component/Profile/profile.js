import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./profile.css";
import { TextField, Typography, Paper, Button } from "@mui/material";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import HomeIcon from "@mui/icons-material/Home";
import {
  postProfileChanges,
  getProfile,
} from "../../Store/AsyncThunk/userAsync";

function Profile(props) {
  const customerId = localStorage.getItem("customer_id");
  const [disEdit, setDisEdit] = useState(false);
  const [profileData, setProfileData] = useState({
    custId: props.profileDetails?.[0]?.custId,
    name: props.profileDetails?.[0]?.name,
    email: props.profileDetails?.[0]?.email,
    address: props.profileDetails?.[0]?.address,
  });

  const handleAddressEdit = (e) => {
    setProfileData({ ...profileData, address: e.target.value });
  };

  const handleEditButtonToggle = (e) => {
    setDisEdit(!disEdit);
    e.target.innerText === "SAVE"
      ? props
          .postProfileChanges(profileData)
          .unwrap()
          .then((result) => {
            props.getProfile(customerId);
          })
      : "";
  };

  useEffect(() => {
    props.getProfile(customerId);
  }, [disEdit]);

  return (
    <>
      <div className="rootPage">
        <div className="rootProfileCard">
          <Paper className="profilecardcontent">
            <Paper className="orangeBar">
              <Typography className="Profilename">
                {props.profileDetails?.[0]?.name}
              </Typography>
            </Paper>
            <Paper className="contentCard">
              <div className="detailsSection">
                <div className="iconText">
                  <MarkunreadIcon />
                  <Typography className="textclass">
                    {props.profileDetails?.[0]?.email}
                  </Typography>
                </div>
                <div className="iconText">
                  <HomeIcon />
                  {disEdit ? (
                    <TextField
                      className="textclass"
                      onChange={handleAddressEdit}
                    ></TextField>
                  ) : (
                    <Typography className="textclass">
                      {props.profileDetails?.[0]?.address
                        ? props.profileDetails?.[0]?.address
                        : "Press on Edit to Add Delivery Location!"}
                    </Typography>
                  )}
                </div>
              </div>
              <Button
                variant="contained"
                className="editButton"
                onClick={handleEditButtonToggle}
              >
                {disEdit ? `Save` : `Edit`}
              </Button>
            </Paper>
          </Paper>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  savedDish: state.savedDish,
  profileDetails: state.profileDetails,
});

const mapDispatchToProps = {
  postProfileChanges,
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
