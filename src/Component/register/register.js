import React, { useState, useEffect } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrorMessage,
  postRegister,
} from "../../Store/AsyncThunk/userAsync";
import {
  IconButton,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorNotification from "../Shared/ErrorNotification";

const Register = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.loading);
  const errorMessage = useSelector((state) => state.errorMsg);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (localStorage.getItem("basket_token")) {
      navigate("/home");
    }
  }, []);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const register = () => {
    const { name, email, password, passwordConfirm } = user;
    if (name && email && password && password === passwordConfirm) {
      dispatch(postRegister(user))
        .unwrap()
        .then((originalPromiseResult) => {
          localStorage.setItem("basket_token", originalPromiseResult.token);
          localStorage.setItem("customer_id", originalPromiseResult.user?.custId)
          navigate("/home");
        });
    }
  };

  return (
    <Paper>
      <div className="register_wrap">
        <div className="register">
          <h1 style={{ color: "white" }}>Register</h1>
          <div className="FormRegister">
            <FormControl
              variant="filled"
              value={user.name}
              onChange={handleChange}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Your Name
              </InputLabel>
              <FilledInput id="name" />
            </FormControl>
            <FormControl
              variant="filled"
              value={user.email}
              onChange={handleChange}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Your Email
              </InputLabel>
              <FilledInput id="email" />
            </FormControl>
            <FormControl
              variant="filled"
              value={user.password}
              onChange={handleChange}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Your Password
              </InputLabel>
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant="filled"
              value={user.passwordConfirm}
              onChange={handleChange}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Re-enter Password
              </InputLabel>
              <FilledInput
                id="passwordConfirm"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          {errorMessage?.moreInformation && (
            <ErrorNotification message={errorMessage?.moreInformation} />
          )}
          <LoadingButton
            className="button"
            disabled={
              user.name &&
              user.email &&
              user.password &&
              user.password === user.passwordConfirm
                ? false
                : true
            }
            loadingPosition="end"
            loading={loadingStatus}
            variant="outlined"
            onClick={register}
          >
            <span>Register</span>
          </LoadingButton>
          <div style={{ color: "white" }}>or</div>
          <LoadingButton
            className="button"
            loadingPosition="end"
            loading={loadingStatus}
            variant="outlined"
            onClick={() => {
              navigate("/Login");
              dispatch(clearErrorMessage());
            }}
          >
            <span>Login</span>
          </LoadingButton>
        </div>
      </div>
    </Paper>
  );
};

export default Register;
