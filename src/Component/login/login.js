import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../../Store/AsyncThunk/userAsync";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login_token = useSelector((state) => state.loginStatus);
  useEffect(() => {
    if (localStorage.getItem("basket_token")) {
      navigate("/Home");
    }
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = () => {
    dispatch(postLogin(user))
      .unwrap()
      .then((originalPromiseResult) => {
        localStorage.setItem("basket_token", login_token.token);
        navigate("/Home");
      });
  };

  return (
    <>
      {/* <div class="container"></div> */}
      <div className="login_wrap">
        <div className="LoginContainer">
          <h1 style={{ color: "white" }}>Login</h1>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          ></input>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          ></input>
          <div className="button" onClick={handleLogin}>
            Login
          </div>
          <div style={{ color: "white" }}>or</div>
          <div className="button" onClick={() => navigate("/Register")}>
            Register
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
