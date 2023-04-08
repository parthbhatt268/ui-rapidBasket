import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrorMessage, postLogin } from "../../Store/AsyncThunk/userAsync";
import {IconButton, FilledInput, InputLabel, InputAdornment, FormControl} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import LoadingButton from '@mui/lab/LoadingButton';
import ErrorNotification from "../Shared/ErrorNotification"
import { toast } from "react-toastify";


const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login_token = useSelector((state) => state.loginStatus);
  const loadingStatus = useSelector((state) => state.loading)
  const errorMessage = useSelector((state) => state.errorMsg)
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  useEffect(() => {
    if (localStorage.getItem("basket_token")) {
      toast.success("Successfully Logged In")
      navigate("/Home");
    }
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const handleLogin = () => {
    dispatch(postLogin(user))
      .unwrap()
      .then((originalPromiseResult) => {
        localStorage.setItem("basket_token", originalPromiseResult.token);
        localStorage.setItem("customer_id", originalPromiseResult?.data?.user?.custId)
        navigate("/Home");
      });
  };

  return (
    <>
      <div className="login_wrap">
        <div className="LoginContainer">
          <h1 style={{ color: "white" }}>Login</h1>
          <div className="FormRegister">
          <FormControl variant="filled" value={user.email}
          onChange={handleChange}>
          <InputLabel htmlFor="filled-adornment-password">Your Email</InputLabel>
          <FilledInput
          id = "email"
          />
        </FormControl>
        <FormControl variant="filled" value={user.password} 
            onChange ={handleChange}>
          <InputLabel htmlFor="filled-adornment-password">Your Password</InputLabel>
          <FilledInput
            id="password"
            type={showPassword ? "text" : "password"}            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </div>
        {errorMessage?.moreInformation && <ErrorNotification message = {errorMessage?.moreInformation}/>}
        <LoadingButton className="button" loadingPosition="end" loading = {loadingStatus} variant="outlined" onClick={handleLogin}>
          <span>Login</span>
        </LoadingButton>
        <div style={{ color: "white" }}>or</div>
        <LoadingButton className="button" loadingPosition="end" loading = {loadingStatus} variant="outlined" onClick={() => {
          navigate("/Register")
          dispatch(clearErrorMessage())
          }}>
          <span>Register</span>
        </LoadingButton>
        </div>
      </div>
    </>
  );
};

export default Login;
